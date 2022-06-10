"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const incidents_1 = require("./incidents");
const storage = multer_1.default.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const incidentsRouter = express_1.default.Router();
incidentsRouter.post('/add', upload.array('pictures', 5), incidents_1.addIncidents);
incidentsRouter.delete('/delete', incidents_1.deleteIncidents);
incidentsRouter.put('/modify', upload.array('pictures', 5), incidents_1.modifyIncidents);
incidentsRouter.get('/', incidents_1.getIncidents);
incidentsRouter.get('/:id', incidents_1.getIncidentById);
incidentsRouter.get('/image/:filename', incidents_1.getImages);
exports.default = incidentsRouter;
//# sourceMappingURL=taskRouter.js.map