import {type User } from "@/src/model/interfaces"
import Link from "next/link"

interface Props{
    user:User
}

function User({user}:Props) {
  return (
    <li className="border-2 border-black-700 rounded-2xl pl-4">
      <Link href={`/about-user/${user.id}`}>
      <h2 className="text-center font-bold ">{user.name}</h2>
      <p className="text-center">{user.username}</p>
      <p className="text-center">Phone:{user.phone}</p>
      
      </Link>
    </li>
  )
}

export default User
