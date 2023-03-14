import styles from './index.module.scss'


export default ({ thumbnail = '/images/thumbnail.gif', title = 'Category', quanlity = '999' }) => {
    return (
        <div className={styles.category}>
            <img src={thumbnail} alt='thumbnail' />
            <h6>{title}</h6>
            <p> Số tài khoản: {quanlity} </p>
        </div>
    )
}