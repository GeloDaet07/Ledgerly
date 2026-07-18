class TransactionFormView {
    constructor() {
        this.form = document.getElementById('transaction-form');
        this.typeSelect = document.getElementById('transaction-type');
        this.titleInput = document.getElementById('transaction-title');
        this.descriptionInput = document.getElementById('transaction-description');
        this.amountInput = document.getElementById('transaction-amount');
        this.dateInput = document.getElementById('transaction-date');
        this.editingId = null;  
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

            if (this.editingId) {
                transactionData.id = this.editingId;
            }

            handler(transactionData);
            this.form.reset();
        });
    }

    clearForm() {
        this.editingId = null;
        this.form.reset();
    }

    populateForm(transactionData){
        this.typeSelect.value = transactionData.type;
        this.titleInput.value = transactionData.title;
        this.descriptionInput.value = transactionData.description;
        this.amountInput.value = transactionData.amount;
        this.dateInput.value =  transactionData.date;
        this.editingId = transactionData.id;
    }
}

export default TransactionFormView;