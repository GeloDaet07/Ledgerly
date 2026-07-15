class OverviewView {
    constructor() {
        this.overviewContainer = document.getElementById('recent-transactions-body');
        this.BalanceContainer = document.getElementById('total-balance');
        this.IncomeContainer = document.getElementById('total-income');
        this.ExpenseContainer = document.getElementById('total-expense');
    }

    updateSummary(transactions) {
        const totalIncome = transactions
            .filter(transaction => transaction.type === 'income')
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        const totalExpense = transactions
            .filter(transaction => transaction.type === 'expense')
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        const totalBalance = totalIncome - totalExpense;

        this.BalanceContainer.textContent = `$${totalBalance.toFixed(2)}`;
        this.IncomeContainer.textContent = `$${totalIncome.toFixed(2)}`;
        this.ExpenseContainer.textContent = `$${totalExpense.toFixed(2)}`;
    }

    renderRecentTransactions(transactions) {
        // Clear existing transactions
        this.overviewContainer.innerHTML = '';

        // Get the last 5 transactions
        const recentTransactions = transactions.slice(-5).reverse(); 

        // TODO: button should be view button, not edit button. Fix this in the future.
        recentTransactions.forEach(transaction => {
            const transactionRow = document.createElement('tr');
            transactionRow.innerHTML = `
                <td>${transaction.title}</td>
                <td>$${transaction.amount.toFixed(2)}</td>
                <td>${new Date(transaction.date).toLocaleDateString()}</td>
                <td>button class="edit-btn" data-id="${transaction.id}">Edit</button>
            `;
            this.overviewContainer.appendChild(transactionRow);
        });
    }
}

export default OverviewView;