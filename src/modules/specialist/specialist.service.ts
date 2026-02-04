import { prisma } from "../../config/prisma"
import { TUserPayload } from "../../types/user"
import { Roles } from "../../utils/constant/auth.Constant"
import { TCreateSpecialistInput } from "./specialist.validation"


const createSpecialist = async (payload: TCreateSpecialistInput, user: TUserPayload) => {


    const result = await prisma.specialist.upsert({
        where: { userId: user.id },
        update: { ...payload },
        create: { ...payload, userId: user.id }
    })

    if (result) {
        await prisma.user.update({
            where: { id: user.id },
            data: { role: Roles.SPECIALIST }
        })
    }

    return result
}


export const SpecialistService = {
    createSpecialist
}