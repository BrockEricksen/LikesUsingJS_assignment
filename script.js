var pfp1_count = 9;
var pfp2_count = 12;
var pfp3_count = 7;

var pfp1_countElement = document.querySelector("#pfp1_count");
var pfp2_countElement = document.querySelector("#pfp2_count");
var pfp3_countElement = document.querySelector("#pfp3_count");

function add_like_pfp1(element){
    pfp1_count ++;
    pfp1_countElement.innerText = pfp1_count + " like(s)"
}

function add_like_pfp2(element){
    pfp2_count ++;
    pfp2_countElement.innerText = pfp2_count + " like(s)"
}

function add_like_pfp3(element){
    pfp3_count ++;
    pfp3_countElement.innerText = pfp3_count + " like(s)"
}