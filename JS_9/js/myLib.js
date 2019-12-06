;
! function() {
    window.myLib = {
        min: function(arr) {
            return Math.min(...arr);
        },
        max: function(arr) {
            return Math.max(...arr);
        },
        avg: function(arr) {
            return (arr.reduce((a, b) => a + b, 0)) / arr.length;
        },
        calcX: function(x) {
            if (x < 1) {
                return x ** 2 - 4 * x;
            } else {
                return 5 / x;
            }
        },
        clone: function(arr) {
            let res = [];
            arr.forEach(element => {
                res.push(element);
            });
            return res;
        },
        genTable: function(n) {
            let strHtml = "";
            for (let i = 0; i < n; i++) {
                strHtml += '<TR>';
                for (let j = 1; j <= n; j++) {
                    strHtml += `<TD data-num="${i*n+j}">&nbsp;&nbsp;&nbsp;&nbsp;</TD>`;
                }
                strHtml += '</TR>';
            }
            strHtml = '<TABLE class="game-field">' + strHtml + '</TABLE>';
            console.log(strHtml);
            return strHtml;
        },

        pseudoRnd: function(val) {
            let min = 1;
            let max = val;
            let buf = [];
            rndInt = function(min, max) {
                if (min === max)
                    return min;
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            };

            function generator() {

                if (buf.length === val)
                    return NaN;

                let promVal = rndInt(min, max);
                if (buf.indexOf(promVal) < 0) {
                    buf.push(promVal);
                    isNewVal = true;
                    if (promVal === min) {
                        while (buf.indexOf(min) < 0)
                            min++;
                    }
                    if (promVal === max)
                        while (buf.indexOf(max) < 0)
                            max--;
                    return promVal;
                } else {
                    return generator();
                }


            }
            return generator;
        }

    }
}();