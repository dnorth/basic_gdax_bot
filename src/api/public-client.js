import gdax from 'gdax'

const publicClient = new gdax.PublicClient()

export async function getProducts() {
    
      try {
        const products = await publicClient.getProducts();
        
        console.log(products);
      } catch(error) {
        console.log(error)
      }
    
}
