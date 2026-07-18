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
                <td>₱${transaction.amount.toFixed(2)}</td>
                <td>${new Date(transaction.date).toLocaleDateString()}</td>
                <td>
                    <button class="edit-btn" data-id="${transaction.id}">Edit</button>
                    <button class="delete-btn" data-id="${transaction.id}">Delete</button>
                </td>
            `;
            this.cashFlowContainer.appendChild(transactionRow);
        });
    }

    //Edits transactions
    bindEditTransaction(handler) {
        this.cashFlowContainer.addEventListener('click', event => {
            if (event.target.classList.contains('edit-btn')) {
                const transactionId = event.target.getAttribute('data-id');
                handler(transactionId);
            }
        });
    }

    //Deletes transactions
    bindDeleteTransaction(handler) {
        this.cashFlowContainer.addEventListener('click', event => {
            if (event.target.classList.contains('delete-btn')) {
                const transactionId = event.target.getAttribute('data-id');
                handler(transactionId);
            }
        });
    }
}

export default CashFlowView;