// let capitals = {
//     france: "Paris",
//     germany: "Berlin",
//     italy: "Rome",
// };

// function getCapital(country) {
//     return capitals[country] || "Capitale inconnue";
// }

// const countryS = prompt("Enter a country : ");
// console.log(getCapital(countryS.toLowerCase));

let account = {
    balance: 100,
};

function bankingApp() {
    let exit = false;

    while (!exit) {
        let choice = prompt(
            `Welcome to Your Bank\n\n` +
                `Current Balance: $${account.balance}\n\n` +
                `Choose an action:\n` +
                `1 - Deposit\n` +
                `2 - Withdraw\n` +
                `3 - Exit`
        );

        if (choice === null || choice.trim() === "" || choice === "3") {
            alert("Thank you for using our service. Have a great day!");
            exit = true;
            continue;
        }

        if (choice !== "1" && choice !== "2") {
            alert("Invalid option. Please choose 1, 2, or 3.");
            continue;
        }

        let amountStr = prompt("Enter the amount:");
        let amount = parseFloat(amountStr);

        if (isNaN(amount) || amount <= 0) {
            alert("Invalid amount. Please enter a positive number.");
            continue;
        }

        if (choice === "1") {
            account.balance += amount;
            alert(`Successfully deposited: $${amount}\nNew Balance: $${account.balance}`);
        } else if (choice === "2") {
            if (amount > account.balance) {
                alert("Insufficient funds. Cannot withdraw more than your balance.");
            } else {
                account.balance -= amount;
                alert(`Successfully withdrew: $${amount}\nNew Balance: $${account.balance}`);
            }
        }
    }
}

bankingApp();
