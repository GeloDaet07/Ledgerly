class TransactionFormView {
    constructor() {
        this.form = document.getElementById('transaction-form');
        this.amountInput = document.getElementById('amount');
        this.descriptionInput = document.getElementById('description');
        this.dateInput = document.getElementById('date');
        this.typeSelect = document.getElementById('type');
        this.titleInput = document.getElementById('title');
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