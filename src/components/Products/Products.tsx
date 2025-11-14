import Product from "../Product/Product";
import { type Product as IProduct} from "@/src/model/interfaces";

async function getData(){
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
  
    return data;
  }

async function Products() {
    const {products} = await getData()
  return (
    <div className="container mt-5 mb-3">
        <ul className="flex flex-col gap-4">
        {products.map((product: IProduct)=>{
            return <Product key={product.id} product={product}/>
        })}
    </ul>
    </div>
  )
}

export default Products
