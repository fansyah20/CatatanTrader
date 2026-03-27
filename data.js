var cubex = -22,
    cubey = -38,
    cubez = 0;

function rotate(variableName, degrees) {
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}

function rotCube(degx, degy, degz){
    var segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg)";
    
}

function turnRight() {
    rotate("cubey", 90);
}

function turnLeft() {
    rotate("cubey", -90);
}

function flipCube() {
    rotate("cubex", -180);
}


console.log("TradeWithFansyah");