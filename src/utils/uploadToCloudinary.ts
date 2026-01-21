/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import cloudinary from "../config/cloudinary";

const uploadToCloudinary = (
  fileBuffer: Buffer,
  folder: string,
  resourceType: "image" | "raw"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) return reject(error);
        if (!result?.secure_url) {
          return reject(new Error("Cloudinary upload failed"));
        }
        resolve(result.secure_url);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

export default uploadToCloudinary;
