function userCard(cardNumber) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key;

    if (cardNumber >= 1 && cardNumber <= 3) {
        key = cardNumber
    } else {
        console.error('Wrong card number');
        return;
    }

    function isBalance(takeMoney) {
        if (balance < takeMoney) {
            console.error(`Not enough money in card ${key}`);
            return false;
        }
        if (transactionLimit < takeMoney) {
            console.error(`Exceeded limit in card ${key}`);
            return false;
        }
        return true;
    }

    function HistoryLog(operationType,
                        credits) {
        this.operationType = operationType;
        this.credits = credits;
        this.operationTime = dateFormat(new Date());

        function dateFormat(date) {
            return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        }
    }

    function historyLog(operation, amount) {
        switch (operation) {
            case 'putCredits':
                historyLogs.push(new HistoryLog('Received credits', amount));
                break;
            case 'takeCredits':
                historyLogs.push(new HistoryLog('Withdrawal of credits', amount));
                break;
            case 'setTransactionLimit':
                historyLogs.push(new HistoryLog('Transaction limit change', amount));
                break;
        }
    }

    return {
        getCardOptions: function () {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            };
        },

        putCredits: function (putMoney) {
            balance += putMoney;
            historyLog(this.putCredits.name, putMoney);
        },

        takeCredits: function (takeMoney) {
            if (isBalance(takeMoney)) {
                balance -= takeMoney;
                historyLog(this.takeCredits.name, takeMoney);
            }
        },

        setTransactionLimit: function (newLimit) {
            transactionLimit = newLimit;
            historyLog(this.setTransactionLimit.name, newLimit);
        },

        transferCredits: function (amount,
                                   numCard) {
            const taxRate = 0.005;
            const amountWithTax = amount * (1 + taxRate);

            if (isBalance(amountWithTax)) {
                this.takeCredits(amountWithTax);
                numCard.putCredits(amount);
            }
        }


    }
}

function UserAccount(name) {
    this.name = name;
    this.cards = [];
    this.addCard = function () {
        if (this.cards.length > 3) {
            console.error('Maximum card');
            return;
        }
        this.cards.push(userCard(this.cards.length + 1));
    }
    this.getCardByKey = function (numCard) {
        return this.cards.find(card => card.getCardOptions().key === numCard);
    }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());

console.log();

console.log(card2.getCardOptions());