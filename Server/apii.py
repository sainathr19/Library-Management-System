from flask import Flask
from datetime import datetime
import json
from flask_cors import CORS
from flask import request
from pymongo import MongoClient
from pymongo.server_api import ServerApi
import json
# Flask app Creation
api = Flask(__name__)
CORS(api)

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


def makelogsdata(rollno, bookid):
    data = {
        "rollno": rollno,
        "bookid": [bookid],
        "time": datetime.time(),
    }
    return data


def makedata(rollno, bookid):
    data = {
        "rollno": rollno,
        "bookid": [bookid],
        "issuedate": datetime.now(),
        "returndate": datetime.now()+datetime.timedelta(days=14),
        "status": "Not Returned"

    }
    return data
# API routes


@api.route("/")
def root():
    return "Hello test"


@api.route("/issue", methods=["POST"])
def issue_book():
    try:
        rollno = request.args.get("rollno")
        bookid = request.args.get("bookid")
        if (db.data.count_documents({"rollno": rollno}) > 0):
            db.data.update_one({"rollno": rollno}, {
                               "$addToSet": {"bookid": bookid}})
        else:
            db.logs.insert_one(makelogsdata(rollno, bookid))
            db.data.insert_one(makedata(rollno, bookid))
        return {"response": "Success"}
    except Exception as e:
        print(e)
        return {"response": "Error"}


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
