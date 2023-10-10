class TransactionController {
    // Send money logic
    async sendMoney(req, res) {
      try {
        // Handle money transfer logic here
        // Access sender's and recipient's data from req.body
        // Update account balances in the database
        res.json({ message: 'Money sent successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Money transfer failed' });
      }
    }
  
    // Pay bill logic
    async payBill(req, res) {
      try {
        // Handle bill payment logic here
        // Access bill details from req.body
        // Deduct the bill amount from the user's account
        res.json({ message: 'Bill payment successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Bill payment failed' });
      }
    }
  }
  
  module.exports = TransactionController;
  