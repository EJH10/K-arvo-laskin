function laske() {
    var re;
    var rt;
    var malli;
    var tulos;
    
    re = document.getElementById("re").value;
    rt = document.getElementById("rt").value;
    malli = document.getElementById("malli").value;
    
    re = parseFloat(re);
    rt = parseFloat(rt);
    malli = parseFloat(malli)
    
    tulos = (1-malli*rt/re)*100;
    
    document.getElementById("tulos").innerHTML = tulos;
}



    