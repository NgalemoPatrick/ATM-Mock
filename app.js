//variable

let amount;
let balance = 500.00;

// function to display the balance

function displayBalance() {
    
    document.querySelector('.display').innerHTML = `Your Current balance is: $${balance}`;   
}

function deposite() {
    let depot = prompt('make a deposite: ');

    depot = parseFloat(depot);
    balance = balance + depot;
    
    document.querySelector('.display').innerHTML = `Your deposit is $${depot}\n Your total balance is: $${balance}`;

}


function withdraw() {
    let depot = prompt('Enter the amount: ');

    depot = parseFloat(depot);

    balance = balance - depot;
    
    document.querySelector('.display').innerHTML = `Your withdraw is $${depot}\n Your total balance is: $${balance}`;

}

function transfer() {
    let depot = prompt('Enter the amount: ');

    depot = parseFloat(depot);

    balance = balance + depot;
    
    document.querySelector('.display').innerHTML = `You transferred: $${depot}\n Your total balance is: ${balance}`;

}


document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('.balance-inquiry').onclick = displayBalance;

    document.querySelector('.deposit').onclick = deposite;

    document.querySelector('.cash-withdrawal').onclick = withdraw;

    document.querySelector('.transfer').onclick = transfer;

    
});


