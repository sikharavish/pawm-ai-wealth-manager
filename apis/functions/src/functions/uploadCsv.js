const { app } = require("@azure/functions");
const fs = require("fs");
const path = require("path");

app.http("uploadCsv", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      context.log("uploadCsv endpoint called");

      const contentType = request.headers.get("content-type") || "";

      if (
        !contentType.includes("text/csv") &&
        !contentType.includes("application/octet-stream")
      ) {
        return {
          status: 400,
          jsonBody: {
            error: "Content-Type must be text/csv or application/octet-stream"
          }
        };
      }

      const bodyBuffer = Buffer.from(await request.arrayBuffer());

      if (!bodyBuffer || bodyBuffer.length === 0) {
        return {
          status: 400,
          jsonBody: {
            error: "Empty file received"
          }
        };
      }

      const uploadsDir = path.join(__dirname, "../../uploads");

      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const fileName = `upload-${Date.now()}.csv`;
      const filePath = path.join(uploadsDir, fileName);

      fs.writeFileSync(filePath, bodyBuffer);

      return {
        status: 200,
        jsonBody: {
          message: "CSV uploaded successfully",
          fileName,
          filePath,
          bytesSaved: bodyBuffer.length
        }
      };
    } catch (error) {
      context.log("Upload error:", error);

      return {
        status: 500,
        jsonBody: {
          error: "Failed to upload CSV",
          details: error.message
        }
      };
    }
  }
});
