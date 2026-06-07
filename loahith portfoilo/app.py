# app.py

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

messages = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()

    messages.append({
        "name": data.get("name"),
        "email": data.get("email"),
        "message": data.get("message")
    })

    return jsonify({
        "success": True,
        "message": "Message Sent Successfully"
    })

if __name__ == "__main__":
    app.run(debug=True)