from flask import request, jsonify
from app.blueprints.auth import auth_bp


## Login user route
@auth_bp.route("/login", methods=['POST'])
def login():
    return jsonify({"message": "User login endpoint"}), 200

## Register user route  
@auth_bp.route("/register", methods=['POST'])
def register():
    return jsonify({"message": "User register endpoint"}), 201

