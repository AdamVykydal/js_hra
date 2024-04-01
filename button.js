clickPower = Number(localStorage.getItem("clickPower"))

function plusButton(){
    broadcastChannel = new BroadcastChannel("add")
    broadcastChannel.postMessage(clickPower)
}

function upgradeMainButton(){
    if(clickUpgradePrice <= points){
        clickPower += 1
        points -= clickUpgradePrice 
        clickUpgradePrice += 10
        
        document.getElementById("points").innerHTML = Math.round(points * 100) / 100
        document.getElementById("upgradeButton").innerHTML = clickUpgradePrice
        
        localStorage.setItem("globalPoints", points)
        localStorage.setItem("clickUpgradePrice", clickUpgradePrice)
        localStorage.setItem("clickPower", clickPower)
    } 
}


