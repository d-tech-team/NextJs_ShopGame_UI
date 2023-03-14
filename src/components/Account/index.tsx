
import styles from './index.module.scss'

export default ({ code = 'HHSls2Y', description = 'description', thumbnail = '/images/thumbnail.gif', price = 10000, discount = 10 }) => {
    return <div className={styles.Account}>
        <img src={thumbnail} alt="thumbnail" />
        <p className='mt-3'>{description}</p>
        <h6>{price - ((price * discount) / 100)} đ</h6>
        <p>{price} đ<span>{discount}%</span></p>
        <div className={styles.Account__code}>
            #{code}
        </div>
    </div>
}