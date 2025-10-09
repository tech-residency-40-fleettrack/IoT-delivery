import unittest
from app import create_app
from app.models import db, User


class TestUserModelCase(unittest.TestCase):

    def setUp(self):
        self.app = create_app("TestingConfig")
        with self.app.app_context():
            db.drop_all() # Drop all tables before creating new ones
            db.create_all() # Create all tables
        self.client = self.app.test_client()

    def test_user_creation(self):
        payload = {
            "email": "test@example.com",
            "password": "password"
        }
        response = self.client.post('/users/', json=payload)
        self.assertEqual(response.status_code, 201)
    
    def test_get_users(self):
        response = self.client.get('/users/')
        self.assertEqual(response.status_code, 200)
        
    def test_get_user(self):
        response = self.client.get('/users/1/')
        self.assertEqual(response.status_code, 200)
        
