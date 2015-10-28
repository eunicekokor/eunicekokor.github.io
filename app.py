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
   'title': 'projects',
   'subheading': 'projects'},
   {
   'title': 'extras',
   'subheading': 'other things!'}
  ],
  'job_status': False
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

@app.route("/projects")
def build():
  return render_template("projects.html", info=website_info)

@app.route("/extras")
def heart():
  return render_template("extras.html", info=website_info)

@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404

if __name__ == "__main__":
  app.run(host="0.0.0.0")