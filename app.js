require('dotenv').config();
const axios = require('axios');
const connection = require('./src/config/database');
const apiRouter = require('./src/routes/api/index');

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

// Port
const port = process.env.PORT || 8888;

//Config static file
app.use(express.static(path.join('./src', 'public')));

//Config trình duyệt
app.use(cors({ origin: '*' }));

//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Đang Call API BackendBlog!')
});

const crossCall = async () => {
    try {
        const response = await axios.get('https://cloudhub.onrender.com/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

setInterval(crossCall, 5 * 60 * 1000);


//Khai báo Router
app.use('/api/v1', apiRouter);

(async () => {
    try {
        //Using mongoose
        await connection();

        //Lắng nghe cổng chạy server
        app.listen(port, () => {
            console.log(`Server running ${port}/`);
        })
    } catch (error) {
        console.log("Error connect to DB: ", error);
    }
})();