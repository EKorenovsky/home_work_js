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
        genTableWithSortingColumns: function(domContainerId, dataSet) {

            let arrFields = dataSet['columns'];
            let arrData = dataSet['data'];

            let domContainer = document.getElementById(domContainerId);
            let table = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");

            function genDataRows() {
                fieldName = this.dataset.fieldname;
                orderDir = this.dataset.orderdir;

                orderDir = (orderDir === "ASC") ? "DESC" : "ASC";
                this.dataset.orderdir = orderDir;

                if (fieldName.length > 0) {
                    if (orderDir === "DESC") {
                        arrData.sort((el1, el2) => {
                            if (el1[fieldName] > el2[fieldName]) {
                                return -1;
                            }
                            if (el1[fieldName] < el2[fieldName]) {
                                return 1;
                            }
                            return 0;
                        });
                    } else {
                        arrData.sort((el1, el2) => {
                            if (el1[fieldName] < el2[fieldName]) {
                                return -1;
                            }
                            if (el1[fieldName] > el2[fieldName]) {
                                return 1;
                            }
                            return 0;
                        });
                    }
                }
                tbody.innerHTML = "";
                for (let i = 0; i <= arrData.length; i++) {
                    let tr = document.createElement('tr');
                    for (let property in arrFields) {
                        if (property) {
                            let td = document.createElement('td');
                            td.innerText = arrData[i][property];
                            tr.appendChild(td);
                        }
                    }
                    tbody.appendChild(tr);
                }
            }
            // рисуем шапку (c псевдонимами и именами полей для сотртировки)
            let trTh = document.createElement("tr");
            for (let property in arrFields) {
                let th = document.createElement("th");
                let ahref = document.createElement("a");
                ahref.setAttribute("href", "#");
                ahref.innerText = arrFields[property];
                ahref.dataset.fieldname = property;
                ahref.dataset.orderdir = "ASC";
                ahref.addEventListener("click", genDataRows);
                th.appendChild(ahref);
                trTh.appendChild(th);
            }
            thead.appendChild(trTh);

            //Делаем первую отрисовку содержимого таблицы
            for (let i = 0; i < arrData.length; i++) {
                let tr = document.createElement('tr');
                for (let property in arrFields) {
                    let td = document.createElement('td');
                    td.innerText = arrData[i][property];
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }
            table.appendChild(thead);
            table.appendChild(tbody);
            domContainer.appendChild(table);
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