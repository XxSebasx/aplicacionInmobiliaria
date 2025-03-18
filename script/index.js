let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function showVideo() {
        let videoOverlay = document.createElement("div");
        videoOverlay.id = "videoOverlay";
        videoOverlay.innerHTML = `
            <video id="inactivityVideo" autoplay>
                <source src="videos/muebles.mp4" type="video/mp4">
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