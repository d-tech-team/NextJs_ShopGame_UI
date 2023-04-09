
import styles from './index.module.scss'

export default ({ code = 'HHSls2Y', description = 'description', thumbnail = '/images/thumbnail.gif', price = 10000, discount = 10 }) => {
    return <div className={styles.Account}>
        <img src={thumbnail} alt="thumbnail" />
        <ul className='mt-3'>
            <li>
                Mức rank : Đồng
            </li>
            <li>
                Đăng ký : Trắng thông tin
            </li>
        </ul>
        <h6>{price - ((price * discount) / 100)} đ</h6>
        <div className={styles.Account__price}>
            <p>{price} đ </p>
            <span>{discount}%</span>
        </div>
        <div className={styles.Account__code}>
            #{code}
        </div>
    </div>
}