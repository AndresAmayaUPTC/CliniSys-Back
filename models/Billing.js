const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Paid', 'Pending'],
        default: 'Pending',
    },
});

module.exports = mongoose.model('Billing', BillingSchema);
