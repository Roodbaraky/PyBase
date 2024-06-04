import shutil
from typing import Union, List, Annotated

from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field

app = FastAPI()


class Item(BaseModel):
    name: str  # gt = Greater Than >
    price: float = Field(gt=1, description="The price must be greater than zero")
    is_offer: Union[bool, None] = None
    description: str | None = Field(default=None, description="Description of the item")
    tags: List[str] = []


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id, "price": item.price}


@app.post("/files/")
async def create_file(file: Annotated[bytes, File()]):
    return {"file_size": len(file)}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    file_location = f"./{file.filename}"
    with open(file_location, "wb") as file_object:
        shutil.copyfileobj(file.file, file_object)
    with open(file_location, "a") as file_object:
        file_object.write("\nHiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        
    return FileResponse(file_location, media_type='application/octet-stream',filename=file_location)