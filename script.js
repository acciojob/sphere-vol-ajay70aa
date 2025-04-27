function volume_sphere() {
    //Write your code here
    const radiusInput = document.getElementById('radius');
    const volumeOutput = document.getElementById('volume');

    let radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius < 0) {
        volumeOutput.value = '';
        alert("Please enter a valid positive number for radius.");
        return false; // prevent form from submitting
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeOutput.value = volume.toFixed(4); // limiting to 4 decimal places
    return false; // prevent form from submitting
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
