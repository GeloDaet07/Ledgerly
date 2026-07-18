import { addTransaction, getTransactions, updateTransaction } from '../services/firebase-service.js';
import { openTransaction } from './navigation-controller.js';
import TransactionFormView from '../views/transaction-form-view.js';
import CashFlowView from '../views/cash-flow-view.js';
import OverviewView from '../views/overview-view.js';
import Transaction from '../models/transaction-model.js';

export function transactionController(transactionData) {
    const transactionFormView = new TransactionFormView();
    const cashFlowView = new CashFlowView();
    const overviewView = new OverviewView();
    let allTransactions = [];

    async function loadAndRenderTransactions() {
        try {
            const transactions = await getTransactions();

            overviewView.updateSummary(transactions);
            overviewView.renderRecentTransactions(transactions);
            cashFlowView.renderTransactions(transactions);

            allTransactions = transactions;

        } catch (error) {
            console.error('Error loading transactions:', error);
            alert("Failed to load transactions. Please check your connection.");
        }
    }

    async function handleNewTransaction(transactionData) {
        try{
            const transactionId = transactionData.id ? transactionData.id : Date.now().toString();
            const isEditing = Boolean(transactionData.id);

            const newTransaction = new Transaction(
                transactionData.id = transactionId, 
                transactionData.type,
                transactionData.title,
                transactionData.description,
                transactionData.amount,
                transactionData.date
            );

            if (isEditing === true){
                await updateTransaction(newTransaction);
            } else {
                await addTransaction(newTransaction);
            }
            transactionFormView.clearForm();
            await loadAndRenderTransactions();
        }
        catch (error) {
            console.error('Error adding transaction:', error);
            alert("Failed to save transaction. Please check your connection.");
        }
    }

    function handleEditClick(transanctionId){
        const editTransaction = allTransactions.find((item) => item.id === transanctionId);
        console.log(editTransaction);
        transactionFormView.populateForm(editTransaction);
        openTransaction();
    }
    
    transactionFormView.bindSubmitTransaction(handleNewTransaction);
    cashFlowView.bindEditTransaction(handleEditClick);
    loadAndRenderTransactions();
}

