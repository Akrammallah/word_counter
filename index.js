import inquirer from "inquirer";

let answer = await inquirer.prompt({
    message: "Enter your sentence: ",
    type: "input",
    name: "sentence"
});
const form = answer.sentence.trim().split(" ");
console.log(form);
console.log(`your sentence word counting is ${form.length}`);
