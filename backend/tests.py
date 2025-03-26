print("I am rachel hahahha")
print("u suck")
from fastapi import FastAPI
from fastapi.testclient import TestClient
from main import app
client = TestClient(app)

def test_tha_status():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def myEquation(x):
    return x + 10

def test_MyEquation():
    assert myEquation(5) == 15