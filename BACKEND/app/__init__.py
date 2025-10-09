from flask import Flask
from app.models import db
from app.extensions import ma
from flask_swagger_ui import get_swaggerui_blueprint
from app.blueprints.users import users_bp
from app.blueprints.auth import auth_bp


SWAGGER_URL = '/api/docs' 
API_URL = '/static/swagger.yaml'

swagger_bp = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "FleetTrack API"
    }
)

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(f'config.{config_name}')
    
    db.init_app(app)
    ma.init_app(app)

    app.register_blueprint(swagger_bp, url_prefix=SWAGGER_URL)
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(users_bp, url_prefix='/api/users')
   
    return app