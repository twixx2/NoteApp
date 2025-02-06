import back from "../../assets/icons/back.svg";
import close from "../../assets/icons/close.svg";
import search from "../../assets/icons/search.svg";


const Button = ({ type, showSearch, onClick }) => {

    if (!showSearch) {
        return;
    }
    return (

        <button onClick={onClick}>
            {
                type === 'close' ? <img src={close} alt="" />
                    : type === 'search' ?
                        <img src={search} alt="" /> :
                        <img src={back} alt="" />
            }
        </button>

    );
}
export default Button;