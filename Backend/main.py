from fastapi import FastAPI, File, UploadFile
from classification import classify

app = FastAPI()

classificationmodel = classify()


@app.get('/')
def root():
    return {"Hello": "World"}

@app.post("/upload/")
async def process_image(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        result = classificationmodel.generate(image_bytes)
        return {"result": result}
    except Exception as e:
        return {"message": e.args}
        