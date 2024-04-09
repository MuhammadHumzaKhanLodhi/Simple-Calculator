#! /usr/din/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    {
        name: "operators",
        type: "list",
        message: "Choose the operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION", "EXPONENTION", "MODULUS"]
    },
    {
        name: "input1",
        type: "number",
        message: "input first num: "
    },
    {
        name: "input2",
        type: "number",
        message: "input second num: "
    },
]);
if (input.operators === "ADDITION") {
    console.log(input.input1 + input.input2);
}
;
if (input.operators === "SUBTRACTION") {
    console.log(input.input1 - input.input2);
}
else if (input.operators === "MULTIPLICATION") {
    console.log(input.input1 * input.input2);
}
else if (input.operators === "DIVISION") {
    console.log(input.input1 / input.input2);
}
else if (input.operators === "EXPONENTION") {
    console.log(input.input1 ** input.input2);
}
else if (input.operators === "MODULUS") {
    console.log(input.input1 % input.input2);
}
;
