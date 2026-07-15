import { addTransaction } from '../services/firebase-service.js';
import { getTransactions } from '../services/firebase-service.js';
import TransactionFormView from '../views/transaction-form-view.js';
import CashFlowView from '../views/cash-flow-view.js';
import OverviewView from '../views/overview-view.js';
import Transaction from '../models/transaction-model.js';

export function transactionController(transactionData) {
    const transactionFormView = new TransactionFormView();
    const cashFlowView = new CashFlowView();
    const overviewView = new OverviewView();

    async function loadAndRenderTransactions() {
        await getTransactions().then(transactions => {
                overviewView.updateSummary(transactions);
                overviewView.renderRecentTransactions(transactions);
                cashFlowView.renderTransactions(transactions);
        });
    }

    async function handleNewTransaction(transactionData) {
        try{
            const newTransaction = new Transaction(
                transactionData.id = Date.now().toString(), // Generate a unique ID based on the current timestamp
                transactionData.type,
                transactionData.title,
                transactionData.description,
                transactionData.amount,
                transactionData.date
            );
            await addTransaction(newTransaction);
            transactionFormView.clearForm();
            await loadAndRenderTransactions();
        }
        catch (error) {
            console.error('Error adding transaction:', error);
            alert("Failed to save transaction. Please check your connection.");
        }
    }

    transactionFormView.bindSubmitTransaction(handleNewTransaction);
    loadAndRenderTransactions();
}

