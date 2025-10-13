# FleetTrack API

## Features
- **User Authentication**: JWT-based login for users.
- **Comprehensive API**: CRUD operations for all major resources.

## Technologies Used
- **Backend**: Flask (Python)
- **Database**: SQLAlchemy (with SQLite or other supported databases)
- **Serialization**: Marshmallow for schema validation and serialization
- **ORM**: Flask-SQLAlchemy
- **Authentication**: JWT (python-jose)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tech-residency-40-fleettrack/IoT-delivery.git
   cd IoT-delivery/backend
2. **Set Up a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
3. **Install dependencies**:
   ```bash
    pip install -r requirements.txt

4. **Copy the provided .env.example file and create a new .env file**
   ```python 
      cp .env.example .env
   ```
5. **Open the newly created .env file and fill in the required values (e.g. API keys, database credentials, etc.)**
   ```python 
      SECRET_KEY=your_api_key_here
   ```
6. **Run the application**
   ```python 
      python app.py
   ```
7. **Access the application at http://127.0.0.1:5000/api/**

## Testing
This project includes a suite of unittests.  
To run all tests:

```sh
python -m unittest discover tests
```

## API Documentation
Interactive API docs are available via Swagger UI.
After starting the server, visit: http://127.0.0.1:5000/api/docs/


## File Structure
- **File:** filestructure.txt

```text
/backend 
├── /app
│   ├── __init__.py - create_app() lives here
│   ├── extensions.py
|   ├── models.py
|   |
│   ├── /blueprints
│   │   ├──/auth 
│   │   |   ├── __init__.py  
│   │   |   ├── routes.py  
│   │   |   └── schemas.py 
│   │   ├──/users 
│   │   │   ├── __init__.py
│   │   │   ├── routes.py 
│   │   │   └── schemas.py
|   |
|   ├── /utils 
│   |   └── util.py - File for token functions
|   ├── /static
│   │   └── swagger.yaml - 
│   |
│   |
├── /tests	
|   ├── test_users.py - test the users
│	
│			
├──app.py
├──config.py
├──requirements.txt
├──.env
