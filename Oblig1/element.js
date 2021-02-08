class Coffee extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this._level;
        this._preparedAt;
        this._temperature;
    }

    getLevel(){
        if(this._level === 0){
            return 'Empty';
        }else if(this._level <= 0.5){
            return 'Almost empty';
        }else if(this._level <= 1.1){
            return 'Almost full';
        }else if(this._level <= 2.2){
            return 'Full';
        };
    }

    getPrepared(){
        return new Date(this._preparedAt).toUTCString();
    }

    getTemperature(){
        if(this._temperature >= 54){
            return `${this._temperature} C - Hot`;
        }else{
            return `${this._temperature} C - Cold`;
        }
    }

    setLevel(level){
        this._level = level;
        console.log(level);
    }

    setPreparedAt(preparedAt){
        this._preparedAt = preparedAt;
    }

    setTemperature(temperature){
        this._temperature = temperature;
    }

    setValues(level, preparedAt, temperature){
        this.setLevel(level);
        this.setPreparedAt(preparedAt);
        this.setTemperature(temperature);

        this.shadowRoot.innerHTML = this._getTemplate();
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

function loadInfo() {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let coffee = document.getElementsByTagName("coffee-element");
            for(let i=0; i<data.length; i++){
                if(coffee[i]){
                    coffee[i].setValues(data[i].level, data[i].preparedAt, data[i].temperature);
                }
            }
        });
}