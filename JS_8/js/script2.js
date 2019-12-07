function btnClick(elm) {
    let cnt = parseInt((elm.dataset.counter == undefined) ? 0 : elm.dataset.counter);
    cnt++;
    elm.dataset.counter = cnt;
    elm.innerText = cnt;
}


function btnClick_v2() {
    let cnt = 0;

    function changeText() {
        cnt++;
        this.innerText = cnt;
    }
    return changeText;
}
document.getElementById("myButton").addEventListener("click", btnClick_v2());