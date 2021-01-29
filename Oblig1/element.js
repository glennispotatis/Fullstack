class Coffee extends HTMLElement {
    constructor() {
        super();
        this.level = this.getAttribute("level") || "Not measured";
        this.prepared = this.getAttribute("prepared") || "Not measured";
        this.temperature = this.getAttribute("temperature") || "Not measured";

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = this._getTemplate();
    }

    getLevel(){
        return this.level;
    }

    getPrepared(){
        return this.prepared;
    }

    getTemperature(){
        return this.temperature;
    }

    _getTemplate() {
        return `
        <style>
            section {
                border: 2px solid black;
                padding: 1em;
                margin: 1em;
            }

            section img {
                display: flex;
                max-width: 30%;
            }
        </style>

        <section>
            <h3>Coffee</h3>
            <img src="assets/coffee.jpg" alt="Coffee cup with some coffee in it.">
            <p>Level: ${this.getLevel()}</p>
            <p>Prepared at: ${this.getPrepared()}</p>
            <p>Temperature: ${this.getTemperature()}</p>
        </section>
        `;
    }
}

customElements.define("coffee-element", Coffee);