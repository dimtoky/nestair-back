import { Response, Request, NextFunction } from 'express';
import { renderFile} from 'ejs';

import{ generatePdf } from "html-pdf-node-ts";
import path from 'path';

export async function sendPDF(req: Request, res: Response, next: NextFunction) {
  let date = new Date()
  res.set('Content-Type', 'application/pdf');
  let html = await renderFile( path.join(__dirname, "../views")+"\\pdfTemplate.ejs", { data: { date: date } })
  let file = { content: html };
  const pdfBuffer = await generatePdf(file)
  console.log(html)
  
  res.send(pdfBuffer);
  
}

export async function renderPDF(req: Request, res: Response, next: NextFunction) {

  
    // res.render("pdfTemplate",{user: user});

  }
  