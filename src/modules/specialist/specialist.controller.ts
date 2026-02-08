import { TUserPayload } from '../../types/user';
import { catchAsync } from './../../utils/catchAsync';
import { SpecialistService } from './specialist.service';
import { createSpecialistZodSchema, TCreateSpecialistInput } from './specialist.validation';


const createSpecialist = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    const file = req.files as Express.Multer.File[]

    const data = JSON.parse(req.body.data) as TCreateSpecialistInput

    const validation = createSpecialistZodSchema.parse(data)

    const result =  await SpecialistService.createSpecialist(validation, user, file)
 res.json({
    success: true, 
    message: "Specialist create successfull", 
    statusCode: 201, 
    data: result
 })
  
})




const getAllSpecialists = catchAsync(async (req, res) => {

    const user = req.user as TUserPayload 

    const result =  await SpecialistService.getAllSpecialists(req.query, user)

 res.json({
    success: true, 
    message: "Specialist get all successfull", 
    statusCode: 200, 
    data: result
 })
  
})

const editSpecialist = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result =  await SpecialistService.editSpecialist(id as string, req.body)

 res.json({
    success: true, 
    message: "Specialist edit successfull", 
    statusCode: 200, 
    data: result
 })
  
})

const deleteSpecialist = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result =  await SpecialistService.deleteSpecialist(id as string)

 res.json({
    success: true, 
    message: "Specialist delete successfull", 
    statusCode: 200, 
    data: result
 })
  
}) 

const verificationStatus = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result =  await SpecialistService.verificationStatus(id as string)

 res.json({
    success: true, 
    message: "Specialist verification successfull", 
    statusCode: 200, 
    data: result
 })
  
})

const getAllApprovedSpecialists = catchAsync(async (req, res) => {

    const result =  await SpecialistService.getaAllSpacialist()

 res.json({
    success: true, 
    message: "Specialist get all approved successfull", 
    statusCode: 200, 
    data: result
 })
  
})

const getSingleSpecialistById = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result =  await SpecialistService.getSingleSpecialistById(id as string)

 res.json({
    success: true, 
    message: "Specialist get single successfull",  
      statusCode: 200,  
      data: result   
 })
  
})


const unpublishSpecialist = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result =  await SpecialistService.verificationUnpublish(id as string)

 res.json({
    success: true, 
    message: "Specialist unpublish successfull", 
    statusCode: 200, 
    data: result
 })
  
})

export const SpecialistController = {
    createSpecialist, 
    getAllSpecialists,
    editSpecialist, 
      deleteSpecialist, 
      verificationStatus, 
      getAllApprovedSpecialists, 
      getSingleSpecialistById, 
      unpublishSpecialist
     
}