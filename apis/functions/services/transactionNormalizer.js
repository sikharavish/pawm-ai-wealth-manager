function normalizeTransaction(row) {
  const date = row.date ? String(row.date).trim() : null;
  const merchant = row.description ? String(row.description).trim() : null;
  const amount = row.amount !== undefined ? parseFloat(row.amount) : null;

  let type = "unknown";
  if (amount !== null && !Number.isNaN(amount)) {
    type = amount < 0 ? "expense" : "income";
  }

  return {
    date,
    merchant,
    amount,
    type,
    source: "csv"
  };
}

function normalizeTransactions(rows) {
  return rows.map(normalizeTransaction);
}

module.exports = {
  normalizeTransaction,
  normalizeTransactions
};
