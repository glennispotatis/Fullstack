const events = require("events");
const EventEmitter = new events.EventEmitter();

// Custom event handler
const myEventHandler = (who, data) => console.log(`${who} entered ${data}`);

const exitEventHandler = (msg, who) => {
    console.log(`${msg}. Sincerely yours, ${who}`);
}

EventEmitter.on("exitEvent", exitEventHandler);

// Fire the event
process.stdin.on("data", data => {
    const input = data.toString().trim();
    myEventHandler("The user", data);

    if(input === "exit"){
        EventEmitter.emit("exitEvent", "Thank you for using this remarkable software", "Programmer");
        process.exit();
    }
});