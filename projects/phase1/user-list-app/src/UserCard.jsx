function UserCard( { name, email, role, highlight = false }) {
  const border = highlight ? "2px solid #3b82f6" : "1px solid gray";
  return (
    <div style={{ border, padding: "10px", borderRadius: "6px"}}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  )
}

export default UserCard;