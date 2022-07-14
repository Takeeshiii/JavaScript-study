let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);
window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")

pullDownButton.addEventListener('mouseover',function(){
    console.log("noru　色は青");
    pullDownButton.setAttribute("style","background-color:blue;")
    })

pullDownButton.addEventListener('mouseout',function(){
    console.log("hazureru　色は赤");
    pullDownButton.setAttribute("style","background-color:red;")
    })

pullDownButton.addEventListener('click',function(){
    console.log("osu　色は緑");
    pullDownButton.setAttribute("style","background-color:green;")
    })
})
