import os

class DevelopmentConfig:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///fleet_tracker.db'
    DEBUG = True
    CACHE_TYPE = 'SimpleCache'
    
class TestingConfig:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///testing.db'
    DEBUG = True
    CACHE_TYPE = 'SimpleCache'
