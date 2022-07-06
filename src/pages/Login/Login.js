import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// pages
import Loading from "../shared/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, googleUser, from]);
  let errorMassage;

  if (loading || googleLoading) {
    return <Loading />;
  }
  if (error || googleError) {
    errorMassage = error.message;
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
              <label className="label p-1">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full mb-2"
              />
              <div className="form-control w-full">
                <label className="label p-1 ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full mb-2"
                />

                <label className="label">
                  <span className="label-text-alt">Forgot password?</span>
                </label>
                <p className="text-red-600">{errorMassage}</p>
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
              <div className="divider">OR</div>
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
