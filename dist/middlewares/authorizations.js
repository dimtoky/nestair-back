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
exports.authorizeAdmin = exports.authorize = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const authorize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.headers.authorization) {
            const crq = { token: req.headers.authorization };
            const decoded = jsonwebtoken_1.default.verify(crq.token, process.env.SECRETKEY || '');
            const decodedF = JSON.parse(Buffer.from(crq.token.split('.')[1], 'base64').toString());
            if (decoded) {
                next();
            }
        }
    }
    catch (err) {
        res.status(401).send("false");
    }
});
exports.authorize = authorize;
const authorizeAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.headers.authorization) {
            const crq = { token: req.headers.authorization };
            const decoded = jsonwebtoken_1.default.verify(crq.token, process.env.SECRETKEY || '');
            const decodedF = JSON.parse(Buffer.from(crq.token.split('.')[1], 'base64').toString());
            if (decoded) {
                const user = yield prisma.users.findFirst({
                    where: {
                        id: decodedF.userId
                    }
                });
                if (!user) {
                    return res.status(401).json({ error: 'User not found' });
                }
                if (user.role === 1) {
                    console.log(user.email);
                    next();
                }
                else {
                    return res.status(401).json({ error: 'Not an admin' });
                }
            }
        }
    }
    catch (err) {
        res.status(401).send("false");
    }
});
exports.authorizeAdmin = authorizeAdmin;
//# sourceMappingURL=authorizations.js.map