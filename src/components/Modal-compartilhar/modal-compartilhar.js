import "./modal-compartilhar.css";
import React from "react";
import { CgClose } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContentCopy } from "react-icons/md";
const ModalCompartilhar = (props) => {
  const { HandleModal } = props;

  return (
    <div className="modalBackground3">
      <div className="modalContainer4">
        <div className="fadeIn">
          <div className="navmodal">
            <p className="titlemodalCompartilhar">Compartilhar</p>

            <CgClose
              size={22}
              color="#532E1C"
              onClick={() => {
                HandleModal(false);
              }}
              id="cancelBtn"
              className="iconmodal"
            />
          </div>
          <div className="icons">
            <div className="zap">
              <BsWhatsapp size={40} color="#006400" />
              <div className="nomes-icons1">Whatsapp</div>
            </div>
            <div className="zap">
              <BsFacebook size={40} color="#3b5998" />
              <div className="nomes-icons2">Facebook</div>
            </div>
            <div className="zap">
              <AiFillTwitterCircle size={48} color="#00acee" />
              <div className="nomes-icons3">Twitter</div>
            </div>
            <div className="zap">
              <HiOutlineMail size={45} color="#dd4b39" />
              <div className="nomes-icons4">E-mail</div>
            </div>
          </div>
          <div className="final">
            <input
              type="email"
              className="copy"
              placeholder="https://apatb.netlify.app"
            />
            <MdOutlineContentCopy className="icon-icon" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompartilhar;
