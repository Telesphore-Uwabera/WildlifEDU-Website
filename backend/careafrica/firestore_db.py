from google.cloud import firestore
from careafrica.firebase_config import get_firestore_client
from datetime import datetime
import json

class FirestoreDB:
    def __init__(self):
        self.db = get_firestore_client()
    
    def create_collection(self, collection_name):
        """Create a collection reference"""
        return self.db.collection(collection_name)
    
    def add_document(self, collection_name, data, doc_id=None):
        """Add a document to a collection"""
        collection = self.create_collection(collection_name)
        
        # Convert datetime objects to strings
        data = self._serialize_data(data)
        
        if doc_id:
            doc_ref = collection.document(doc_id)
            doc_ref.set(data)
            return doc_id
        else:
            doc_ref = collection.add(data)
            return doc_ref[1].id
    
    def get_document(self, collection_name, doc_id):
        """Get a document by ID"""
        doc_ref = self.db.collection(collection_name).document(doc_id)
        doc = doc_ref.get()
        
        if doc.exists:
            return self._deserialize_data(doc.to_dict())
        return None
    
    def get_all_documents(self, collection_name, filters=None):
        """Get all documents from a collection with optional filters"""
        collection = self.create_collection(collection_name)
        query = collection
        
        if filters:
            for field, value in filters.items():
                query = query.where(field, '==', value)
        
        docs = query.stream()
        return [self._deserialize_data(doc.to_dict()) for doc in docs]
    
    def update_document(self, collection_name, doc_id, data):
        """Update a document"""
        doc_ref = self.db.collection(collection_name).document(doc_id)
        data = self._serialize_data(data)
        doc_ref.update(data)
    
    def delete_document(self, collection_name, doc_id):
        """Delete a document"""
        doc_ref = self.db.collection(collection_name).document(doc_id)
        doc_ref.delete()
    
    def _serialize_data(self, data):
        """Convert data to Firestore-compatible format"""
        if isinstance(data, dict):
            serialized = {}
            for key, value in data.items():
                if isinstance(value, datetime):
                    serialized[key] = value.isoformat()
                elif isinstance(value, dict):
                    serialized[key] = self._serialize_data(value)
                elif isinstance(value, list):
                    serialized[key] = [self._serialize_data(item) if isinstance(item, dict) else item for item in value]
                else:
                    serialized[key] = value
            return serialized
        return data
    
    def _deserialize_data(self, data):
        """Convert Firestore data back to Python format"""
        if isinstance(data, dict):
            deserialized = {}
            for key, value in data.items():
                if isinstance(value, str) and self._is_datetime_string(value):
                    try:
                        deserialized[key] = datetime.fromisoformat(value.replace('Z', '+00:00'))
                    except:
                        deserialized[key] = value
                elif isinstance(value, dict):
                    deserialized[key] = self._deserialize_data(value)
                elif isinstance(value, list):
                    deserialized[key] = [self._deserialize_data(item) if isinstance(item, dict) else item for item in value]
                else:
                    deserialized[key] = value
            return deserialized
        return data
    
    def _is_datetime_string(self, value):
        """Check if a string looks like a datetime"""
        try:
            datetime.fromisoformat(value.replace('Z', '+00:00'))
            return True
        except:
            return False

# Global Firestore instance
firestore_db = FirestoreDB()
