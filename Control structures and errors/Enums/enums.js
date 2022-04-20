const PaymentMethod = Object.freeze({
  CREDIT_CARD: 'CREDIT_CARD',
  PAYPAL: 'PAYPAL',
  PLAN: 'PLAN',
});

const TransactionStatus = Object.freeze({
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
});

const TransactionType = Object.freeze({
  PAYMENT: 'PAYMENT',
  REFUND: 'REFUND',
});

main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: TransactionType.PAYMENT,
      status: TransactionStatus.OPEN,
      method: PaymentMethod.CREDIT_CARD,
      amount: '23.99',
    },
    {
      id: 't2',
      type: TransactionType.PAYMENT,
      status: TransactionStatus.OPEN,
      method: PaymentMethod.PAYPAL,
      amount: '100.43',
    },
    {
      id: 't3',
      type: TransactionType.REFUND,
      status: TransactionStatus.OPEN,
      method: PaymentMethod.CREDIT_CARD,
      amount: '10.99',
    },
    {
      id: 't4',
      type: TransactionType.PAYMENT,
      status: TransactionStatus.CLOSED,
      method: PaymentMethod.PLAN,
      amount: '15.99',
    },
  ];

  try {
    processTransactions(transactions);
  } catch (e) {
    logError(e.message);
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions);

  for (const transaction of transactions) {
    try {
      processTransaction(transaction);
    } catch (e) {
      logError(e.message);
    }
  }
}

function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    throw new Error('No transactions found');
  }
}

function isEmpty(transactions) {
  return !transactions.length;
}

function processTransaction(transaction) {
  validateTransaction(transaction);

  switch (transaction.type) {
    case TransactionType.PAYMENT:
      processPayment(transaction);
      break;
    case TransactionType.REFUND:
      processRefund(transaction);
      break;
  }
}

function validateTransaction(transaction) {
  if (!isValidType(transaction)) {
    throw new Error(`Transaction ${transaction.id} is not a payment or refund`);
  }

  if (!isOpen(transaction)) {
    throw new Error(`Transaction ${transaction.id} is not open`);
  }
}

function isValidType(transaction) {
  return Object.values(TransactionType).includes(transaction.type);
}

function isOpen(transaction) {
  return transaction.status === TransactionStatus.OPEN;
}

function processPayment(transaction) {
  switch (transaction.method) {
    case PaymentMethod.CREDIT_CARD:
      processCreditCardPayment(transaction);
      break;
    case PaymentMethod.PAYPAL:
      processPayPalPayment(transaction);
      break;
    case PaymentMethod.PLAN:
      processPlanPayment(transaction);
      break;
  }
}

function processCreditCardPayment(transaction) {
  console.log(
      'Processing credit card payment for amount: ' + transaction.amount,
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processRefund(transaction) {
  switch (transaction.method) {
    case PaymentMethod.CREDIT_CARD:
      processCreditCardRefund(transaction);
      break;
    case PaymentMethod.PAYPAL:
      processPayPalRefund(transaction);
      break;
    case PaymentMethod.PLAN:
      processPlanRefund(transaction);
      break;
  }
}

function processCreditCardRefund(transaction) {
  console.log(
      'Processing credit card refund for amount: ' + transaction.amount,
  );
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}

function logError(message, item = null) {
  if (item) {
    console.error(`${message} ${item}`);
  } else {
    console.error(message);
  }
}
