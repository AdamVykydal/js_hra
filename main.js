
function openGen() {
   
    genOpened = localStorage.getItem("generatorRunning")
    alert(genOpened)
    if (!genOpened){
        alert("hi")
        window.open("generator.html", "_blank");
        localStorage.setItem("generatorRunning", true)
    }
}
    


//let clickUpgradePrice = 10
//let passiveClickUpgradePrice = 10



/*
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

function upgradePassive(){
    if(passiveClickUpgradePrice <= points){
        autoMoneyPower += 0.1
        points -= passiveClickUpgradePrice
        passiveClickUpgradePrice += 20
        document.getElementById("points").innerHTML = Math.round(points * 100) / 100
        document.getElementById("upgradePassiveButton").innerHTML = passiveClickUpgradePrice
        document.getElementById("pointsPerSec").innerHTML = Math.round(autoMoneyPower * 100) / 100
        
        localStorage.setItem("globalPoints", points)
        localStorage.setItem("passiveClickUpgradePrice", passiveClickUpgradePrice)
        localStorage.setItem("clickPower", clickPower);
    }
}
*/
