import UserCard from "./UserCard"

function UserList( { users }) {
  return (
    <div className="grid">
      {users.map(u => (
        <UserCard 
          key={u.email} //add a stable key
          name={u.name}
          email={u.email}
          role={u.role} 
          highlight={u.role === "Admin"} //example rule
        />
      ))}
    </div>
  )
}

export default UserList;