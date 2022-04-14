"""
A script designed for running bulk NLP model predictions on a .csv file of text entries.
It requires the library clarifai_grpc (to install it: `pip install clarifai_grpc`).

Mandatory arguments:
- a CSV file with a "text" column; additional columns will be included/returned in the output file
- a Clarifai API KEY
- the model ID of the NLP model that you wish to predict with
- the specific model version ID for the above NLP model

Optional/Default arguments:
- the "top n" number of results to be returned from the model predictions. default 3. [1-200]
- the batch size or number of inputs to send in per predict call. default 32. max 128.

Example usage:
python nlp_model_predicts --csv_file CSVFILE --api_key API_KEY --model_id MODEL_ID --model_version MODEL_VERSION

Example input CSV file:
text,random_column_1
"The quick brown fox something something.",perhaps_some_data
"The lazy dog is...",some_other_data

Example output CSV file:
text,predict_1_concept,predict_1_value
"The quick brown fox something something.",predicted_concept,0.873
"The lazy dog is...",predicted_concept,0.982
"""

import argparse
import csv
import os

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2


def chunker(seq, size):
    return (seq[pos:pos + size] for pos in range(0, len(seq), size))


def get_predict(texts, stub, model_id, model_version, auth_metadata, top_n):
    """
    inputs:
    • texts: a list of text to run predictions on
    • auth_metadata: (('authorization', 'Key YOUR_API_KEY'),)
    • top_n: integer for the desired max number of returned concepts [limit 20]

    returns:
    • the original text
    • predict_n_concept : predicted concept ID
    • predict_n_value   : predict concept value
    """

    if len(texts) > 128:
        raise Exception('Input length over maximum batch size. Please send in batches less than 128.')

    inputs = [
        resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(raw=x)))
        for x in texts
    ]

    # make the model predict request
    request = service_pb2.PostModelOutputsRequest(
        model_id=model_id,
        version_id=model_version,
        inputs=inputs,
    )

    response = stub.PostModelOutputs(request, metadata=auth_metadata)

    if response.status.code != status_code_pb2.SUCCESS:
        raise Exception("A failed response: " + str(response.status) + "\n\nFull response:\n" + str(response))

    # parse results
    list_of_dicts = []
    for resp in response.outputs:
        temp_dict = {
            'text': resp.input.data.text.raw
        }

        for n in range(top_n):
            try:
                temp_dict['predict_{}_concept'.format(n + 1)] = resp.data.concepts[n].id
                temp_dict['predict_{}_value'.format(n + 1)] = "%.3f" % resp.data.concepts[n].value
            except Exception as e:
                print(e)
                break

        list_of_dicts.append(temp_dict)

    return list_of_dicts


def main():
    parser = argparse.ArgumentParser(
        description=
        'Given a CSV file with a "text" column, provide NLP model predictions.'
    )
    parser.add_argument('--api_key', required=True, help='the app\'s API key', type=str)
    parser.add_argument('--csv_file', required=True, help='the CSV file with texts', type=str)
    parser.add_argument('--model_id', required=True, help='the model ID', type=str)
    parser.add_argument(
        '--model_version', required=True, help='the specific model version ID', type=str)
    parser.add_argument(
        '--top_n', default=3, type=int, help='num results returned. default 3. max 200.')
    parser.add_argument(
        '--batch_size', default=32, type=int, help='prediction batch size. default 32. max 128')

    args = parser.parse_args()

    # setup the gRPC channel
    channel = ClarifaiChannel.get_json_channel()
    stub = service_pb2_grpc.V2Stub(channel)
    metadata = (('authorization', f'Key {YOUR_API_KEY}'.format(args.api_key)),)

    texts = []
    with open(args.csv_file) as f:
        csv_reader = csv.DictReader(f)
        for row in csv_reader:
            if 'text' not in row:
                raise Exception('The CSV file must contain column with a header named text')

            texts.append(row['text'])

    predicted_data = []
    # run model predictions in batches
    for i, texts_chunk in enumerate(chunker(texts, args.batch_size)):
        print("Predicting chunk #" + str(i + 1))
        predicted_data.extend(get_predict(texts_chunk, stub, args.model_id, args.model_version, metadata, args.top_n))

    output_name = os.path.splitext(args.csv_file)[0] + '_results.csv'
    print('Results saved to {}'.format(output_name))

    with open(output_name, 'w') as f:
        csv_writer = csv.DictWriter(f, fieldnames=predicted_data[0].keys())
        csv_writer.writeheader()
        csv_writer.writerows(predicted_data)


if __name__ == '__main__':
    main()