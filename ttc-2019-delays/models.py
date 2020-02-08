from .app import db

class ttc_subway_2019(db.Model):
    __tablename__ = 'ttc_subway_2019'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(64))
    time = db.Column(db.String(64))
    day = db.Column(db.String(64))
    station = db.Column(db.String(64))
    code = db.Column(db.String(64))
    min_delay = db.Column(db.Float)
    min_gap = db.Column(db.Float)
    bound = db.Column(db.String(64))
    line = db.Column(db.String(64))
    vehicle = db.Column(db.Float)
    code_info = db.Column(db.String(64))
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    line_name = db.Column(db.String(64))
    month = db.Column(db.String(64))
    time_range = db.Column(db.String(64))
    
    def __repr__(self):
        return '<ttc_subway_2019 %r>' % (self.name)