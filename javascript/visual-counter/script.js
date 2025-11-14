let showNum = 0;

function addOneNum() {
    showNum++;
    document.getElementById("displayNum").innerText = showNum;
}

function minOneNum() {
    showNum--; 
    document.getElementById("displayNum").innerText = showNum;
}