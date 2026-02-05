/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { prisma } from "../../config/prisma";



export const uploadMedia = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "File is required" });
        }

        const { title, specialistId, serviceOfferingId } = req.body;
        const fileUrl = `/uploads/${file.filename}`;

        const media = await prisma.media.create({
            data: {
                title: title || file.originalname,
                fileName: file.filename,
                fileSize: file.size,
                bucketName: "local",
                s3Key: null,
                uploadedAt: new Date(),
                url: fileUrl,
                // ✅ RELATION FIX
                specialist: {
                    connect: { id: specialistId },
                },

                serviceOffering: serviceOfferingId
                    ? { connect: { id: serviceOfferingId } }
                    : undefined,
            },
        });

        res.status(201).json({
            message: "Media uploaded successfully",
            data: media,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
