from flask import request, jsonify
from app.blueprints.users import users_bp


## Create user route
@users_bp.route("/", methods=['POST'])
def create_user():
    return jsonify({"message": "Create user endpoint"}), 201

## Get users route   
@users_bp.route("/", methods=['GET'])
def get_users():
    return jsonify({"message": "Get all sers endpoint"}), 200

## Get user route
@users_bp.route("/<int:user_id>", methods=['GET'])
def get_user(user_id):
    return jsonify({"message": f"Get user {user_id} endpoint"}), 200

## Update user route
@users_bp.route("/<int:user_id>", methods=['PUT'])
def update_user(user_id):
    return jsonify({"message": f"Update user {user_id} endpoint"}), 200

## Delete user route
@users_bp.route("/<int:user_id>", methods=['DELETE'])
def delete_user(user_id):
    return jsonify({"message": f"Delete user {user_id} endpoint"}), 200