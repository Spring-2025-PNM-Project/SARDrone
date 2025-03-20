from fastapi import FastAPI, File, UploadFile
from classification import ClassificationModel
import uvicorn


app = FastAPI()

classificationmodel = ClassificationModel()


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

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, log_level="info")