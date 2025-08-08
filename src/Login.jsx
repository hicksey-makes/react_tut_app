import {StrictMode, useId} from 'react';
import {createRoot} from 'react-dom/client';

export default function Login() {
  const emId = useId();
  const pasId = useId();

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
  }

  return (
    <div className="profile-wrapper">
      <h1>Login</h1>
      <p className="text-dimmed">Login to SuperM</p>

      <form onSubmit={handleFormSubmit}>
        <label className="label" htmlFor={emId}>Email<span className="required">*</span>:</label>
        <input type="email" id={emId} placeholder="Email" name="email" autoComplete="email" className="input"  />

        <label className="label" htmlFor={pasId}>Password<span className="required">*</span>:</label>
        <input type="password" id={pasId} placeholder="Password" name="password" autoComplete="current-password" className="input"  />

        <div className="form-buttons">
          <input type="submit" value="Login" className="btn"  />
        </div>
      </form>
    </div>
  );
}
