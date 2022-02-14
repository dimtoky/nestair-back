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
exports.renderPDF = exports.sendPDF = void 0;
const ejs_1 = require("ejs");
const html_pdf_node_ts_1 = require("html-pdf-node-ts");
const path_1 = __importDefault(require("path"));
function sendPDF(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.set('Content-Type', 'application/pdf');
        let html = yield (0, ejs_1.renderFile)(path_1.default.join(__dirname, "../views") + "\\pdfTemplate.ejs", { user: { name: "test" } });
        let file = { content: html };
        const pdfBuffer = yield (0, html_pdf_node_ts_1.generatePdf)(file);
        console.log(html);
        res.send(pdfBuffer);
    });
}
exports.sendPDF = sendPDF;
function renderPDF(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // res.render("pdfTemplate",{user: user});
    });
}
exports.renderPDF = renderPDF;
//# sourceMappingURL=pdfgenerator.js.map