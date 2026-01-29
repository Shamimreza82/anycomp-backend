
import { TUserPayload } from "../../types/user";
import { catchAsync } from "../../utils/catchAsync";
import { UserService } from "./user.service";
import { UserProfileValidation } from "./user.validation";
// import { profileSchema } from "./user.validation";




////// Profile create /////////

const me = catchAsync(async (req, res) => {
  const user = req.user

  const result = await UserService.me(user as TUserPayload)

  res.status(201).json({
    status: true,
    message: "get my profile successfully",
    data: result
  })
})


const createCandidatePersonal = catchAsync(async (req, res) => {

  const user = req.user
  const result = await UserService.createCandidatePersonalService(req.body, user as TUserPayload)
  res.status(201).json({
    status: true,
    message: "Profile created successfully",
    data: result
  })
})


// const createCertificate = catchAsync(async (req, res) => {
//   const files = req.files;

//   const certNames = Array.isArray(req.body.certNames) ? req.body.certNames : req.body.certNames?.split(","); // if sent as comma-separated string
//   const user = req.user


//   const result = await UserService.createCertificate(user as TUserPayload, files as Express.Multer.File[], certNames)

//   res.status(201).json({
//     status: true,
//     message: "cartificate created successfully",
//     data: result
//   })
// })

////// Profile create /////////

export const UserController = {
  createCandidatePersonal,
  me,
  // createCertificate
}





