import { TUserPayload } from '../../types/user';
import { catchAsync } from '../../utils/catchAsync';
import { MasterService } from './masterService.service';




const createMasterService = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    console.log(user)

    const result =  await MasterService.createMasterService(req.body, user)

 res.json({
    success: true, 
    message: "Master Service  Create successfull", 
    statusCode: 201, 
    data: result
 })
  
})


export const MasterServiceController = {
    createMasterService
}