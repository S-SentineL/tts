from flask import Flask, request, send_file
from flask_cors import CORS
from gtts import gTTS
import os

app = Flask(__name__)
CORS(app)

# Set the path to the frontend/audio_files directory
AUDIO_FOLDER = "../frontend/AudioFiles"

# Ensure the folder exists
os.makedirs(AUDIO_FOLDER, exist_ok=True)

@app.route("/speak", methods=["POST"])
def speak():
    text = request.form.get("text")
    if not text:
        return "No text provided", 400

    try:
        tts = gTTS(text, lang='en')
        audio_path = os.path.join(AUDIO_FOLDER, "speech.mp3")  # Save in frontend/audio_files
        tts.save(audio_path)

        return send_file(audio_path, as_attachment=True)
    except Exception as e:
        return f"Error processing text-to-speech: {e}", 500

if __name__ == "__main__":
    app.run(debug=True)
