import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UploadImageModal from "../components/UploadImageModal";
import { GlobalState } from "../context";

function UploadImage() {
  const { openUploadModal, setOpenUploadModal } = useContext(GlobalState);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [images, setImages] = React.useState([]);

  const currentUserDetails = JSON.parse(localStorage.getItem("user"));

  const openUploadImageModalHandler = () => {};

  return (
    <>
      {openUploadModal && <UploadImageModal />}
      <div className="w-full min-h-screen flex flex-col justify-center">
        {images.length !== 0 ? (
          <div></div>
        ) : (
          <div>
            <div className="w-[50%] h-[200px] m-auto text-center">
              <p data-aos="fade-in" className="text-lg">
                You haven't posted anything
              </p>
              <button
                data-aos="fade-in"
                className="m-3 w-auto px-3 min-w-[120px] h-[40px] bg-[#00e0bf] rounded-md text-white"
                onClick={() => {
                  setOpenUploadModal(true)
                }}
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UploadImage;
