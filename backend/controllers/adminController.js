const express = require("express");
const pool = require('../utils/databaseConnect');
const app = express();

class adminController{
    async admin_func(req, res) {
        return res.json({message: "All right!"})
    }

}

module.exports = new adminController();