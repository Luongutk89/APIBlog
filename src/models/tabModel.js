const mongoose = require('mongoose');

const tabSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, },
    },
    {
        timestamps: true,
    }
);

const Tab = mongoose.model('Tab', tabSchema);

module.exports = Tab;