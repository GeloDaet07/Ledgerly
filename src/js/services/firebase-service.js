import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, query, where, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addTransaction(transaction) {
  const transactionsCollection = collection(db, "transactions");
  return await addDoc(transactionsCollection, {...transaction});
}

export async function getTransactions() {
  const transactionsCollection = collection(db, "transactions");
  const snapshot = await getDocs(transactionsCollection);
  return snapshot.docs.map(doc => doc.data());
}

export async function updateTransaction(updatedTransaction){
    const transactionsCollection = collection(db, "transactions");

    //Search for the document where the custom "id" field matches
    const q = query(transactionsCollection, where("id", "==", updatedTransaction.id));
    const snapshot = await getDocs(q);
    
    //Updates the record if found
    if (!snapshot.empty) {
      const firebaseDocId = snapshot.docs[0].id;
      const transactionRef = doc(db, "transactions", firebaseDocId);
      
      await updateDoc(transactionRef, {...updatedTransaction});
    } else {
      console.error("Transaction not found in Firebase!");
    }
}

export async function deleteTransaction(transactionId) {
  const transactionsCollection = collection(db, "transactions");
  const transactionDoc = doc(transactionsCollection, transactionId);
  return await deleteDoc(transactionDoc);
}