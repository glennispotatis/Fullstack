//This will be a parameter
//const myList = ["apple", "pineapple", "pen"];

class RandomList extends HTMLElement {

    constructor() {
        super();
        this.staticList = [];
        this.listA = [...this.staticList];
        this.listB = [];
        console.log(`Constructor: ${this.staticList}`);

        this.attachShadow({ mode:"open" });

        let templateContent = this._getTemplateContent();
        //No need to store variable shadowRoot, it is already part of the HTMLElement spec now.
        //let shadowRoot = this.attachShadow({mode:"open"});
        //shadowRoot.appendChild(templateContent.cloneNode(true));

        this.render();
    }

    connectedCallback() {
        console.log("Connected component");
        this._populateStaticList();
        this._setEventListeners();
    }

    disableButton() {
        let shadowRoot = this.shadowRoot;
        let pullButton = shadowRoot.getElementById("pullButton");
        if (!this.listA.length) {
            pullButton.disabled = true;
        }
    }

    render() {
        this.shadowRoot.innerHTML = this._getTemplateContent();
    }

    _getTemplateContent() {
        //const template = document.createElement("template");
        const template = `
            <h2>Original list of elements</h2>
            <ul id="originalList"></ul>

            <button id="pullButton">Pull Element</button>
            <button id="resetButton">Reset</button>

            <h2>Random elements removed from list</h2>
            <ol id="pulledList"></ul>
        `;
        return template;
    }

    getStaticList(){
        return this.staticList;
    }

    setStaticList(list) {
        this.staticList = list;
        console.log(`Inside setter: ${this.staticList}`);
        this._populateStaticList();
    }

    _populateStaticList() {
        let shadowRoot = this.shadowRoot;
        const ul = shadowRoot.getElementById("originalList");
        this.staticList.forEach(elem => {
            ul.insertAdjacentHTML('beforeend', `<li data-value="${elem}">${elem}</li>`);
        });
    }

    _setEventListeners(){
        let shadowRoot = this.shadowRoot;
        let pullButton = shadowRoot.getElementById("pullButton");
        let resetButton = shadowRoot.getElementById("resetButton");

        pullButton.addEventListener("click", (e) => {
            console.log('listened to click event');
            console.log(e);
            this._pullElement();
        });

        resetButton.addEventListener("click", (e) => {
            console.log('listened to reset click event');
            console.log(e);
            this._resetList();
        });

    }

    _pullElement() {
        const randomElem = this._pullRandomElementFromList();
        if (!randomElem)
            return;
        this._addElementToPulledList(randomElem);
    }

    _pullRandomElementFromList() {
        let shadowRoot = this.shadowRoot;
        let pullButton = shadowRoot.getElementById("pullButton");
        if (!this.listA.length) {
            pullButton.disabled = true;
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];

        const randomValue = this.staticList[randomIndex];
        shadowRoot.querySelector(`[data-value="${randomValue}"]`).style.textDecoration = 'line-through';

        this.listB.push(randomElem);
        return randomElem;
    }

    _addElementToPulledList(elem) {
        let shadowRoot = this.shadowRoot;
        const ul = shadowRoot.getElementById("pulledList");
        ul.insertAdjacentHTML('beforeend', `<li>${elem}</li>`);
    }

    _resetList() {
        this.listA = [...this.staticList];
        this.listB = [];
        let shadowRoot = this.shadowRoot;
        const ul = shadowRoot.getElementById("pulledList");
        let pullButton = shadowRoot.getElementById("pullButton");
        pullButton.disabled = false;
        ul.innerHTML = "";
    }
}

customElements.define("random-list", RandomList);