/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../config/prisma"
import { TUserPayload } from "../../types/user"
import uploadToCloudinary from "../../utils/uploadToCloudinary";
import { TCreateSpecialistInput } from "./specialist.validation"


const createSpecialist = async (
  payload: TCreateSpecialistInput,
  user: TUserPayload,
  files: Express.Multer.File[]
) => {
  // 1️⃣ Create the specialist

  console.log(payload)
  const specialist = await prisma.specialist.create({
    data: {
      ...payload,
      userId: user.id,
    },
  });

  console.log(specialist)

  // 2️⃣ Upload each file to Cloudinary and store the result
  const mediaData = await Promise.all(
    files.map(async (file) => {
      const cloudUrl = await uploadToCloudinary(file.buffer, "specialists", "image");

      return {
        url: cloudUrl,
        specialistId: specialist.id,
        title: file.originalname,
        fileName: file.originalname, // you can keep original name
        fileSize: file.size,
        uploadedAt: new Date(),
      };
    })
  );

  // 3️⃣ Save all media records in the database
  await prisma.media.createMany({
    data: mediaData,
  });

  return specialist;
};

const getAllSpecialists = async (
  params: { page?: number; limit?: number; search?: string },
  user: TUserPayload
) => {
  const { page = 1, limit = 10, search } = params as any;
  const skip = (page - 1) * limit;

  const where: any = { userId: user.id };
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { specialization: { contains: search, mode: 'insensitive' } },
    ];
  }

  // Get the data
  const result = await prisma.specialist.findMany({
    where,
    skip,
    take: Number(limit),
    include: {
      media: true,
    },
  });

  // Get the total count
  const total = await prisma.specialist.count({ where });

  return {
    data: result,
    meta: {
      page: Number(page),
      limit: Number(limit),
      total, // total matching items
    },
  };
};
const editSpecialist = async (id: string, payload: TCreateSpecialistInput) => {

    const result = await prisma.specialist.update({
        where: { id },
        data: { ...payload }
    })

    return result
}
const deleteSpecialist = async (id: string) => {

    const result = await prisma.specialist.delete({
        where: { id }
    })

    return result
}  
const verificationStatus = async (id: string) => {

    const result = await prisma.specialist.update({
        where: { id },
        data: { verificationStatus: "APPROVED", isDraft: false },
      
    })  
    return result   

}
const verificationUnpublish = async (id: string) => {

    const result = await prisma.specialist.update({
        where: { id },
        data: { verificationStatus: "PENDING", isDraft: true },
      
    })  
    return result   

}
const getaAllSpacialist = async () => {

    const result = await prisma.specialist.findMany({
        where: { verificationStatus: "APPROVED", isDraft: false },
        include: { user: {select: { id: true, fullName: true, email: true }}, media: { select: { url: true, title: true } } }, 
        
    })  
    return result

}
const getSingleSpecialistById = async (id: string) => {

    const result = await prisma.specialist.findUnique({
        where: { id },
        include: { user: true, media: true }
    })  
    return result

}   

export const SpecialistService = {
    createSpecialist, 
    getAllSpecialists, 
    editSpecialist, 
    deleteSpecialist, 
    verificationStatus, 
    getaAllSpacialist, 
    getSingleSpecialistById, 
    verificationUnpublish
}