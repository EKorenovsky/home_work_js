function sendMessage() {
    let container = document.querySelector(".messages");
    let txt = document.querySelector(".message").value;
    let newMessage = document.createElement("p");
    let author = "itmo";
    let time = function() {
        let fn = (val) => (val < 10) ? `0${val}` : `${val}`;
        let date = new Date();
        let h = fn(date.getHours());
        let m = fn(date.getMinutes());
        let s = fn(date.getSeconds());
        let timer = document.getElementById('timer');
        return `${h}:${m}:${s}`;
    };
    newMessage.innerHTML = `<span class="author"><strong>${author}</strong></span><span>(${time()})</span>${txt}`;
    container.appendChild(newMessage);
    container.scrollBy(0, 500);

}