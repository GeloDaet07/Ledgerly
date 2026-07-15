import TransactionFormView from '../views/transaction-form-view.js';
import Transaction from '../models/transaction-model.js';

export function transactionController(transactionData) {
    const transactionFormView = new TransactionFormView();

    function handleNewTransaction(transactionData) {
        const newTransaction = new Transaction(
            transactionData.id = Date.now().toString(), // Generate a unique ID based on the current timestamp
            transactionData.type,
            transactionData.title,
            transactionData.description,
            transactionData.amount,
            transactionData.date
        );
        console.log('New Transaction:', newTransaction);
    }

    transactionFormView.bindSubmitTransaction(handleNewTransaction);
} 
