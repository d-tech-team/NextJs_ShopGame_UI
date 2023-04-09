import { RotateLoader } from "react-spinners";
import styles from './index.module.scss'

export default ()=> <div className={`${styles.loading} min-vh-100 h-100 d-flex align-items-center justify-content-center`}>
    <RotateLoader size={5} color="blue"/>
</div>