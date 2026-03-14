const { app } = require("@azure/functions");
const { getRecentTransactions } = require("../../services/transactionQueryService");

app.http("previewTransactions", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      context.log("previewTransactions endpoint called");

      const limitParam = request.query.get("limit");
      const limit = limitParam ? parseInt(limitParam, 10) : 20;

      const transactions = await getRecentTransactions(limit);

      return {
        status: 200,
        jsonBody: {
          message: "Transactions retrieved successfully",
          count: transactions.length,
          rows: transactions
        }
      };
    } catch (error) {
      context.log("Preview error:", error);

      return {
        status: 500,
        jsonBody: {
          error: "Failed to retrieve transactions",
          details: error.message
        }
      };
    }
  }
});
