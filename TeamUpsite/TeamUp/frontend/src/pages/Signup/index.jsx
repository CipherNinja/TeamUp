import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Typewriter } from 'typewriting-react';
import { Img, Line, Text } from "components";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  const handleFormSubmit = (e) => {
    // e.preventDefault();
    //form submit action 
    //navigate to home after authentication
    console.log(formData);
  }
  const googleSignIn = () => {
    //google sign in
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 fixed h-[100vh] flex flex-col font-epilogue  justify-start mx-auto   w-full">
        <div className="flex md:flex-col flex-row md:gap-2.5 gap-[29px] sm:gap-[] sm:gap-x-[] sm:gap-y-[] items-start justify-between md:m-[] max-w-[1404px] md:mb-[0] mb-[7px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:flex-row md:gap-10 gap-[205px] md:items-center md:justify-center justify-start w-[52%] md:w-full">
            <Img
              className="sm:h-[100px] h-[111px] md:h-auto object-cover w-[18%] sm:w-[30%] -ml-44"
              src="images/img_teamup1.png"
              alt="teamupOne"
            />
            <Text
              className="md:leading-[40px] leading-[80.00px] md:ml-[0] ml-[54px] text-7xl sm:text-[28px] md:text-[38px] text-white-A700 tracking-[-2.00px]"
              size="txtEpilogueExtraBold72"
            >
              <>
                {/* We Help <br />
                To Build Your <br />
                Dream Project */}
                <Typewriter words={["We will help \n you to build \n your dream Project"]} nextWordDelay={2000} />
              </>
            </Text>
          </div>
          <div className="font-notosans sm:h-[670px] md:h-[733px] h-[936px] md:mt-0 mt-10 relative w-[46%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[336px] sm:h-1/2 h-full justify-start m-auto w-full">
              <div className="bg-gradient7  h-[302px] mr-[343px] rounded-[50%] w-[302px]"></div>
              <Img
                className="h-[298px] sm:h-auto sm:hidden md:ml-[0] ml-[354px] object-cover rotate-[29deg] w-[46%] md:w-full"
                src="images/img_ellipse2_298x291.png"
                alt="ellipseTwo"
              />
            </div>
            <div className="absolute bg-gradient1  flex flex-col h-max inset-y-[0] items-center md:justify-center justify-start sm:m-[] sm:mt-[-30px] my-auto outline outline-[1px] md:p-2 p-[38px] sm:p-[] sm:pb-2.5 sm:pt-px sm:px-2.5 right-[9%] rounded-[20px] shadow-bs w-3/4 sm:w-[90%] white_A700_99_black_900_99_border3">
              <div className="flex flex-col sm:gap-[3px] gap-[53px] md:gap-[] md:gap-x-[] md:gap-y-[] items-center justify-start mb-2 mt-[58px] w-auto sm:w-full">
                <div className="flex flex-col sm:gap-2.5 gap-4 md:items-center items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col sm:gap-2.5 gap-3.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="sm:font-extrabold text-4xl sm:text-[22px] md:text-[34px] text-white-A700 w-auto"
                        size="txtNotoSansSemiBold36"
                      >
                        Signup
                      </Text>
                      <Text
                        className="sm:text-[10px] text-base text-white-A700 w-auto"
                        size="txtNotoSansMedium16"
                      >
                        Just some details to get you in.!
                      </Text>
                    </div>
                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-[25px] md:items-center items-start justify-start w-auto sm:w-full  ">
                      <input
                        type="text"
                        className=" rounded-xl leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent  h-14" wrapClassName="border border-solid border-white-A700 pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Username"
                      />
                      <input
                        type="email"
                        className=" rounded-xl leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent  h-14" wrapClassName="border border-solid border-white-A700 pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                      <div className="flex flex-col gap-3 sm:gap-3.5 items-start justify-start w-full md:w-full">
                        <input
                          type="password"
                          className=" rounded-xl leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent  h-14" wrapClassName="border border-solid border-white-A700 pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your Password"
                        ></input>
                        <input
                          type="password"
                          className=" rounded-xl leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent  h-14" wrapClassName="border border-solid border-white-A700 pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your Password"
                        ></input>
                      </div>
                      <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                        <button type="submit" className="bg-gradient8  cursor-pointer font-semibold leading-[normal] py-[13px] rounded-[12px] text-center text-white-A700 text-xl w-[400px] sm:w-full">
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center  w-full sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-5 sm:gap-[5px] items-center justify-start w-auto sm:w-full">
                      <Line className="bg-gray-800 h-0.5 w-[43%]" />
                      <Text
                        className="text-base text-gray-800"
                        size="txtNotoSansMedium16Gray800"
                      >
                        Or
                      </Text>
                      <Line className="bg-gray-800 h-0.5 w-[43%]" />
                    </div>
                    <div onClick={googleSignIn} className=" shadow flex flex-row gap-[18px] items-center justify-center w-full  rounded-xl p-3   ">
                      <Img
                        className="h-[42px] w-[42px]"
                        src="images/img_devicongoogle.svg"
                        alt="devicongoogle"
                      />
                      <Text className="text-white-A700" size="txtNotoSansMedium16">Login With google</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="common-pointer text-base text-white-A700 w-auto"
                    size="txtNotoSansMedium16"
                    onClick={() => navigate("/")}
                  >
                    Already Registered? <span className="text-xl ">Login</span>
                  </Text>
                  <div className="  flex flex-row gap-[31px] items-center justify-between px-1.5 py-1 rounded-md w-[400px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 w-auto"
                      >
                        <Text size="txtNotoSansRegular16">
                          Terms & Conditions
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 w-auto"
                      >
                        <Text size="txtNotoSansRegular16">Support</Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtNotoSansRegular16"
                      >
                        Customer Care
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
