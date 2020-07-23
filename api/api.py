from flask import Flask
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)

@app.route('/getData')
def getData():
    data = [
        {"id": 0, "title": "Titulo1", "description": "hola"},
        {"id": 1, "title": "Titulo2", "description": "hola2"},
    ]
    return json.dumps(data)

if __name__ == '__main__':
    app.run()