from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Your existing code...

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    user_input = data.get('input', '')

    # Here you would implement your recommendation logic
    recommendations = [
        f'Recommended for "{user_input}": Item 1',
        f'Recommended for "{user_input}": Item 2',
        f'Recommended for "{user_input}": Item 3'
    ]

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
