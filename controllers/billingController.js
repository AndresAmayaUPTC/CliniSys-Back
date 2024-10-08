const Billing = require('../models/Billing');

exports.createBilling = async (req, res) => {
    try {
        const billing = new Billing(req.body);
        await billing.save();
        res.status(201).json(billing);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBilling = async (req, res) => {
    try {
        const bills = await Billing.find().populate('patientId');
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
