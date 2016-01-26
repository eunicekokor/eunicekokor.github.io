from flask import Flask, jsonify, render_template, request
import requests, json

app = Flask(__name__)
app.config["DEBUG"] = True

#section title
#subheading
#paragraph stuff
website_info = None
projects = None

@app.route("/")
def home():
  website_info = get_website_info()
  website_info['current'] = 'home'
  return render_template("index.html", info=website_info)

def get_website_info():
  global website_info
  if not website_info:
    with open('data/website_info.json') as f:
      website_info = json.loads(f.read())
  return website_info

@app.route("/home")
def index():
  website_info = get_website_info()
  website_info['current'] = 'home'
  return render_template("index.html", info=website_info)

@app.route("/about")
def about():
  website_info = get_website_info()
  website_info['current'] = 'about'
  return render_template("about.html", info=website_info)

@app.route("/projects")
def build():
  # TODO: change the way project information sourced
  website_info = get_website_info()
  website_info['current'] = 'projects'
  projects = get_projects()
  return render_template("projects.html", info=website_info, projects=projects)

def get_projects():
  global projects
  if not projects:
    with open('data/projects.json') as f:
      projects = json.loads(f.read())
  return projects

@app.route("/extras")
def heart():
  website_info = get_website_info()
  website_info['current'] = 'extras'
  return render_template("extras.html", info=website_info)

@app.route('/stonesoup', methods=["GET", "POST"])
def get_results():
  recipes = []
  if request.method == 'POST':
    food_query = request.form['text']
    if ',' in food_query:
      food_query = food_query.replace(',', '+')
      food_query = food_query.replace(' ', '')

    food_query_processed = food_query.lower()
    request_string = "https://community-food2fork.p.mashape.com/search?key=fb087049410336a1a564b4d90772884a&q={}".format(food_query_processed)
    response = requests.get(request_string, headers = {
    "X-Mashape-Key": "wBtGgGCJ65mshgqXuQksMa9vpohbp1RzC3AjsnKXEHKeWKqZH3",
    "Accept": "application/json"
    }).json()
    recipes = response['recipes']
  return render_template('stonesoup.html', recipes=recipes)

@app.errorhandler(404)
def page_not_found(error):
  return render_template('404.html'), 404
