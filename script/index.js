let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    let ruta = "videos/muebles.mp4";
    let pagina = window.location.pathname;
    console.log(pagina);
    if (pagina != "/index.html") {
        ruta = "../videos/muebles.mp4";
        console.log(ruta);
    }

    function showVideo() {
        
        let existingVideoOverlay = document.getElementById("videoOverlay");
        if (existingVideoOverlay) {
            document.body.removeChild(existingVideoOverlay);
        }

        let videoOverlay = document.createElement("div");
        videoOverlay.id = "videoOverlay";
        videoOverlay.innerHTML = `
            <video id="inactivityVideo" autoplay>
                <source src="${ruta}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `; 
        document.body.appendChild(videoOverlay);

        let video = document.getElementById("inactivityVideo");
        video.onended = function() {
            document.body.removeChild(videoOverlay);
        };

        video.onclick = function() {
            document.body.removeChild(videoOverlay);
            resetTimer();
        };
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(showVideo, 5000);
    }

};

inactivityTime();