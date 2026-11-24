import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/Signup.css";
import { signIn } from "../utils/auth";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const message = signIn(form.email, form.password);
    if (message) {
      setError(message);
      return;
    }

    navigate("/dashboard");
  }
  return (
    <main className="auth">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-sub">
          Sign in to continue learning with Learn With Rama.
        </p>

        {/* Form Login */}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@mail.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your Password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit">Sign In</button>
        </form>

        {/* Link Registrasi */}
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}

export default SignIn;
