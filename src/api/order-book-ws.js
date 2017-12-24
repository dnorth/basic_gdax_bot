import gdax from 'gdax'

const isReady = (book) => book.asks.length > 0

export async function getOrderbookStreamLTC() {

    const orderbookSync = new gdax.OrderbookSync(['LTC-USD'])    

      try {
        
        orderbookSync.socket.on('message', async () => {
          const orderBook = await orderbookSync.books['LTC-USD'].state()

          if (isReady(orderBook)) {
            console.log('order book: ', orderBook)            
          }
          else {
            console.log('Warming up the order book...')
          }
        })
      } catch(error) {
        console.log("Error:", error)
      }
    
}