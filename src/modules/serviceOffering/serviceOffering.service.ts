import { prisma } from "../../config/prisma"
import { TUserPayload } from "../../types/user"
import { TCreateServiceOfferingInput } from "./serviceOffering.validation"



const createServiceOffering = async (payload: TCreateServiceOfferingInput, user: TUserPayload) => {

    console.log(payload)

    // const specialist = await prisma.specialist.findUnique({
    //     where: { userId: user.id }, // or user.specialistId if linked differently
    // });


return {}
}




const getMyServiceOffering = async (user: TUserPayload) => {


    console.log(user)
    const result = await prisma.serviceOffering.findMany({
        where: {
            specialist: {
                userId: user.id
            }
        },
        include: {
            masterList: true
        }
    })
    return result
}










    export const ServiceOfferingService = {
        createServiceOffering, 
        getMyServiceOffering
    }