import  { Request, Response, Router } from "express";
import dotenv from "dotenv";

export const router : Router = Router()
dotenv.config();

router.get("/pdf", (req : Request, res : Response)=>{
    if(req.ip!.includes("127.0.0.1")){
        const {content} = req.query
        return res.render("pdf", {content})
    }
    return res.redirect("/")
})

router.get("/flag", (req: Request, res : Response)=>{
    if(req.ip!.includes("127.0.0.1")){
        return res.send(process.env.FLAG || "BeeCTF{f4k3_fl4g}")
    }
    return res.redirect("/")
})