import unittest
from app import create_app
from app.models import db, User
from werkzeug.security import generate_password_hash
from app.utils.util import encode_token

class AuthTestCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app("TestingConfig")
        self.payLoad = {
            "email": "fred@app.com",
            "password": "password123"
        }
        with self.app.app_context():
            db.drop_all() # Drop all tables before creating new ones
            db.create_all() # Create all tables
            
            # Create a test user
            db.session.add(User(
                email=self.payLoad["email"],
                password=generate_password_hash(self.payLoad["password"])
            ))
            db.session.commit()   
        self.client = self.app.test_client()
        
    def test_login_user(self): # User login with valid credentials
        
        login_payload = {
            "email": self.payLoad["email"],
            "password": self.payLoad["password"]
        }
        response = self.client.post('/api/auth/login', json=login_payload)
        self.assertEqual(response.status_code, 200)
        self.assertIn("token", response.json)

    def test_user_registration(self): # User registration with valid data
        payload = {
            "email": "test@example.com",
            "password": "testpassword"
        }
        response = self.client.post("/api/auth/register", json=payload)
        self.assertEqual(response.status_code, 201)
        self.assertIn("email", response.json)