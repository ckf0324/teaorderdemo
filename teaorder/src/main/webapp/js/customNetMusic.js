var index = 0;
var aSpan = document.getElementsByName("carouselLine");

setLinebColor();

var aLiName = ["ilist1", "ilist2", "ilist3", "ilist4", "ilist5", "ilist6"];
var aLi = document.querySelectorAll(".imglist>ul>li");


var btnright = document.getElementById("btnright");
btnright.onclick = nextPic;

var btnleft = document.getElementById("btnleft");
btnleft.onclick = prevPic;

function setLinebColor() {
    for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].style.backgroundColor = "#ccc";
    }
    aSpan[index].style.backgroundColor = "skyblue";
}

function nextPic() {
    aLiName.unshift(aLiName[5]);
    aLiName.pop();
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].setAttribute("class", aLiName[i]);
    }
    index++;
    if (index >= aSpan.length) {
        index = 0;
    }
    setLinebColor();
}

function prevPic() {
    aLiName.push(aLiName[0]);
    aLiName.shift();
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].setAttribute("class", aLiName[i]);
    }
    index--;
    if (index < 0) {
        index = 5;
    }
    setLinebColor();
}

setInterval(function() {
    nextPic();
}, 3000)