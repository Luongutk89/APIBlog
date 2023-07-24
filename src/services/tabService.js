const Tab = require("../models/tabModel");
require('dotenv').config();

module.exports = {
    createTabService: async (req, res) => {
        const { title, content } = req.body;
        try {
            const result = await Tab.create({ title, content });
            return res.status(200).json({
                EC: 0,
                EM: "Create Tab Success",
                DT: result
            });
        } catch (error) {
            return res.status(500).json({
                EC: -1,
                EM: "Error Server!"
            });
        }
    },


    getAllTabService: async (req, res) => {
        try {
            const result = await Tab.find({});
            return res.status(200).json({
                EC: 0,
                EM: "Get All Tab Success",
                DT: result
            });
        } catch (error) {
            return res.status(500).json({
                EC: -1,
                EM: "Error Server!"
            });
        }
    },


    updateTabService: async (req, res) => {
        const { title, content } = req.body;
        try {
            const { title, content } = req.body;
            const result = await Tab.findByIdAndUpdate(
                req.params.id, { title, content }, { new: true }
            );
            return res.status(200).json({
                EC: 0,
                EM: "Update Tab Success",
                DT: result
            });
        } catch (error) {
            return res.status(500).json({
                EC: -1,
                EM: "Error Server!"
            });
        }
    },


    deleteTabService: async (req, res) => {
        try {
            let result = await Tab.findByIdAndDelete({ _id: req.params.id });
            return res.status(200).json({
                EC: 0,
                EM: "Delete Tab Success",
                DT: result
            });
        } catch (error) {
            return res.status(500).json({
                EC: -1,
                EM: "Error Server!"
            });
        }
    },
}