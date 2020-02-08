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

class station_in_line(db.Model):
    __tablename__ = 'station_in_line'

    station = db.Column(db.String(64), primary_key=True)
    latitude = db.Column(db.String(64))
    longitude = db.Column(db.String(64))
    line_name = db.Column(db.String(64))
    num_delays = db.Column(db.String(64))
    avg_delay_time = db.Column(db.String(64))
    
    def __repr__(self):
        return '<station_in_line %r>' % (self.name)

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

    ttc_subway_2019_data = []

    for result in results:
        ttc_subway_2019_data.append(
            {"date": result[0],
            "time": result[1],
            "day": result[2],
            "station": result[3],
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
@app.route("/map")
def map():

    results = db.session.query(
        # database.column_name
        station_in_line.station,
        station_in_line.latitude,
        station_in_line.longitude,
        station_in_line.line_name,
        station_in_line.num_delays,
        station_in_line.avg_delay_time
        ).all()

    station_in_line_data = []

    for result in results:
        station_in_line_data.append(
            {"station": result[0],
            "latitude": result[1],
            "longitude": result[2],
            "line_name": result[3],
            "num_delays": result[4],
            "avg_delay_time": result[5]
            }
        )

    return jsonify(station_in_line_data)

if __name__ == "__main__":
    app.run()
