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
exports.getImages = exports.getIncidentById = exports.getIncidents = exports.deleteIncidents = exports.modifyIncidents = exports.addIncidents = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const jwt = __importStar(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function addIncidents(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description, status, priority, dueDate, assignedTo } = req.body;
        const date = new Date();
        const originalFileNames = [];
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        for (let i = 0; i < 5; i++) {
            if (req.files[i]) {
                originalFileNames.push(req.files[i].originalname);
            }
            else {
                originalFileNames.push(null);
            }
        }
        const incident = yield prisma.incidents.create({
            data: {
                title: title,
                description: description,
                status: parseInt(status),
                priority: parseInt(priority),
                dueDate: new Date(dueDate),
                assignedTo: {
                    connect: { id: parseInt(assignedTo) }
                },
                pictures: {
                    create: [
                        { url: originalFileNames[0] ? originalFileNames[0] : null, createdAt: date, updatedAt: date },
                        { url: originalFileNames[1] ? originalFileNames[1] : null, createdAt: date, updatedAt: date },
                        { url: originalFileNames[2] ? originalFileNames[2] : null, createdAt: date, updatedAt: date },
                        { url: originalFileNames[3] ? originalFileNames[3] : null, createdAt: date, updatedAt: date },
                        { url: originalFileNames[4] ? originalFileNames[4] : null, createdAt: date, updatedAt: date },
                    ],
                },
                createdAt: date,
                updatedAt: date,
            }
        });
        res.json(incident);
    });
}
exports.addIncidents = addIncidents;
function modifyIncidents(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { id, title, description, status, priority, dueDate, assignedTo, createdBy, createdAt, updatedAt, closedAt } = req.body;
        const originalFileNames = [];
        const date = new Date();
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        for (let i = 0; i < 5; i++) {
            if (req.files[i]) {
                originalFileNames.push(req.files[i].originalname);
            }
            else {
                originalFileNames.push(null);
            }
        }
        const incidentData = yield prisma.incidents.findFirst({ where: { id: parseInt(id) }, include: { pictures: true, }, });
        const incident = yield prisma.incidents.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                description: description,
                status: parseInt(status),
                priority: parseInt(priority),
                dueDate: new Date(dueDate),
                pictures: {
                    update: [
                        { where: { id: incidentData === null || incidentData === void 0 ? void 0 : incidentData.pictures[0].id }, data: { url: originalFileNames[0], updatedAt: new Date(dueDate) } },
                        { where: { id: incidentData === null || incidentData === void 0 ? void 0 : incidentData.pictures[1].id }, data: { url: originalFileNames[1], updatedAt: new Date(dueDate) } },
                        { where: { id: incidentData === null || incidentData === void 0 ? void 0 : incidentData.pictures[2].id }, data: { url: originalFileNames[2], updatedAt: new Date(dueDate) } },
                        { where: { id: incidentData === null || incidentData === void 0 ? void 0 : incidentData.pictures[3].id }, data: { url: originalFileNames[3], updatedAt: new Date(dueDate) } },
                        { where: { id: incidentData === null || incidentData === void 0 ? void 0 : incidentData.pictures[4].id }, data: { url: originalFileNames[4], updatedAt: new Date(dueDate) } },
                    ],
                },
                assignedTo: { connect: { id: parseInt(assignedTo) } },
                updatedAt: date,
                closedAt: closedAt ? new Date(closedAt) : null,
            }
        });
        res.json(incident);
    });
}
exports.modifyIncidents = modifyIncidents;
function deleteIncidents(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const incident = yield prisma.incidents.update({
            where: {
                id: parseInt(id)
            },
            data: {
                pictures: { deleteMany: {} },
            }
        });
        yield prisma.incidents.delete({ where: { id: parseInt(id) } });
        res.json(incident);
    });
}
exports.deleteIncidents = deleteIncidents;
function getIncidents(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { status, priority } = req.body;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        if (status) {
            const incident = yield prisma.incidents.findMany({
                where: {
                    status: parseInt(status)
                }
            });
            res.json(incident);
        }
        else if (priority) {
            const incident = yield prisma.incidents.findMany({
                where: {
                    priority: parseInt(priority)
                }
            });
            res.json(incident);
        }
        else {
            const incident = yield prisma.incidents.findMany();
            res.json(incident);
        }
    });
}
exports.getIncidents = getIncidents;
function getIncidentById(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const incident = yield prisma.incidents.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                pictures: true,
            },
        });
        res.json(incident);
    });
}
exports.getIncidentById = getIncidentById;
function getImages(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const filename = req.params.filename;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        try {
            jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
        }
        catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.sendFile(filename, { root: './uploads' });
    });
}
exports.getImages = getImages;
//# sourceMappingURL=incidents.js.map