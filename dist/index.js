"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./repositories/db");
const users_router_1 = require("./routes/users-router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 5000;
app.use('/users', users_router_1.usersRouter);
app.get('/', (req, res) => {
    res.send('hello, tester!');
});
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.runDB;
    app.listen(port, () => {
        console.log(`Example app listen on port: ${port}`);
    });
});
startApp();
