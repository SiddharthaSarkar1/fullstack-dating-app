import cloudinary from "../config/cloudinary.js";
import User from "../models/User.model.js";

export const updateProfile = async (req, res) => {
  try {
    const { image, ...otherData } = req.body;

    const updatedData = otherData;

    if (image) {
      //base64 format
      if (image.startsWith("data:image")) {
        try {
          const uploadResponse = await cloudinary.uploader.upload(image);
          uploadedData.image = uploadResponse.secure_url;
        } catch (uploadError) {
          console.log("Error uploading image", uploadError);
          return res
            .status(400)
            .json({ success: false, message: "Error uploading image" });
        }
      }
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData, {
      new: true,
    });

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.log("Error in updateProfile", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
