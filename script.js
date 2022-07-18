let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);
window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")

pullDownButton.addEventListener('mouseover',function(){
    console.log("noru　色は青");
    this.setAttribute("style","background-color:blue;")
    })

pullDownButton.addEventListener('mouseout',function(){
    console.log("hazureru　色は赤");
    this.setAttribute("style","background-color:red;")
    })

pullDownButton.addEventListener('click',function(){
    console.log("osu　色は緑");
    this.setAttribute("style","background-color:green;")
    if(pullDownParents.getAttribute("style") == "display:block;"){
        this.removeAttribute("style","display:block;")
        console.log("非表示")
    }else{
        this.setAttribute("style","display:block;")
        console.log("表示")
    }
    })
})
