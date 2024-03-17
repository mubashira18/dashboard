import React from "react";

export const Login = () => {
  return (
    <div>
      <div>
        <h1>Board.</h1>
      </div>
      <div>
        <div>
          <div>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
            <div>
              <button>Sign in with Google</button>
              <button>Sign in with Apple</button>
            </div>
          </div>
          <div>
            <label for="Email">Email address</label>
            <input type="email" id="Email" placeholder="enter your email" />
            <br />
            <label for="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="enter your password"
            />
            <br />
            <a href="">Forget Password</a>
            <br />

            <button>Sign In</button>
          </div>
        </div>
        <p>
          Don't have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
};
