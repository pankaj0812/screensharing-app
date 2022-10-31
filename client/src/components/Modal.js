import { useState } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

const Modal = ({ url }) => {
    const [image, setImage] = useState("");
    return (
        <div className='popup'>
            <div className='popup-ref'>{image && <img src={image} alt='' />}</div>
        </div>
    );
};

export default Modal;