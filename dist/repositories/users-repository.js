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
exports.usersRepository = void 0;
const db_1 = require("./db");
exports.usersRepository = {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return db_1.usersCollection.find({}).toArray(); //usersRepository.getUsers()
        });
    },
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return db_1.usersCollection.findOne({ _id: id }); //usersRepository.getUser(id)
        });
    },
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = db_1.usersCollection.insertOne(user);
            return res;
        });
    },
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.usersCollection.deleteOne({ _id: id });
            return result.deletedCount === 1;
        });
    },
    updateUser(id, userName, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
};
