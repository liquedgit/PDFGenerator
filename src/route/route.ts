import express,{ Express, Router } from "express";
import {router as HomeRouter} from "../route/home/route"
import {router as PDFRouter} from "../route/pdf/route"
export const router : Router = express.Router()

router.use(HomeRouter)
router.use(PDFRouter)