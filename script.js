var update=(x,y)=>{document.getElementById(x).innerText=y}

var joules = 0
var watts  = 0

var coalgen = {
    cost     : 0
    ,time    : 0
    ,max     : 100
    ,quandale: 0
    ,markiply: 1
}

function EarnJ(x) {
    joules += x
}

window.setInterval(function() {
    update()
}, 33)