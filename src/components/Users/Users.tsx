import User from "../User/User";
import { type User as IUser} from "@/src/model/interfaces";

async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data; 
}

async function Users() {
    const users: IUser[] = await getData(); 

    return (
        <div className="container mt-5 mb-3">
            <ul className="flex flex-col gap-4">
                {users.map((user: IUser) => (
                    <User key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
}

export default Users;
