import express,{ Request, Response, Router } from "express";
import GeneratePDF from "../../utils/bot";

export const router : Router = express.Router()
router.use(express.urlencoded({ extended: true }));

router.get("/", (req : Request, res: Response)=>{
    return res.render("home")
})

router.post("/", async (req : Request, res : Response)=>{
    const {content} = req.body
    const pdf = await GeneratePDF(content)
    if(pdf){
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Generated.pdf"');
        return res.end(pdf);
    }
    return res.status(500).send("Internal Server Error")
})