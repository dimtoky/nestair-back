"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const saltRounds = 10;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide email and password'
            });
        }
        const salt = yield bcrypt.genSalt(saltRounds);
        const hash = yield bcrypt.hash(password, salt);
        const user = yield prisma.users.create({
            data: {
                email: email,
                password: hash,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });
        res.json(user);
    });
}
exports.createUser = createUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide email and password'
            });
        }
        const user = yield prisma.users.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        const passwordMatch = bcrypt.compare(password, user.password || '');
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user.id }, process.env.SECRETKEY || 'JWT_SECRET', { expiresIn: '1h' });
        res.json({ token });
    });
}
exports.loginUser = loginUser;
//# sourceMappingURL=user.js.map