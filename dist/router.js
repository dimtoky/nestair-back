"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = __importDefault(require("./controllers/auth/authRouter"));
const pdfgenerator_1 = require("./controllers/pdfgenerator");
const router = express_1.default.Router();
// this is a global route
router.get('/health', (req, res) => {
    res.sendStatus(200);
});
router.use('/user', authRouter_1.default); // use routes from hello world component
router.get('/renderpdf', pdfgenerator_1.renderPDF);
router.get('/genpdf', pdfgenerator_1.sendPDF);
exports.default = router;
//# sourceMappingURL=router.js.map