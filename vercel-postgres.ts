const { Client } = require('@vercel/postgres');

module.exports = {
  async connectToDatabase() {
    const client = new Client();
    await client.connect();
    return client;
  }
};
