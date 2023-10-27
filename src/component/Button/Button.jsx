import { MdMessage } from "react-icons/md";
import style from "./Button.module.css";
const Button = (props) => {
  const {isOutline, icon, text} = props;
  return (
    <button className={ props.isOutline ? style.outline_btn : style.primary_btn}>
      {/* <MdMessage/> */}
      {props.icon}
      {props.text}
    </button>
  )
}

export default Button
 