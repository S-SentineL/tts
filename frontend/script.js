document.getElementById("ttsForm").onsubmit = function (event) {
    event.preventDefault();

    const text = document.getElementById("textInput").value;
    if (!text.trim()) {
        document.getElementById("message").innerText = "Please enter some text.";
        return;
    }

    document.getElementById("message").innerText = "Generating speech...";

    fetch("https://tts-production-a748.up.railway.app/speak", {
        method: "POST",
        body: new URLSearchParams({ text }) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error generating speech');
        }
        return response.blob();
    })
    .then(blob => {
        const audio = new Audio(URL.createObjectURL(blob));
        audio.play();
        document.getElementById("message").innerText = "Speech is playing!";
    })
    .catch(error => {
        console.error(error);
        document.getElementById("message").innerText = "Error: Unable to generate speech.";
    });
};
