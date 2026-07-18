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

        this.BalanceContainer.textContent = `₱${totalBalance.toFixed(2)}`;
        this.IncomeContainer.textContent = `₱${totalIncome.toFixed(2)}`;
        this.ExpenseContainer.textContent = `₱${totalExpense.toFixed(2)}`;
    }

    renderRecentTransactions(transactions) {
        // Clear existing transactions
        this.overviewContainer.innerHTML = '';

        // Get the last 10 transactions
        const recentTransactions = transactions.slice(-10).reverse(); 

        recentTransactions.forEach(transaction => {
            const transactionRow = document.createElement('tr');
            transactionRow.innerHTML = `
                <td>${transaction.title}</td>
                <td>₱${transaction.amount.toFixed(2)}</td>
                <td>${new Date(transaction.date).toLocaleDateString()}</td>
                <td><button class="view-btn" data-id="${transaction.id}">View</button></td>
            `;
            this.overviewContainer.appendChild(transactionRow);
        });
    }

    bindViewTransaction(handler){
        this.overviewContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('view-btn')) {
                const transactionId = event.target.getAttribute('data-id');
                handler(transactionId);
            }
        })
    }
}

export default OverviewView;