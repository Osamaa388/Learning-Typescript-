import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 2211;
console.log("Welcome Osama Ghafoor");
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your 4-digit pin code:"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Your pin is correct, Login succesfully!");
    console.log(`Your current balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance in your account");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdrawn successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    if (operationAns.operation === "Fast Cash") {
        let FastCashAns = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "chose amount:",
                choices: [1000, 5000, 10000, 20000, 40000, 50000],
            },
        ]);
        myBalance -= FastCashAns.FastCash;
        console.log("your Current Balance is:" + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is:${myBalance}`);
    }
}
