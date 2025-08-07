import firebase_admin
from firebase_admin import credentials, firestore
import os
from dotenv import load_dotenv

load_dotenv()

def initialize_firebase():
    """Initialize Firebase Admin SDK"""
    try:
        # Check if Firebase is already initialized
        firebase_admin.get_app()
        print("Firebase already initialized")
    except ValueError:
        # Initialize Firebase with service account
        service_account_path = os.getenv('FIREBASE_SERVICE_ACCOUNT_PATH')
        
        if service_account_path and os.path.exists(service_account_path):
            # Use service account file
            cred = credentials.Certificate(service_account_path)
            firebase_admin.initialize_app(cred)
        else:
            # Use default credentials (for Google Cloud deployment)
            firebase_admin.initialize_app()
        
        print("Firebase initialized successfully")

def get_firestore_client():
    """Get Firestore client instance"""
    initialize_firebase()
    return firestore.client()

# Initialize Firebase when module is imported
initialize_firebase()
