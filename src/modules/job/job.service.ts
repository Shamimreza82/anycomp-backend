import { prisma } from "../../config/prisma"
import { generateJobId } from "../../utils/generateJobId"
import { TJobCategoryInput, TJobCreateInput } from "./job.validation"




const createJob = async (payload: TJobCreateInput) => {

  console.log(payload)



  const id = await generateJobId()

  if (id) {
    payload.jobUniqueId = id
  } else {
    throw new Error("Id not found")
  }


  const result = prisma.job.create({
    data: {
      ...payload
    }
  })



  return result
}



const createCategory = async (payload: TJobCategoryInput) => {

  console.log(payload)
  const result = await prisma.jobCategory.create({
    data: {
      title: payload.title,
      desc: payload.desc
    }
  })
  return result

}


const getAllCategory = async () => {

  const result = await prisma.jobCategory.findMany({
    select: {
      title: true,
      desc: true
    }
  })
  return result

}


export const JobService = {
  createJob,
  createCategory,
  getAllCategory
}
