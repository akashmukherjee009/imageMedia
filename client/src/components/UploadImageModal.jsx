import React, { useContext, useState } from "react";
import { GlobalState } from "../context";
import { useParams } from "react-router-dom";
// import { storage } from "../firebaseConfig";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Loader from "./Loader";

function UploadImageModal() {
  const { openUploadModal, setOpenUploadModal } = useContext(GlobalState);
  const closeUploadImageModalHandler = () => {
    setOpenUploadModal(false);
  };

  const [files, setFiles] = useState(null);
  const [fileNames,  setFileNames] = useState([]);
  const [loader, setLoader] = useState(false)
  const [filename, setFileName] = useState("")

  const handleImagesUpload = (e) => {
    if (e.target.files.length <= 5) {
      setFiles(e.target.files);
    } else {
      alert("You can upload 5 images at a time");
    }
  };

  console.log(files);

  const { id } = useParams();
  console.log(id);

//   const uploadImages = async () => {
//     setLoader(true)
//     if (!files || files.length === 0) {
//       alert("Please select some images");
//       setLoader(false)
//       return;
//     }
//     const imageUrls = [];
  
//     try {
      
//       for (let i = 0; i < files.length; i++) {
//         const currentFile = files[i];
//         const imageRef = ref(storage, `images/${currentFile.name}`);
//         const uploadCurrentImage = await uploadBytes(imageRef, currentFile);
//         const downloadUrl = await getDownloadURL(uploadCurrentImage.ref);
//         imageUrls.push(downloadUrl);
//         setFileName(currentFile.name)
//       }
//       console.log("Uploaded Image URLs:", imageUrls);
//       setLoader(false)
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-[90%] md:w-[70%] lg:w-[50%]">
          <h2 className="text-2xl font-bold mb-4">Upload Images</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="w-full h-[200px] border-2 border-dashed border-[#00e0bf] flex flex-col justify-center items-center"
              >
                {fileNames}
              </label>
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={handleImagesUpload}
                className="hidden w-full rounded border-2 border-gray-200 p-2 bg-transparent"
                multiple
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={closeUploadImageModalHandler}
              >
                Cancel
              </button>
              <button
                type="button"
                // onClick={uploadImages}
                className="px-4 py-2 bg-[#00e0bf] text-white rounded-md flex gap-2 justify-center items-center"
              >
                {loader && <Loader />}
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UploadImageModal;
