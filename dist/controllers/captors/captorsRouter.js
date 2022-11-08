"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const captors_1 = require("./captors");
const authorizations_1 = require("../../middlewares/authorizations");
const storage = multer_1.default.diskStorage({
    destination: './uploads/',
    filename(_req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage });
const captorsRouter = express_1.default.Router();
captorsRouter.get('/', authorizations_1.authorizeAdmin, captors_1.getCaptors);
captorsRouter.get('/:id', authorizations_1.authorize, captors_1.getcaptorById);
//  captorsRouter.post('/alert/add', addAlert)
//  captorsRouter.get('/alert/get', getAllAlerts)
//  captorsRouter.get('/alert/get', getAlertById)
exports.default = captorsRouter;
//# sourceMappingURL=captorsRouter.js.map