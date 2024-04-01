autoMoneyPower = 0.1

setInterval(timeIsMoney, 1000)

function timeIsMoney(){
    broadcastChannel = new BroadcastChannel("add")
    broadcastChannel.postMessage(autoMoneyPower)

}

window.addEventListener("beforeunload", function(event) {
    localStorage.removeItem("generatorRunning")
});