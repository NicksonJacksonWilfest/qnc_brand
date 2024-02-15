import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


function Contacts() {
    return (
        <>
            <h1>This is contacts</h1>


            {/*social media tags*/}

            < FaInstagram />
            < FaFacebook />
            < FaTiktok />
            < FaSquareXTwitter />
            < FaWhatsapp />
            <IoCall/>


        </>
    )
}
export default Contacts