
import { prisma } from "../../config/prisma"
import { TUserPayload } from "../../types/user"
import { TCreateMasterServiceInput } from "./masterService.validation"





const createMasterService = async (payload: TCreateMasterServiceInput, user: TUserPayload) => {

    console.log(payload)


    const result = await prisma.serviceOfferingsMasterList.create({
        data: {
            ...payload,
        }   
    })
    return result
}


export const MasterService = {
    createMasterService
}