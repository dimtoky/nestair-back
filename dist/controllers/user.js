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
exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.email) === undefined || ((_b = req.body) === null || _b === void 0 ? void 0 : _b.password) === undefined) {
            return res.status(200).json({ response: 'invalid param', payload: req.body });
        }
        else {
            const user = yield prisma.user.create({
                data: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    tel: req.body.tel,
                    adresse: req.body.adresse,
                    password: 'test',
                },
            });
            return res.status(200).json({ response: 'success' });
        }
    });
}
exports.createUser = createUser;
//# sourceMappingURL=user.js.map