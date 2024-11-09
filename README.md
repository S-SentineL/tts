# Text-to-Speech Website

This is a web application that converts text into speech using Python, Flask, and Google Text-to-Speech (gTTS). The frontend provides a simple interface where users can input text, listen to the generated speech, and download the audio file.

## Features

- **Text-to-Speech Conversion:** Converts the provided text to speech in English using gTTS.
- **Audio Playback:** Plays the generated speech directly in the browser.
- **Audio Download:** Users can download the generated speech as an MP3 file.

## Technologies Used

- **Backend:**
  - **Flask:** A micro web framework for building the backend.
  - **gTTS (Google Text-to-Speech):** A library to convert text into speech.
  - **Flask-CORS:** To handle Cross-Origin Resource Sharing (CORS) for the frontend.

- **Frontend:**
  - **HTML/CSS/JS:** Simple user interface and interactions.
  - **Fetch API:** For making asynchronous requests to the Flask backend.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Flask
- gTTS
- Flask-CORS


Usage
Open the web app in your browser: [Text-to-Speech Website](https://earnest-griffin-007a89.netlify.app)
Enter the text you want to convert to speech.
Click on the "Generate Speech" button.
Once the speech is generated, you can play it directly or download it as an MP3 file.
