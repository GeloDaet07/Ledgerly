class Transaction {
  constructor(id, type, title, description, amount, date) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.description = description;
    this.amount = parseFloat(amount);
    this.date = date;
  }
}

export default Transaction;
