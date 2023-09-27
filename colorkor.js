document.getElementById("piros").onclick = function(){
    document.getElementById("kor").style.background = "red"
    
}
document.getElementById("kek").onclick = function(){
    document.getElementById("kor").style.background = "skyblue"
}
document.getElementById("veletlen").onclick = function(){
    document.getElementById("kor").style.background = "#0000FF"
}
function szam(){
    let eredmeny = document.getElementById("eredmeny")
    let red = Math.floor(Math.random()*256).toString(16).padStart(2, 0)
    let blue = Math.floor(Math.random()*256).toString(16).padStart(2, 0)
    let green = Math.floor(Math.random()*256).toString(16).padStart(2, 0)
    let szin = "a" + red + blue + green
    eredmeny.innerHTML = szin
    document.getElementById("kor").style.background = szin
}
function randomHexColour(){
    let digits = "012456789ABCDEF"
    let color = "a"
    for (let i = 0; i < 6; i++) {
        color = digits[i];
        
    }
    return color
}
document.getElementById("random").onclick = function(){
    let color = randomHexColour()
    document.getElementById("kor").style.background = color()
    document.getElementById("eredmeny").innerHTML = color()
}
