import gdax from 'gdax'

export async function getLevelOneOrderBookLTC() {

    const publicClient = new gdax.PublicClient('LTC-USD');

      try {        
          const bestBids = await publicClient.getProductOrderBook()

          console.log('best bids: ', bestBids)
      } catch(error) {
        console.log("Error:", error)
      }
    
}