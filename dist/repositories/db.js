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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCollection = void 0;
exports.runDB = runDB;
const mongodb_1 = require("mongodb");
const mongoUri = process.env.mongoURI || "mongodb://localhost:27017"; // на мас работает 0.0.0.0 а localhost
const client = new mongodb_1.MongoClient(mongoUri);
const db = client.db("users");
exports.usersCollection = db.collection('users');
function runDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.db("users").command({ ping: 1 });
            console.log("Connection successfully to mongo server");
        }
        catch (error) {
            console.log("Can't connect to db");
            yield client.close();
        }
    });
}
