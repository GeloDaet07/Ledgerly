class TransactionFormView {
    constructor() {
        this.form = document.getElementById('transaction-form');
        this.typeSelect = document.getElementById('transaction-type');
        this.titleInput = document.getElementById('transaction-title');
        this.descriptionInput = document.getElementById('transaction-description');
        this.amountInput = document.getElementById('transaction-amount');
        this.dateInput = document.getElementById('transaction-date');  
    };

    bindSubmitTransaction(handler) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const transactionData = {
                type: this.typeSelect.value,
                title: this.titleInput.value,
                description: this.descriptionInput.value,
                amount: parseFloat(this.amountInput.value),
                date: this.dateInput.value,
            };
            handler(transactionData);
            this.form.reset();
        });
    }

    clearForm() {
        this.form.reset();
    }
}

export default TransactionFormView;