# import necessary libraries
import os
from flask import (Flask, render_template, jsonify, request, redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "postgres://omtjgoefxknxjr:4dc783a299806ee57d98e35b67ccfbfc26f71b0f7ef0806de7a83021d71b69a8@ec2-184-72-236-57.compute-1.amazonaws.com:5432/d397mvjlukaah3"
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '')
db = SQLAlchemy(app)

class ttc_subway_2019(db.Model):
    __tablename__ = 'ttc_subway_2019'

    id = db.Column(db.String(64), primary_key=True)
    date = db.Column(db.String(64))
    time = db.Column(db.String(64))
    day = db.Column(db.String(64))
    station = db.Column(db.String(64))
    code = db.Column(db.String(64))
    min_delay = db.Column(db.String(64))
    min_gap = db.Column(db.String(64))
    bound = db.Column(db.String(64))
    line = db.Column(db.String(64))
    vehicle = db.Column(db.String(64))
    code_info = db.Column(db.String(64))
    latitude = db.Column(db.String(64))
    longitude = db.Column(db.String(64))
    line_name = db.Column(db.String(64))
    month = db.Column(db.String(64))
    time_range = db.Column(db.String(64))
    
    def __repr__(self):
        return '<ttc_subway_2019 %r>' % (self.name)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")
    
# create route to query database and send jsonified results for delay data    
@app.route("/delay")
def delay():

    results = db.session.query(
    # database.column_name
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
    ttc_subway_2019.longitude,
    ttc_subway_2019.line_name,
    ttc_subway_2019.month,
    ttc_subway_2019.time_range
    ).all()

    # date = [result[0] for result in results]
    # time = [result[1] for result in results]
    # day = [result[2] for result in results]
    # station = [result[3] for result in results]
    # code = [result[4] for result in results]
    # min_delay = [result[5] for result in results]
    # min_gap = [result[6] for result in results]
    # bound = [result[7] for result in results]
    # line = [result[8] for result in results]
    # vehicle = [result[9] for result in results]
    # code_info = [result[10] for result in results]
    # latitude = [result[11] for result in results]
    # longitude = [result[12] for result in results]
    # line_name = [result[13] for result in results]
    # month = [result[14] for result in results]
    # time_range = [result[15] for result in results]

    ttc_subway_2019_data = [];

    for result in results:
        ttc_subway_2019_data.append(
            {"date": result[0],
            "time": result[1],
            "station": result[2],
            "day": result[3],
            "code": result[4],
            "min_delay": result[5],
            "min_gap": result[6],
            "bound": result[7],
            "line": result[8],
            "vehicle": result[9],
            "code_info": result[10],
            "latitude": result[11],
            "longitude": result[12],
            "line_name": result[13],
            "month": result[14],
            "time_range": result[15]}
        )

    return jsonify(ttc_subway_2019_data)

# # create route to query database and send jsonified results for map data
# @app.route("/map")
# def map():
#     station = [result[3] for result in results]
#     latitude = [result[11] for result in results]
#     longitude = [result[12] for result in results]
#     line_name = [result[13] for result in results]

#     ttc_station_coordinates = [{
#         "station" : station,
#         "latitude": latitude,
#         "longitude": longitude,
#         "line_name": line_name
#     }]

#     return jsonify(ttc_station_coordinates) 

if __name__ == "__main__":
    app.run()
