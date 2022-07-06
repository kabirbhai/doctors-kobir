import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const Signup = () => {
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  let errorMassage;
  if (user || GoogleUser) {
    navigate("/home");
  }
  if (loading || GoogleLoading) {
    return <Loading />;
  }
  if (error || GoogleError) {
    errorMassage = error.message;
  }
  return (
    <section className="container mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row py-20 justify-evenly md:items-center">
        <div className="w-full lg:max-w-lg">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold text-center  mb-5 uppercase">
              Signup
            </h2>
            <form onSubmit={handleSignup} className="w-full">
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="input input-bordered w-full my-2"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered w-full my-2"
              />
              <div className="form-control w-full">
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="input input-bordered w-full my-2"
                />
                <label className="label">
                  <span className="label-text-alt">Forgot password?</span>
                </label>
              </div>
              {errorMassage}
              <input
                className="btn btn-secondary w-full"
                type="submit"
                value="SIGNUP"
              />
              <p className="text-center my-2">
                Already have an account?{" "}
                <Link className="text-secondary" to="/login">
                  Please Login
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

export default Signup;
