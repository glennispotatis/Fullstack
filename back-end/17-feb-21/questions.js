const questions = [
    "What is your name?",
    "What would you rather be doing now?",
    "What is your preferred hot beverage?"
];

const ask = (i=0) => {
    process.stdout.write(`\n ${questions[i]} \n`);
    process.stdout.write('->');
};

ask();

const answers = [];

process.stdin.on("data", (data) => {
    process.stdout.write(`\n ${data.toString().trim()} \n`);
    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    } else{
        process.stdout.write(`Hi ${answers[0]}, you can go and ${answers[1]} while having a ${answers[2]}.`);
        process.exit();
    }
});