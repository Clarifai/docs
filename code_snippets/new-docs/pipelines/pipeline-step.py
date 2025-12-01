import argparse

import clarifai
from clarifai.utils.logging import logger

def main():
    parser = argparse.ArgumentParser(description='stepA processing step.')
    parser.add_argument('--input_text', type=str, required=True, help='Text input for processing')

    args = parser.parse_args()

    logger.info(clarifai.__version__)

    # TODO: Implement your pipeline step logic here
    logger.info(f"stepA processed: {args.input_text}")


if __name__ == "__main__":
    main()
