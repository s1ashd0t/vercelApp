from flask import Flask, request, jsonify
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.serving import run_simple

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    user_input = data.get('input', '')
    recommendations = [
        f'Recommended for "{user_input}": Item 1',
        f'Recommended for "{user_input}": Item 2',
        f'Recommended for "{user_input}": Item 3'
    ]
    return jsonify(recommendations)

# For Vercel, you need to run the Flask app using a WSGI server
if __name__ == '__main__':
    app.run()
