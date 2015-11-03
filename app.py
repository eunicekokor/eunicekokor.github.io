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
   'subheading': '',
   'hover_text': 'Takes you to the logo page'
  },
  {
   'title': 'about',
   'subheading': 'eunicode = euni codes + unicode #techjokes',
   'hover_text': 'Quick stats'
  },
  {
   'title': 'projects',
   'subheading': 'stuff I made',
   'hover_text': 'A work in progress :p'
  },
  {
   'title': 'extras',
   'subheading': 'other things!',
   'hover_text': 'A little extra!'
   }
  ],
  'job_status': False
}

@app.route("/")
def home():
  website_info['current'] = 'home'
  return render_template("index.html", info=website_info)

@app.route("/home")
def index():
  website_info['current'] = 'home'
  return render_template("index.html", info=website_info)

@app.route("/about")
def about():
  website_info['current'] = 'about'
  return render_template("about.html", info=website_info)

@app.route("/projects")
def build():
  #TODO: change the way project information sourced
  website_info['current'] = 'projects'
  return render_template("projects.html", info=website_info)

@app.route("/extras")
def heart():
  website_info['current'] = 'extras'
  return render_template("extras.html", info=website_info)

@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404