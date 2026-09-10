function timeToWalk(steps, footprint, speed){
    const distanceMeters = steps * footprint;

    const speedMetersPerSecond = speed / 3.6;

    const walkingTime = distanceMeters / speedMetersPerSecond;

    const rests = Math.floor(distanceMeters / 500);
    
    const totalTime = walkingTime + (rests * 60);

    const hours = Math.floor(totalTime / 3600);

    const minutes = Math.floor((totalTime % 3600) / 60);

    const seconds = Math.round(totalTime % 60);

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);