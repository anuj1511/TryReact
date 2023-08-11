from flask import Flask, request, jsonify
from pymongo import MongoClient
import json

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['NameStore']
collection = db['names']

@app.route('/api/names', methods=['POST'])
def add_name():
    try:
        name = request.json['name']
        new_name = {'name': name}
        collection.insert_one(new_name)
        return jsonify(new_name), 201
    except:
        return jsonify({'error': 'Failed to insert name.'}), 400

@app.route('/api/names', methods=['GET'])
def get_names():
    try:
        names = list(collection.find())
        print(f"name: {names} + {5 + 5 + 9}")
        names = json.dumps(names);
        print(f"name: {names} + {5 + 5 + 9}")
        
        return jsonify(json.dumps(names))
    except Exception as e:
        print("Error:", str(e))  # Print the error message for debugging
        return jsonify({'error': 'Failed to retrieve names python.'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=3001)
