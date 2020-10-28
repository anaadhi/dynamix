x = "white";
function foo() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    console.log(winScroll)
    
    if ( winScroll < 800){
        document.getElementById('title').style.animation = "fadeup 1s forwards";
        document.getElementById('para').style.animation = "fadeup 1s 0.3s forwards";
    }
    
    setTimeout(foo, 100);
}

foo();



function dark(){
    
    if ( x == "white" ){
    document.getElementById('white').style.backgroundColor = "white";
    document.getElementById('nad').style.color = "black";
    document.getElementById('nab').style.color = "black";
    document.getElementById('naa').style.color = "black";
    document.getElementById('nac').style.color = "black";
    document.getElementById('main').style.color = "black";
    document.getElementById('clicked').src = "https://cdn.discordapp.com/attachments/430704906169614338/770708786930909254/sun.png";
    x = "black";
    }
    else if( x == "black" ){
        document.getElementById('white').style.backgroundColor = "#1e1e1e";
    document.getElementById('nad').style.color = "white";
    document.getElementById('nab').style.color = "white";
    document.getElementById('naa').style.color = "white";
    document.getElementById('nac').style.color = "white";
    document.getElementById('main').style.color = "white";
    document.getElementById('clicked').src = "https://cdn.discordapp.com/attachments/430704906169614338/770691706441695282/moon_3.png";
    x = "white";
    }
}