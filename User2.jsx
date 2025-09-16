export default function User2({ user2 }) {
  console.log(user2);
  const { id, name, username, email, address, phone } = user2;
  return (
    <div className="card2">
      <h4>ID: {id} </h4>
      <h4>Name: {name} </h4>
      <h4>Username: {username} </h4>
      <h4>Email Id: {email} </h4>

      <h4>Phone:{phone} </h4>
      <h4>Address:{address.city} </h4>
    </div>
  );
}
