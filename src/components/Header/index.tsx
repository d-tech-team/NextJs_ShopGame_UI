import Banner from './Banner'
import styles from './index.module.scss'
import Navbar from './Navbar'

export default () => {
    return (
        <div className={styles.header}>
              <Navbar/>
        </div>
    )
}