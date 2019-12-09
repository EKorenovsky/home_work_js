/* 1
Returns a reference to the application cache object for the window.
*/

console.log(applicationCache);

/* 2
The customElements read-only property of the Window interface returns a reference to the CustomElementRegistry object, 
which can be used to register new custom elements and get information about previously registered custom elements.
*/
customElements.define('element-details',
    class extends HTMLElement {
        constructor() {
            super();
            const template = document
                .getElementById('element-details-template')
                .content;
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(template.cloneNode(true));
        }
    });


/* 3
The Window.crypto property returns the Crypto object associated to the global object. 
This object allows web pages access to certain cryptographic related services. 
Although the Window.crypto property itself is read-only, all of its methods (and the methods of its child object, SubtleCrypto) are not read-only, and therefore vulnerable to attack by polyfill.
*/

let array = new Uint32Array(10);
crypto.getRandomValues(array);
console.log(array);

/* 4
The Window.history read-only property returns a reference to the History object, 
which provides an interface for manipulating the browser session history 
(pages visited in the tab or frame that the current page is loaded in).
*/

let historyObj = history;
console.log(historyObj);

/* 5
The read-only localStorage property allows you to access a Storage object for the Document's origin; 
the stored data is saved across browser sessions. localStorage is similar to sessionStorage, 
except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.
*/

localStorage.setItem('myCat', 'Tom');
console.log(localStorage.getItem('myCat'));

/* 6
The Window.location read-only property returns a Location object with information about the current location of the document.
*/
console.log(location);

/* 7
The Window.navigator read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.
*/
console.log(navigator);


/* 8
Gets/sets the name of the window.
*/
name = "my_name";


/* 9
Returns the element (such as <iframe> or <object>) in which the window is embedded, 
or null if the element is either top-level or is embedded into a document with a different script origin; that is, in cross-origin situations.
*/

let frameEl = window.frameElement;
if (frameEl) {
    frameEl.src = 'http://mozilla.org/';
}

/* 10
The Window interface's performance property returns a Performance object, which can be used to gather performance information about the current document. 
*/
console.log(performance);