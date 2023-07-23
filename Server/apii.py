from flask import Flask
import datetime
import json

from pymongo import MongoClient
from pymongo.server_api import ServerApi
import json
# Flask app Creation
api = Flask(__name__)

# Database Connection
uri = "mongodb+srv://sainath19:eVZy68zqISUXNdLh@cluster0.mez8kyv.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi("1"))
try:
    client.admin.command("ping")
    print("Connected")
except Exception as e:
    print(e)
db = client["Library"]
logs = db["logs"]
data = db["data"]


# Test data
data = {
    "rollno": "21AT1A3519",
    "bookid": "1001",
    "issuedate": datetime.datetime.now(),
    "returndate": datetime.datetime.now()+datetime.timedelta(days=14),
    "status": "Not Returned"
}

data2 = {
    "rollno": "21AT1A3519",
    "bookid": "1001"
}


# API routes
@api.route("/")
def root():
    return "Hello test"


@api.route("/issue")
def issue_book():
    try:
        db.logs.insert_one(data)
        return {"response": "Success"}
    except Exception as e:
        print(e)
        return "An error Occured"


@api.route("/return")
def return_book():
    db.logs.delete_one(data)
    return {"response": "Success"}


@api.route("/logs")
def logs():
    alldata = []
    for x in db.logs.find():
        print(x)
    return json.loads(alldata)
