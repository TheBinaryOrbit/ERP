"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDB = (Url) => {
    mongoose_1.default.connect(Url)
        .then(() => {
        console.log("Database Connected Successfully");
    })
        .catch((error) => {
        console.log(`Unable to connect Database \n${error}`);
    });
};
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=ConnectDb.js.map