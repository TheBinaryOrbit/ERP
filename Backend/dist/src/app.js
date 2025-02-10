"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const ConnectDb_1 = require("../Database/ConnectDb");
(0, ConnectDb_1.ConnectDB)(process.env.DBURL);
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
// test api
exports.app.get('/api', (req, res) => {
    res.send('Har Har Mahadev');
});
const port = process.env.PORT;
exports.app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map