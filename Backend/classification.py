import base64
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
import PIL.Image
from io import BytesIO

load_dotenv()

class ClassificationModel:
    @staticmethod
    def generate(image_bytes: bytes):
        try:
            image = PIL.Image.open(BytesIO(image_bytes))
            client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

            response = client.models.generate_content(
                model  ="gemini-2.0-flash",
                contents = ["Classify whether or not there is a person in the image with a score of 0 - 100", image]
            )
            
            print(response.text)
            return response.text
        except:
            print("An exception has occured with generating response")

    if __name__ == "__main__":
        generate()
