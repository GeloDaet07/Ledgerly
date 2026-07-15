class CashFlowView {
    constructor() {
        this.cashFlowContainer = document.getElementById('all-transactions-body');
    }

    renderTransactions(transactions) {
        // Clear existing transactions
        this.cashFlowContainer.innerHTML = '';

        transactions.forEach(transaction => {
            const transactionRow = document.createElement('tr');
            transactionRow.innerHTML = `
                <td>${transaction.title}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>${transaction.date}</td>
                <td>${new Date(transaction.date).toLocaleDateString()}</td>
                <td>
                    <button class="edit-btn" data-id="${transaction.id}">Edit</button>
                    <button class="delete-btn" data-id="${transaction.id}">Delete</button>
                </td>
            `;
            this.cashFlowContainer.appendChild(transactionRow);
        });
    }
}

export default CashFlowView;