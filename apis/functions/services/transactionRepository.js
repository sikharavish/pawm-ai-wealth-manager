const supabase = require("../config/supabaseClient");

async function insertTransactions(transactions) {
  const dbRows = transactions.map((tx) => ({
    user_id: "demo-user",
    account_id: "default-account",
    tx_date: tx.date,
    merchant: tx.merchant,
    amount: tx.amount,
    category: "uncategorized",
    source: tx.source
  }));

  const { data, error } = await supabase
    .from("transactions")
    .insert(dbRows)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

module.exports = {
  insertTransactions
};
