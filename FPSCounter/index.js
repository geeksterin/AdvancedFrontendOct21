let startTime = (new Date()).getTime() / 1000;
let frames = 0;

getNextFrame();

function getNextFrame() {
    requestAnimationFrame(function() {
        let currentTime = (new Date()).getTime() / 1000;
        // console.log(currentTime - startTime);
        let time = currentTime - startTime;
        let fps = frames / time;
        console.log(fps);
        document.getElementById('fps').innerText = fps;
        // console.log(currentTime);
        // if(currentTime - startTime > 1000) {
            // console.log(frames);

            // document.getElementById('fps').innerText = frames;

            // startTime = currentTime;
            // frames = 0;
        // }
        frames += 1;
        getNextFrame();

        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillText('Text', 10, 10);
    })
}

// if(Object.prop1 != 'undefined' && Object.prop1.prop2 == 'somethig') {

// }

// Object.prop || Object?.prop

