import React from 'react'
import Coins from '../Coins'
import styles from './CoinList.module.css'

export default function CoinList({ filteredCoins }) {
    return (
      <div className={styles.coinList}>
        {filteredCoins.map(coin => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              image ={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    );
  }
  

