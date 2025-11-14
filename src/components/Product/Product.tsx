import {type Product } from "@/src/model/interfaces"
import Link from "next/link"

interface Props{
    product:Product
}

function Product({product}:Props) {
  return (
    <li className="border-2 border-black-700 rounded-2xl pl-4">
      <Link href={`/about-product/${product.id}`}>
      <h2 className="text-center font-bold ">{product.title}</h2>
      <p className="text-center">{product.description}</p>
      </Link>
    </li>
  )
}

export default Product
