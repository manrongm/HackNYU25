import React from "react";
import LoginBox from "../components/loginForm";

export default function Login() {
  return (
    <>
      <div className="flex w-full h-screen justify-center bg-gray-400">
        <div className="bg-white container h-97 flex items-center justify-center border border-solid border-black m-20 rounded-md">
          <LoginBox />
        </div>
      </div>
    </>
  );
}
