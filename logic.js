function pad(n){
    return (n.length<2) ? "0"+n : n;
}

function changeValue(){
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    let bgColor = "#"+pad(parseInt(r,10).toString(16)) + pad(parseInt(g,10).toString(16)) +pad(parseInt(b,10).toString(16));
    document.body.style.backgroundColor = bgColor;
    document.getElementById("color").innerText = bgColor;
}
window.addEventListener("change",changeValue);
window.addEventListener("input",changeValue);
