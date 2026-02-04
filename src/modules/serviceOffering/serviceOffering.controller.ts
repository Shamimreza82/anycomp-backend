import { TUserPayload } from '../../types/user';
import { catchAsync } from '../../utils/catchAsync';
import { ServiceOfferingService } from './serviceOffering.service';




const createServiceOffering = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    console.log(user)

    const result =  await ServiceOfferingService.createServiceOffering(req.body, user)

 res.json({
    success: true, 
    message: "Service offering create successfull", 
    statusCode: 201, 
    data: result
 })
  
})

const getMyServiceOffering = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    console.log(user)

    const result =  await ServiceOfferingService.getMyServiceOffering(user)

 res.json({
    success: true, 
    message: "get my all offerssuccessfull", 
    statusCode: 201, 
    data: result
 })
  
})



export const ServiceOfferingController = {
    createServiceOffering, 
    getMyServiceOffering
}