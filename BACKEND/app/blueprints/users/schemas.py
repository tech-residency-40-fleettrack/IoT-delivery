from app.models import User
from app.extensions import ma
from marshmallow import fields

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        
user_schema = UserSchema()
users_schema = UserSchema(many=True)
