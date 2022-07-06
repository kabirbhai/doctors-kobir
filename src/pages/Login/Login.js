import React from "react";
import { Link } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    console.log(user);
  }
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    console.log(error.message);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="container mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div className="w-full lg:max-w-lg">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold text-center  mb-5 uppercase">
              Login
            </h2>
            <form onSubmit={handleLogin} className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="input input-bordered w-full my-2"
              />
              <div class="form-control w-full">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full my-2"
                />
                <label class="label">
                  <span class="label-text-alt">Forgot password?</span>
                </label>
              </div>
              <input
                className="btn btn-secondary w-full"
                type="submit"
                value="LOGIN"
              />
              <p className="text-center my-2">
                Not have an account?{" "}
                <Link className="text-secondary" to="/signup">
                  Create New Account
                </Link>
              </p>
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary w-full my-1"
              >
                Continue with Google
              </button>
              <button className="btn btn-primary w-full my-1">
                Continue with Facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
