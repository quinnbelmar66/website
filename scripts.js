function setup(){
    setInterval(change, 200);
}

function change(){
    var video = document.getElementById('beachVideo');
    video.setAttribute('src', 'beach3.JPG');
}