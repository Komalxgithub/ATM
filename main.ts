#! /use/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; //dollar
let myPin = 889;

let pinAns = await inquirer.prompt(
    
       { 
         name: "pincode",
         message: "enter your number",
         type: "number"
       }
    
);

if (pinAns.pincode === myPin) {
    
    console.log("Welcome to your account!");


let operationAns = await inquirer.prompt(
    
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "Fast Cash"]

         }
    
    );

    if (operationAns.operation === "check balance") {

        console.log("Your current balance is: " + myBalance);

    } else if (operationAns.operation === "withdraw") {

        let withdrawAmount = await inquirer.prompt ( 
            {
               name: "amount",
               message: "enter your amount",
               type: "number" 
            }
        )
    
      if (withdrawAmount.amount < myBalance) {

        myBalance -= withdrawAmount.amount,

        console.log("Your remaining balance is : " + myBalance);

      } else if (withdrawAmount.amount > myBalance) {

        console.log("Unable to Process Transaction!\n Your current balance is: " + myBalance);

    }

 } else if (operationAns.operation === "Fast Cash") {

    let cashAmount = await inquirer.prompt ({

        name: "cash",
        type: "rawlist",
        message: "Choose the number!",
        choices: ["1000", "2000", "5000", "10000"]
    })

    myBalance -= cashAmount.cash;

    console.log("your remaining account balance is: " + myBalance);

 }

} else if (pinAns.pincode !== myPin) {

    console.log("Incorrect Pin! Please try again");
}
    
 