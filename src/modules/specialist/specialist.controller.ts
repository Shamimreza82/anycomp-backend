import { TUserPayload } from '../../types/user';
import { catchAsync } from './../../utils/catchAsync';
import { SpecialistService } from './specialist.service';
const createSpecialist = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    console.log(user)

    const result =  await SpecialistService.createSpecialist(req.body, user)

 res.json({
    success: true, 
    message: "Specialist create successfull", 
    statusCode: 201, 
    data: result
 })
  
})


export const SpecialistController = {
    createSpecialist
}