from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def get_database():
    try:
        client = MongoClient(os.getenv("CONNECTION_STRING"))
        print(client)
        return client
    except:
        print("Error connecting to DB")

if __name__=="__main__":
    get_database()
