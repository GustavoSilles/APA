import React from "react";
import "./modal2.css";
import Comments from "../Comments/comments";
import { CgClose } from "react-icons/cg";

const Modal2 = ({ setOpenModal }) => {
  return (
    <>
      <div className="modalBackground2">
        <div className="modalContainer">
          <div className="fadeIn">
            <CgClose
              size={22}
              color="#532E1C"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
              className="iconmodal"
            />
            <div> 
              <Comments
                commentsUrl="http://localhost:3004/Comments"
                currentUserId="1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal2;
