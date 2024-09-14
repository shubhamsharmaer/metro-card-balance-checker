const { generateFakeBalance } = require("../services/balanceService");

exports.getCardBalance = (req, res, next) => {
    try{
        const cardNumber = req.params.cardNumber;   

        // validate the card number
        if (!/^\d{8}$/.test(cardNumber)){
            return res.status(400).json({ error: "Invalid card number" });
        }
            const balance = generateFakeBalance(cardNumber);
            res.status(200).json({ cardNumber, balance });

    } catch(err) {
        next(err);
    }
    
};