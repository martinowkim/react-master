import { useState } from "react"

function LoginForm() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ submittedEmail, setSubmittedEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedEmail(email);
    setPassword("");
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
          <input id="email" type="email" 
                  value={email} 
                  onChange={ e => {setEmail(e.target.value); setSubmittedEmail(""); }}
                  required/>
        <label htmlFor="pw">password:</label>
          <input id="pw" type="password" 
                  value={password} 
                  onChange={ e => {setPassword(e.target.value); setSubmittedEmail(""); }} required/>

        <button type="submit" disabled={!(email.includes("@") && password.length > 0)}>Submit</button>
      </form>
      { submittedEmail && <p>Submitted: {submittedEmail}</p> }
    </div>
  )
}

export default LoginForm;