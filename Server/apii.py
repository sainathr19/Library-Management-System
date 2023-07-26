from flask import Flask
from datetime import datetime, timedelta
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
logdata = db["logdata"]

# Log data for Issue And Return


def ilogsdata(rollno, bookid):
    t = datetime.now()
    data = {
        "date": t.strftime("%b")+" "+t.strftime("%d"),
        "time": t.strftime("%X")[:5],
        "rollno": rollno.upper(),
        "bookid": bookid,
        "action": "Issued"
    }
    return data


def rlogsdata(rollno, bookid):
    t = datetime.now()
    data = {
        "date": t.strftime("%b")+" "+t.strftime("%d"),
        "time": t.strftime("%X")[:5],
        "rollno": rollno.upper(),
        "bookid": bookid,
        "action": "Returned"
    }
    return data


def relogsdata(rollno, bookid):
    t = datetime.now()
    data = {
        "date": t.strftime("%b")+" "+t.strftime("%d"),
        "time": t.strftime("%X")[:5],
        "rollno": rollno.upper(),
        "bookid": bookid,
        "action": "Renewal"
    }
    return data

# Actual Data


def makedata(rollno, bookid):
    data = {
        "rollno": rollno.upper(),
        "bookid": bookid,
        "issuedate": (datetime.now()).strftime("%x"),
        "returndate": (datetime.now()+timedelta(days=14)).strftime("%x")
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
        if (db.data.count_documents({"bookid": bookid}) > 0):
            return {"response": "AlreadyIssued"}
        db.data.insert_one(makedata(rollno, bookid))
        db.logdata.insert_one(ilogsdata(rollno, bookid))
        return {"response": "Success"}
    except Exception as e:
        print(e)
        return {"response": "Error"}


@api.route("/return", methods=["POST"])
def return_book():
    try:
        rollno = request.args.get("rollno")
        bookid = request.args.get("bookid")
        if (db.data.count_documents({"rollno": rollno.upper(), "bookid": bookid}) > 0):
            db.data.delete_one({"rollno": rollno.upper(), "bookid": bookid})
            db.logdata.insert_one(rlogsdata(rollno, bookid))
            return {"response": "Success"}
        else:
            return {"response": "NotFound"}
    except Exception as e:
        print(e)
        return {"response": "Error"}


@api.route("/renew", methods=["POST"])
def renew_book():
    try:
        rollno = request.args.get("rollno")
        bookid = request.args.get("bookid")
        if (db.data.count_documents({"rollno": rollno.upper(), "bookid": bookid}) > 0):
            db.data.update_one({"rollno": rollno.upper(), "bookid": bookid}, {
                               "$set": {"returndate": (datetime.now()+timedelta(days=14)).strftime("%x")}})
            db.logdata.insert_one(relogsdata(rollno, bookid))
            return {"response": "Success"}
        else:
            return {"response": "NotFound"}
    except Exception as e:
        print(e)
        return {"response": "Error"}


@api.route("/logs")
def logs():
    alldata = []
    for x in db.logdata.find({}, {"_id": False}).sort("_id", -1):
        alldata.append(x)
    return alldata
