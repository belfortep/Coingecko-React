import React from 'react'
import CoinRow from './CoinRow'
const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']
export default function TableCoin({coins, search}) {

    const filteredCoins = coins.filter((coin)=>{
        return coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    })  //filtra si esta en el nombre o en su simbolo.

  return (
    <div>
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map((title, index)=>{
                            return <td key={index}>{title}</td>
                        })
                    }
                </tr>
            </thead>

            <tbody>
                {filteredCoins.map((coin, index)=>{
                    return <CoinRow key={index} coin={coin} index={index + 1}/>
                })}
            </tbody>
        </table>
    </div>
  )
}
