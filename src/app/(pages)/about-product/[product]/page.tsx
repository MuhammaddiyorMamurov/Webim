import Image from "next/image";

async function getData(id:string){
  const response = await fetch("https://dummyjson.com/products/"+id)
  const data = await response.json()

  return data;
}


async function AboutProduct({params}:{params: Promise<{product:string}>}) {
  const productId = (await params).product
  const data = await getData(productId)
  return (
    <div className="container flex flex-col items-center justify-center mt-10  border-6 border-violet-900">
      <h2 className="font-bold">{data.title}</h2>
      <p>{data.description}</p>

    </div>
  )
}

export default AboutProduct
