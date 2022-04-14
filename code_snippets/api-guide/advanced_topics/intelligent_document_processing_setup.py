import os

from pdf2image import convert_from_path

def pdf_to_page_images(file_path):
    """return an iterable of images that span the pages of the document"""
    assert os.path.exists(file_path), f"file not found: {file_path}"
    pdf_images = convert_from_path(file_path)

    return pdf_images