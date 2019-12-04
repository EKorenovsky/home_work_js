function genDivs(cntDivs) {

    let rgb = function() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let elm = document.querySelector('.container');
    for (let i = 1; i <= cntDivs; i++) {
        let color = rgb();
        let newDiv = document.createElement("div");
        newDiv.dataset.color = color;
        newDiv.dataset.check = "";
        newDiv.style.background = color;
        newDiv.addEventListener("click", ChangeColor);
        elm.appendChild(newDiv);
    }
}

function ChangeColor(e) {
    if (this.dataset.check) {
        this.dataset.check = "";
        this.style.background = this.dataset.color;
    } else {
        this.dataset.check = 1;
        this.style.background = "green";
    }
}

genDivs(20);