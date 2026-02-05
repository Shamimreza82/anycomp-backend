import { Router } from "express";
import { upload } from "../../middlewares/multer";
import { uploadMedia } from "./media.controller";


const router = Router();

// single image upload
router.post("/upload", upload.single("photo"),uploadMedia);


export const MediaRouter = router;