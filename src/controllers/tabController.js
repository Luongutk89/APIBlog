const {
    createTabService,
    getAllTabService,
    updateTabService,
    deleteTabService,
} = require("../services/tabService");



module.exports = {
    //Tạo mới 1 Tab
    createTabController: async (req, res) => {
        let data = await createTabService(req, res);
        return data;
    },


    //Lấy Tất cả Tab
    getAllTabController: async (req, res) => {
        let data = await getAllTabService(req, res);
        return data;
    },


    //Sửa  Tab
    updateTabController: async (req, res) => {
        let data = await updateTabService(req, res);
        return data;
    },


    //Xóa Tab
    deleteTabController: async (req, res) => {
        let data = await deleteTabService(req, res);
        return data;
    },
}