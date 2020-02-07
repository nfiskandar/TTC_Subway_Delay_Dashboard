# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
db = SQLAlchemy(app)


# create route that renders index.html template
@app.route("/")
def home():
    results = db.session.query(
        ttc_subway_2019.date, 
        ttc_subway_2019.time, 
        ttc_subway_2019.day, 
        ttc_subway_2019.station,
        ttc_subway_2019.code,
        ttc_subway_2019.min_delay,
        ttc_subway_2019.min_gap,
        ttc_subway_2019.bound,
        ttc_subway_2019.line,
        ttc_subway_2019.vehicle,
        ttc_subway_2019.code_info,
        ttc_subway_2019.latitude,
        ttc_subway_2019.longitude
        ).all()

    date = [result[0] for result in results]
    time = [result[1] for result in results]
    day = [result[2] for result in results]
    station = [result[3] for result in results]
    code = [result[4] for result in results]
    min_delay = [result[5] for result in results]
    min_gap = [result[6] for result in results]
    bound = [result[7] for result in results]
    line = [result[8] for result in results]
    vehicle = [result[9] for result in results]
    code_info = [result[10] for result in results]
    latitude = [result[11] for result in results]
    longitude = [result[12] for result in results]

    ttc_subway_2019_data = [{
        "date": date,
        "time": time,
        "station": station,
        "day": day,
        "code": code,
        "min_delay": min_delay,
        "min_gap": "min_gap",
        "bound": "bound",
        "line": "line",
        "vehicle": "vehicle",
        "code_info": "code_info",
        "latitude": "latitude",
        "longitude": "longitude"
        }
    }]

    return jsonify(ttc_subway_2019_data)


if __name__ == "__main__":
    app.run()
