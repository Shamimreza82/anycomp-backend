/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '../../config/prisma';
import { TUserPayload } from '../../types/user';
import { TCanditateProfile } from './user.validation';




//////////////////////////////////////// Profile Services /////////////////////////////////////////////

const createCandidatePersonalService = async (payload: TCanditateProfile, user: TUserPayload) => {

    const result = await prisma.candidatePersonal.upsert({
        where: {
            userId: user.id, // or another unique field to identify the record
        },
        update: {
            ...payload, // update with new payload
        },
        create: {
            ...payload, // create with payload if not exists
            userId: user.id,
        },
        include: {
            religion: true,
            user: true,
        },
    });
    return result;
};






const me = async (user: TUserPayload) => {

    const result = await prisma.user.findUnique({
        where: { email: user.email },
        select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            createdAt: true,
            candidatePersonal: {
                include: {
                    religion: true
                }
            }
        }
    })
    return result
}


// const createCertificate = async (user: TUserPayload, files: Express.Multer.File[], certNames: string[]) => {

//     console.log(user, files, certNames)
//     if (files.length !== certNames.length) {
//         throw new AppError(400, "Number of files and certificate names must match");
//     }


//     // const result = await prisma.certificate.createMany({
//     //     data: {
//     //         userId: user.id,
//     //         filePath: files.map(file => file.path),
//     //         certNames: certNames,
//     //     },
//     // });    


//     // return result; 
// }
//////////////////////////////// Profile Services //////////////////////////////////////////////////

export const UserService = {
    createCandidatePersonalService,
    me,
    // createCertificate
}



