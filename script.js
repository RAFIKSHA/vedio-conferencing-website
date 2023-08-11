// script.js
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let localStream;
let remoteStream;

startButton.addEventListener('click', startVideo);
stopButton.addEventListener('click', stopVideo);

async function startVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        
        // Here you would typically establish a connection to a server for signaling
        
        // For simplicity, we'll just use a local connection
        remoteStream = localStream;
        remoteVideo.srcObject = remoteStream;
    } catch (error) {
        console.error('Error accessing camera and microphone:', error);
    }
}

function stopVideo() {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    
    if (remoteStream) {
        remoteStream.getTracks().forEach(track => track.stop());
        remoteStream = null;
    }
    
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}
