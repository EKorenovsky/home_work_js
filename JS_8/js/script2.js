function btnClick(elm) {
    let cnt = parseInt((elm.dataset.counter == undefined) ? 0 : elm.dataset.counter);
    cnt++;
    elm.dataset.counter = cnt;
    elm.innerText = cnt;
}