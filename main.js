let prevAngle = 360*Math.random();
function randomColor() {
    prevAngle += 120;
    return `hsl(${prevAngle + 30*(Math.random()-0.5)}, ${70 + 30 * Math.random()}%, ${75 + 10 * Math.random()}%)`;
}

document.querySelectorAll('.avatar').forEach(avatar => {
    avatar.style.backgroundColor = avatar.style.setProperty('--dot-color', randomColor());
})

