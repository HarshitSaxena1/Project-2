
import styles from "./Button.module.css";

const Button = (props) => {

const {isOutline,icons,text}=props;

  return (
    <button className={isOutline ? styles.outline_btn :styles.primary_btn}>
    {icons}
{text}
    </button>
  )
}

export default Button;