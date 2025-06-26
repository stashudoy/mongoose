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
exports.usersRouter = void 0;
const mongodb_1 = require("mongodb");
const users_service_1 = require("../application/users.service");
const express_1 = require("express");
exports.usersRouter = (0, express_1.Router)({});
exports.usersRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_service_1.usersService.createUser(req.body.userName, req.body.email);
    res.status(201).send(user);
}));
exports.usersRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isUpdated = yield users_service_1.usersService.updateUser(new mongodb_1.ObjectId(req.params.id), req.body.email, req.body.username);
    if (isUpdated) {
        res.send(204);
    }
    else {
        res.send(404);
    }
}));
exports.usersRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_service_1.usersService.getUsers();
    res.send(users);
}));
exports.usersRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_service_1.usersService.getUser(new mongodb_1.ObjectId(req.params.id));
    if (user) {
        res.send(user);
    }
    else {
        res.send(404);
    }
}));
exports.usersRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isDeleted = yield users_service_1.usersService.deleteUser(new mongodb_1.ObjectId(req.params.id));
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
}));
