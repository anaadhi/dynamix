function foo() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    console.log(winScroll)
    
    if ( winScroll < 600){
        document.getElementById('title').style.animation = "fadeup 1s forwards";
        document.getElementById('titlehr').style.animation = "fadeup2 1s forwards";
        document.getElementById('para').style.animation = "fadeup 1s 0.3s forwards";
    }
    if ( winScroll > 50 && winScroll < 1400){
        document.getElementById('pic1').style.animation = "width 1.1s forwards";
    }
    if ( winScroll > 800 && winScroll < 2350){
        document.getElementById('pic2').style.animation = "width 1.1s forwards";
    }
    if ( winScroll > 1950){
        document.getElementById('pic3').style.animation = "width 1.1s forwards";
    }
    setTimeout(foo, 100);
}

foo();