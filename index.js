"use strict";
exports.__esModule = true;
var express_1 = require("express");
require('dotenv').config();
var app = express_1["default"]();
var dev = process.env.NODE_ENV;
// let corsOptions = {
//     origin: process.env.FRONT_END_URL,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));
// app.use(morgan('dev'));
// app.use(express.json());
var PORT = process.env.PORT || 8000;
/* eslint-disable-next-line */
// app.use((err, req, res) => {
//   res.status(err.status || 500).json({
//     errors: {
//       message: err.message,
//     },
//   });
// });
app.listen(PORT, function () {
    console.log("> Server listening at http://localhost:" + PORT + " as " + (dev ? 'development' : process.env.NODE_ENV));
});
exports["default"] = app;
