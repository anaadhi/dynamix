function foo() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    
    if ( winScroll < 800){
        document.getElementById('top').style.animation = "parain 1s forwards";
        document.getElementById('tops').style.animation = "parain 1s 0.3s forwards";
    }
    if ( winScroll > 380 && winScroll < 1100){
        document.getElementById('top2').style.animation = "parain2 1s forwards";
        document.getElementById('tops2').style.animation = "parain2 1s 0.3s forwards";
    }
    if ( winScroll > 930){
        document.getElementById('top3').style.animation = "parain 1s forwards";
        document.getElementById('tops3').style.animation = "parain 1s 0.3s forwards";
    }
    setTimeout(foo, 100);
}

foo();
setTimeout(function() {
    setInterval(function() {
        $('#img1').attr('src',$('#img1').attr('src'))
    },1)
}, 2000)
