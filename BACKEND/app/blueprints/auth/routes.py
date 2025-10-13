from flask import request, jsonify
from app.blueprints.auth import auth_bp
from app.models import User, db
from sqlalchemy import select, delete
from app.blueprints.users.schemas import user_schema, users_schema
from marshmallow import ValidationError
from app.utils.util import encode_token, token_required
from werkzeug.security import generate_password_hash, check_password_hash
from app.utils.util import  token_required

## Login user route
@auth_bp.route("/login", methods=['POST'])
def login():
    try:
        email = request.json['email']
        password = request.json['password']
    except ValidationError as err:
        return jsonify(err.messages), 400
    # Check if user exists
    query = select(User).where(User.email == email)
    user = db.session.execute(query).scalars().first()
    # Check if password is correct
    if user and check_password_hash(user.password, password):
        token = encode_token(user.id)
        return jsonify({
            "status": "success",
            "message": "Successfully logged in.",
            "token": token
        }), 200
    else:
        return jsonify({"status":"error","message": "Invalid email or password!"}), 401

## Register user route  
@auth_bp.route("/register", methods=['POST'])
def register():
    try:
        user_data = request.json
        email_exist = db.session.execute(select(User).where(User.email == user_data['email'])).scalar_one_or_none()
        # Check if email exists
        if email_exist:
            return jsonify({"status":"error","message": "A user with this email already exists!"}), 400
        user_data['password'] = generate_password_hash(user_data['password'])
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_user = User(**user_data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(user_schema.dump(new_user)), 201
