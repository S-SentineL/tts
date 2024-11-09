document.getElementById("ttsForm").onsubmit = function (event) {
    event.preventDefault();

    const text = document.getElementById("textInput").value;
    const messageEl = document.getElementById("message");
    const controlsEl = document.getElementById("controls");
    const playButton = document.getElementById("playButton");
    const downloadButton = document.getElementById("downloadButton");

    if (!text.trim()) {
        messageEl.innerText = "Please enter some text.";
        return;
    }

    messageEl.innerText = "Generating speech...";
    controlsEl.classList.add("hidden");

    fetch("http://127.0.0.1:5000/speak", {
        method: "POST",
        body: new URLSearchParams({ text })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error generating speech");
        }
        return response.blob();
    })
    .then(blob => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        
        // Update message and show controls
        messageEl.innerText = "Speech generated! Use the controls below.";
        controlsEl.classList.remove("hidden");

        // Play Button
        playButton.onclick = () => {
            audio.play();
        };

        // Download Button
        downloadButton.onclick = () => {
            const a = document.createElement("a");
            a.href = audioUrl;
            a.download = "speech.mp3";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
    })
    .catch(error => {
        console.error(error);
        messageEl.innerText = "Error: Unable to generate speech.";
    });
};
