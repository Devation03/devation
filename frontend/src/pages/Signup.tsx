import { Link } from "react-router-dom";
import { Logo } from "../components/logo";
import { Text } from "../components/ui/typography";
import { useState } from "react";
import axios from "axios";

type payloadType = {
  name: string;
  email: string;
  password_virtual: string;
  password_confirmation: string;
};

const Signup = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password_virtual: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const signup = async (payload: payloadType) => {
    const { data: response } = await axios.post(
      "http://localhost:4000/api/v1/sign-up",
      payload
    );
    return response.data;
  };

  return (
    <div className="w-full h-screen flex flex-col gpa-4 bg-stone-100">
      <Logo />
      <div className="w-full flex h-[90vh] items-center justify-center">
        <div className="w-fit shadow-md h-[60%] p-10 rounded-md flex flex-col justify-evenly items-center gap-4 border bg-white">
          <Text text="Create your account" size="2xl" />
          <input
            placeholder="Name..."
            className="w-96 h-10 focus:outline-double shadow-inner border rounded-md p-4 text-md"
            type="text"
            name="name"
            onChange={handleChange}
          />
          <input
            placeholder="Email..."
            className="w-96 h-10 focus:outline-double border shadow-inner rounded-md p-4 text-md"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password..."
            className="w-96 h-10 focus:outline-double border shadow-inner rounded-md p-4 text-md"
            type="password"
            name="password_virtual"
            onChange={handleChange}
          />
          <input
            placeholder="Confirm password..."
            className="w-96 h-10 focus:outline-double border shadow-inner rounded-md p-4 text-md"
            type="password"
            name="password_confirmation"
            onChange={handleChange}
          />
          <button
            onClick={() => signup(payload)}
            className="w-96 h-10 rounded-md p-4 flex shadow-sm items-center justify-center hover:bg-gray-700 bg-gray-900 "
          >
            <Text text="Sign up" size="sm" className="text-white" />
          </button>
          <div className="flex gap-1">
            <Text text="Already have an account?" size="sm" />
            <Link to="/signin">
              <Text
                text="Sign in"
                size="sm"
                className="text-blue-500 hover:underline"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
