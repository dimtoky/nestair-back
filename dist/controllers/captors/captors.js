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
exports.getcaptorById = exports.getCaptors = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function getCaptors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json('test auth admin');
    });
}
exports.getCaptors = getCaptors;
function getcaptorById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json('test auth ');
    });
}
exports.getcaptorById = getcaptorById;
// export async function addIncidents(req: any, res: any): Promise<any> {
//     const { title, description, status, priority, dueDate, assignedTo } = req.body;
//     const date = new Date();
//     const originalFileNames: string|null[] = [];
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//     for (let i = 0; i < 5; i++) {
//         if (req.files[i]) {
//             originalFileNames.push(req.files[i].originalname);
//         }else{
//             originalFileNames.push(null);
//         }
//     }
//     const incident = await prisma.incidents.create({
//         data: {
//             title: title,
//             description: description,
//             status: parseInt(status),
//             priority: parseInt(priority),
//             dueDate:  new Date(dueDate),
//             assignedTo: {
//                 connect: { id: parseInt(assignedTo) }
//               },
//               pictures:  {
//                 create: [
//                   {  url: originalFileNames[0]? originalFileNames[0] : null, createdAt:  date, updatedAt: date },
//                   {  url: originalFileNames[1]? originalFileNames[1] : null, createdAt:  date, updatedAt: date },
//                   {  url: originalFileNames[2]? originalFileNames[2] : null, createdAt:  date, updatedAt: date },
//                   {  url: originalFileNames[3]? originalFileNames[3] : null, createdAt:  date, updatedAt: date },
//                   {  url: originalFileNames[4]? originalFileNames[4] : null, createdAt:  date, updatedAt: date },
//                 ],
//               },
//             createdAt: date,
//             updatedAt: date,
//         }
//     })
//     res.json(incident);
// }
// export async function modifyIncidents(req: any, res: any) {
//     const { id, title, description, status, priority, dueDate, assignedTo, createdBy, createdAt, updatedAt, closedAt } = req.body;
//     const originalFileNames: string|null[] = [];
//     const date = new Date();
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//     for (let i = 0; i < 5; i++) {
//         if (req.files[i]) {
//             originalFileNames.push(req.files[i].originalname);
//         }else{
//             originalFileNames.push(null);
//         }
//     }
//     const incidentData = await prisma.incidents.findFirst({where: {id: parseInt(id)},include: {pictures: true,},});
//     const incident = await prisma.incidents.update({
//         where: {
//             id: parseInt(id)
//         },
//         data: {
//             title: title,
//             description: description,
//             status: parseInt(status),
//             priority:  parseInt(priority),
//             dueDate: new Date(dueDate),
//             pictures:  {
//                 update: [
//                   { where: { id : incidentData?.pictures[0].id}, data: {  url: originalFileNames[0],  updatedAt: new Date(dueDate)} },
//                   { where: { id : incidentData?.pictures[1].id}, data: {  url: originalFileNames[1],  updatedAt: new Date(dueDate)} },
//                   { where: { id : incidentData?.pictures[2].id}, data: {  url: originalFileNames[2],  updatedAt: new Date(dueDate)} },
//                   { where: { id : incidentData?.pictures[3].id}, data: {  url: originalFileNames[3],  updatedAt: new Date(dueDate)} },
//                   { where: { id : incidentData?.pictures[4].id}, data: {  url: originalFileNames[4],  updatedAt: new Date(dueDate)} },
//                 ],
//               },
//             assignedTo: {  connect: { id: parseInt(assignedTo) }},
//             updatedAt: date,
//             closedAt: closedAt? new Date(closedAt): null,
//         }
//     })
//     res.json(incident);
// }
// export async function deleteIncidents(req: any, res: any) {
//     const { id } = req.body;
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//     const incident = await prisma.incidents.update({
//         where: {
//             id: parseInt(id)
//         },
//         data: {
//             pictures: {deleteMany: {}},
//     }})
//     await prisma.incidents.delete({where: {id: parseInt(id)}});
//     res.json(incident);
// }
// export async function getIncidents(req: any, res: any) {
//     const { status, priority } = req.body;
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//    if (status) {
//         const incident = await prisma.incidents.findMany({
//             where: {
//                 status: parseInt(status)
//             }
//         })
//         res.json(incident);
//     } else if (priority) {
//     const incident = await prisma.incidents.findMany({
//         where: {
//             priority:  parseInt(priority)
//            }
//     })
//     res.json(incident);
// }
//     else {
//         const incident = await prisma.incidents.findMany();
//         res.json(incident);
//     }
// }
// export async function getIncidentById(req: any, res: any) {
//     const id = req.params.id;
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//     const incident = await prisma.incidents.findUnique({
//         where: {
//             id: parseInt(id)
//            },
//            include: {
//             pictures: true,
//           },
//     })
//     res.json(incident);
// }
// export async function getImages(req:any, res: any){
//     const filename = req.params.filename;
//     const token = req.headers.authorization?.split(' ')[1];
//     try {
//         jwt.verify(token, process.env.SECRETKEY || 'JWT_SECRET');
//       } catch(err) {
//         return res.status(401).json({ error: 'Invalid token' })
//       }
//       res.sendFile(filename, { root: './uploads' });
// }
//# sourceMappingURL=captors.js.map