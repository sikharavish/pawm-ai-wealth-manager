const supabase = require("../config/supabaseClient");

async function getRecentTransactions(limit = 20) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

module.exports = {
  getRecentTransactions
};
