let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);
window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")

pullDownButton.addEventListener('mouseover',function(){
    console.log("noru");
    })

pullDownButton.addEventListener('mouseout',function(){
    console.log("hazureru");
    })

pullDownButton.addEventListener('click',function(){
    console.log("osu");
    })
})
