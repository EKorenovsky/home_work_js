function showTime() {
    let fn = (val) => (val < 10) ? `0${val}` : `${val}`;
    let date = new Date();
    let h = fn(date.getHours());
    let m = fn(date.getMinutes());
    let s = fn(date.getSeconds());
    let timer = document.getElementById('timer');
    timer.innerHTML = `<span style="color:red")">${h}</span>:<span style="color:green">${m}</span>:<span style="color:blue">${s}</span>`;
}
//что бы сразу отобразился 
showTime();
setInterval(showTime, 1000);