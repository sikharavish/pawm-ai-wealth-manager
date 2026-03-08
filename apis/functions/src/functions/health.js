const { app } = require('@azure/functions');

app.http('health', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('Health endpoint called');

    return {
      status: 200,
      jsonBody: {
        status: 'running',
        service: 'pawm-functions'
      }
    };
  }
});
