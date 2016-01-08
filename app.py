from flask import Flask, jsonify, render_template, request
import requests, json

app = Flask(__name__)
app.config["DEBUG"] = True

website_info = None

@app.route("/")
def home():
  website_info = get_website_info()
  return render_template("index.html", info=website_info)

def get_website_info():
  global website_info
  if not website_info:
    with open('data/projects.json') as f:
      website_info = json.loads(f.read())
  return website_info


@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404
