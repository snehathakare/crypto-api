import React from 'react'
import styles from './Coins.module.css'

const Coins = ({name,price,priceChange,symbol,image}) => {
    return (
        <div className={styles.coin}>
            <div className={styles.coin_header}>
                <img className={styles.coin_info} src={image} alt={name}/>
                <h2 className={styles.coin_info}>{name}</h2>
                <p className={styles.coin_text, styles.coin_info}>{symbol}</p>
                <p className={styles.coin_info}>{price.toFixed(3)}</p>
                {priceChange < 0 ? 
                    (<p className={styles.coin_percent, styles.red, styles.coin_info}>{priceChange.toFixed(2)}%</p>) 
                    : 
                    (<p className={styles.coin_percent, styles.green, styles.coin_info}>{priceChange.toFixed(2)}%</p>)
                }
            </div>
     
        </div>
    )
}

export default Coins
