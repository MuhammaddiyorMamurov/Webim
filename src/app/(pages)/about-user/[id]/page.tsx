
async function getData(id:string){
  const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
  const data = await response.json()
 
  return data;
}


async function AboutUser({params}:{params: Promise<{id:string}>}) {
  const userId = await params

  const data =  await getData(userId.id )

  return (
    <div className="container flex flex-col items-center justify-center mt-10  border-6 border-violet-900">
      <h2 className="font-bold">{data.name}</h2>
      <p>{data.username}</p>
      <p>{data.email}</p>

    </div>
  )
}

export default AboutUser
