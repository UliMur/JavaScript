function checkSpeed(speed) { 
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) {
        return "OK";
    }
    const points = Math.floor ((speed - speedLimit) / kmPerPoint);
    if (points < 12) {
        return points + " points";
    }
    else {
        return "License suspended";
    }
}

const output = checkSpeed(75);
console.log(output);