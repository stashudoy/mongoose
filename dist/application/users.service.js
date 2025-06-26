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
exports.usersService = void 0;
const mongodb_1 = require("mongodb");
const users_repository_1 = require("../repositories/users-repository");
exports.usersService = {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repository_1.usersRepository.getUsers();
        });
    },
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repository_1.usersRepository.getUser(id);
        });
    },
    createUser(userName, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = { _id: new mongodb_1.ObjectId(), userName, email, addedAt: new Date() };
            return users_repository_1.usersRepository.createUser(user);
        });
    },
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repository_1.usersRepository.deleteUser(id);
        });
    },
    updateUser(id, userName, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_repository_1.usersRepository.updateUser(id, userName, email);
        });
    }
};
