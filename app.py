from flask import Flask, jsonify, render_template, request
import requests

app = Flask(__name__)
app.config["DEBUG"] = True

#section title
#subheading
#paragraph stuff

website_info = {
  'headings': [
  {
   'title': 'home',
   'subheading': ''},
  {
   'title': 'about',
   'subheading': 'welcome'},
   {
   'title': 'building',
   'subheading': 'projects'},
   {
   'title': 'doing',
   'subheading': 'welcome'},
   {
   'title': 'writing',
   'subheading': 'freetime'},
   {
   'title': 'hearts',
   'subheading': 'passions'},
  ]
}

@app.route("/")
def home():
  return render_template("index.html", info=website_info)

@app.route("/home")
def index():
  return render_template("index.html", info=website_info)

@app.route("/about")
def about():
  return render_template("about.html", info=website_info)

@app.route("/building")
def build():
  return render_template("building.html", info=website_info)

@app.route("/doing")
def do():
  return render_template("doing.html", info=website_info)

@app.route("/writing")
def write():
  return render_template("writing.html", info=website_info)

@app.route("/hearts")
def heart():
  return render_template("hearts.html", info=website_info)

@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404

if __name__ == "__main__":
  app.run(host="0.0.0.0")
