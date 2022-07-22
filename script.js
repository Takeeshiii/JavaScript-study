function pullDown(){
let lists = document.getElementsByClassName("pull-down-list")
console.log(lists);
    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")
    const pullDownChaild = document.querySelectorAll(".pull-down-list")
    const currentList = document.getElementById("current-list")
    pullDownButton.addEventListener('mouseover', function () {
        console.log("noru　色は青");
        this.setAttribute("style", "background-color:blue;")
    })
    pullDownButton.addEventListener('mouseout', function () {
        console.log("hazureru　色は赤");
        this.setAttribute("style", "background-color:red;")
    })
    pullDownButton.addEventListener('click', function () {
        console.log("osu　色は緑");
        this.setAttribute("style", "background-color:green;")
        if (pullDownParents.getAttribute("style") == "display:block;") {
            pullDownParents.removeAttribute("style", "display:block;")
            console.log("非表示")
        } else {
            pullDownParents.setAttribute("style", "display:block;")
            console.log("表示")
        }
    })
    pullDownChaild.forEach(function (list) {
        list.addEventListener('click', function () {
            const value = list.innerHTML
            currentList.innerHTML = value
            console.log(value)
        })
    })
}
window.addEventListener('load',pullDown)