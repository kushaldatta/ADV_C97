var player1_name = localStorage.getItem("player1_name");
var round_counter = 1;
document.getElementById("scoreboard").innerHTML = " Player 1 (" + player1_name + ") will fight.";
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
images = "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
earth_width = 100;
moon_width = 100;
earth_height = 100;
moon_height = 100;
moon_image = "https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png";
earth_image = "https://www.pngall.com/wp-content/uploads/2016/06/Earth-Free-Download-PNG.png";
earth_x = 10;
moon_x = 800;
moon_y = 400;
earth_y = 200;
background_image = images;
var count = 41;
var score = parseInt(localStorage.getItem("score"+"_"+player1_name));
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
//Oh my "God", Please! (3), come back Mr.De-lip//
var directionup = 0;
var directiondown = 1;
function moonmove() {
    if (directionup == 1) {
        directiondown = 0;
        moon_y = moon_y - 100;
    }
    if (directiondown == 1) {
        directionup = 0;
        moon_y = moon_y + 100;
    }
    console.log("moon_x= "+moon_x+ " earth_x= "+earth_x);
    console.log("moon_y= "+moon_y +" earth_y= "+earth_y);
    difference_x=earth_x- moon_x;
    difference_y=earth_y- moon_y;
    console.log(difference_x+","+difference_y);
    uploadBackground();
    uploadmoon();


}
function timer() {
    count = count - 1;

    if (moon_y <= 10) {
        directionup = 0;
        directiondown = 1;
        moonmove();
    }

    if (moon_y >= 400) {
        directiondown = 0;
        directionup = 1;
        moonmove();
    }
    if (moon_y > 10 && moon_y < 400) {
        moonmove();
    }


    uploadBackground();
    uploadearth();
    uploadmoon();
    checkscore();
    document.getElementById("timer").innerHTML = "00:" + count; // watch for spelling
    if (count <= 9) {
        document.getElementById("timer").innerHTML = "00:0" + count; // watch for spelling
        if (count <= 1) {
            document.getElementById("timer").innerHTML = "00:00";
            if (count == 0) {
                alert("Times up!");
                count = 41;
                moon_x = Math.floor(Math.random() * 1000) + 10;
                moon_y = Math.floor(Math.random() * 1000) + 10;
                round_counter = round_counter + 1;
                document.getElementById("round_count").innerHTML = round_counter;
                earth_x = 10;
                earth_y = 10;
                document.getElementById("timer").innerHTML = count;
                uploadBackground();
                uploadearth();
                uploadmoon();
                
            }
        }

    }
}
 
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    moon_imgTag = new Image();
    moon_imgTag.onload = uploadmoon;
    moon_imgTag.src = moon_image;
    earth_imgTag = new Image();
    earth_imgTag.onload = uploadearth;
    earth_imgTag.src = earth_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadearth() {
    ctx.drawImage(earth_imgTag, earth_x, earth_y, earth_width, earth_height);
}
function uploadmoon() {
    ctx.drawImage(moon_imgTag, moon_x, moon_y, moon_width, moon_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function checkscore() {
    offset=80;
    difference_x=earth_x- moon_x;
    difference_y=earth_y- moon_y;
    console.log(difference_x+","+difference_y);
    
        if (((difference_x >(-offset) && difference_x <= offset)) &&((difference_y > (-offset))&& (difference_y <= offset))) {
            score = score + 1;
            localStorage.setItem("score"+"_"+player1_name, score);
            document.getElementById("score").innerHTML = score;
            count=0;
           // document.getElementById("score_dis").innerHTML = score;
           alert("You have touched the moon, you get a point!");
           count = 41;
           moon_x = Math.floor(Math.random() * 1000) + 10;
           moon_y = Math.floor(Math.random() * 1000) + 10;
           round_counter = round_counter + 1;
           document.getElementById("round_count").innerHTML = round_counter;
           earth_x = 10;
           earth_y = 10;
           document.getElementById("timer").innerHTML = count;
           uploadBackground();
           uploadearth();
           uploadmoon();
            
        }
}
function up() {
    if (earth_y >= 0) {
        earth_y = earth_y - 10;
        console.log("When up arrow is pressed, x = " + earth_x + " | y = " + earth_y);
        uploadBackground();
        uploadmoon();
        uploadearth();
        //checkscore();
    }
}

function down() {
    if (earth_y <= 400) {
        earth_y = earth_y + 10;
        console.log("When down arrow is pressed, x = " + earth_x + " | y = " + earth_y);
        uploadBackground();
        uploadmoon();
        uploadearth();
        //checkscore();
    }
}

function left() {
    if (earth_x >= 0) {
        earth_x = earth_x - 10;
        console.log("When left arrow is pressed, x = " + earth_x + " | y = " + earth_y);
        uploadBackground();
        uploadmoon();
        uploadearth();
        //checkscore();
    }
}

function right() {
    if (earth_x <= 1000) {
        earth_x = earth_x + 10;
        console.log("When right arrow is pressed, x = " + earth_x + " | y = " + earth_y);
        uploadBackground();
        uploadmoon();
        uploadearth();
        //checkscore();
    }
}
