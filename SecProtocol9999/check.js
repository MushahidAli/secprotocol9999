if (navigator.onLine) {
document.getElementById('answer').innerHTML = "<div style='border: 6px solid green'>HTTP/HTTPS STATUS :<br>YOUR PUBLIC IP ADDRESS IS MASKED AND SAFE!</div>";
} else {
document.getElementById('answer').innerHTML = "<div style='border: 6px solid red'>NO INTERNET CONNECTION :<br>PLEASE CONNECT TO THE INTERNET TO USE OUR SERVICE!</div>";
}