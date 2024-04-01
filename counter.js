points = Number(localStorage.getItem("globalPoints"))
    
if(!points || points == NaN){
    points = 0
    localStorage.setItem("globalPoints", points)
}

points = Number(points)

document.getElementById("points").innerHTML = Math.round(points * 100) / 100
document.getElementById("title").innerHTML = Math.round(points * 100) / 100

broadcastChannel = new BroadcastChannel('add');
broadcastChannel.onmessage = function(event) {
    points += event.data
    roundedPoints = Math.round(points * 100) / 100
    document.getElementById("points").innerHTML = roundedPoints
    document.getElementById("title").innerHTML = roundedPoints

}

window.addEventListener("beforeunload", function(event) {
    localStorage.setItem("globalPoints", points)
});