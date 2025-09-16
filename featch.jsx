import { use } from "react";
import User2 from "./User2";

export default function User({ fetchUser }) {
  const user = use(fetchUser);
  // console.log(user);

  return (
    <div className="card">
      <h2>User: {user.length}</h2>
      {user.map((user2) => (
        <User2 key={user2.id} user2={user2}></User2>
      ))}
    </div>
  );
}
