import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Img, Line, Text } from "components";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";



const LoginPage = () => {

  const [formData, setFormData] = useState({

    email: '',
    password: ''
  });


  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = (e) => {
    // e.preventDefault()

    console.log(formData);

  }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const navToSignup = () => {
    navigate('/signup');
  }

  const navToForgotPassword = () => {
    navigate("/forgotpassword");
  }

  const googleSignIn = () => {
    //google signin s
  }
  return (
    <>
      <div className="bg-black-900 fixed flex flex-col h-[100vh] font-epilogue items-center justify-end mx-auto pl-[5px] pt-[5px] w-full">
        <div className="flex md:flex-col flex-row gap-[17px] md:gap-px sm:h-full items-center justify-between  mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:flex-row md:gap-20 sm:h-[] md:items-center md:justify-center justify-start sm:justify-start w-[51%] md:w-full">
            <Img
              className=" sm:block md:flex sm:h-[100px] h-[111px] md:h-auto md:items-end sm:items-start sm:m-[] md:m-[] md:ml-[0] sm:mt-[] object-cover sm:w-2/5 w-[19%]"
              src="images/img_teamup1.png"
              alt="teamupOne"
            />
            <Text
              className="  md:font-medium sm:font-normal sm:leading-[40.00px] md:leading-[40px] leading-[80.00px] sm:m-[] md:m-[] md:ml-[0] ml-[98px] sm:mt-0 mt-[116px] md:mt-px md:no-underline text-7xl sm:text-[28px] md:text-[38px] md:text-center text-white-A700 tracking-[-2.00px] sm:w-1/2"
              size="txtEpilogueExtraBold72"
            >

              We’re Help <br />
              To Build Your <br />
              Dream Project

            </Text>
            <Img
              className="h-[317px] sm:h-auto md:hidden md:ml-[0] ml-[42px] mr-14 mt-16 object-cover w-[47%] md:w-full"
              src="images/img_istockphoto131.png"
              alt="istockphoto131"
            />
          </div>
          <div className="sm:flex sm:flex-col font-notosans md:h-[740px] sm:h-[936px] h-[937px] sm:items-center sm:justify-center sm:m-[] sm:mt-[] sm:p-[] sm:pl-2.5 relative w-[49%] md:w-full">
            <div className="flex flex-col md:flex-row md:gap-10 gap-[336px] h-full md:items-center md:justify-center justify-start m-auto sm:w-[70%] w-full">
              <div className="md:absolute bg-gradient4  md:block md:cursor-pointer md:flex-col h-[302px] md:items-start md:justify-end md:m-[] md:mr-[289px] mr-[389px] md:mt-[100px] opacity-op rounded-[50%] w-[302px]"></div>
              <Img
                className="h-[298px] md:h-auto md:hidden md:ml-[0] ml-[420px] object-cover opacity-op rotate-[29deg] w-2/5 sm:w-full"
                src="images/img_ellipse2_298x270.png"
                alt="ellipseTwo"
              />
            </div>
            <div className="absolute bg-gradient1  sm:block flex flex-col sm:h-[95%] items-center sm:justify-center justify-start sm:m-[] sm:ml-[] opacity-100 outline outline-[1px] p-10 md:p-2.5 right-[9%] rounded-[20px] shadow-bs top-[4%] md:w-3/5 w-[70%] sm:w-[90%] white_A700_99_black_900_99_border2">
              <div className="flex flex-col md:gap-10 gap-[101px] sm:h-[70%] items-center justify-start mb-[7px] mt-[57px] w-auto sm:w-full">
                <div className="flex flex-col gap-[47px] sm:gap-[7px] items-start justify-start w-auto sm:w-full">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-[9px] items-start justify-start sm:m-[] sm:mt-[-50px] w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto gap-5">
                      <Text
                        className="text-4xl sm:text-[25px] md:text-[34px] text-white-A700 w-auto"
                        size="txtNotoSansSemiBold36"
                      >
                        Login
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtNotoSansMedium16"
                      >
                        Glad you’re back.!
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row w-full border-white-A700 border-[1px] rounded-xl justify-center align-middle">
                        <input
                          name="email"
                          onChange={handleInputChange}
                          value={formData.email}
                          placeholder="Email"
                          className=" border-none leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent border-2 rounded h-14"
                          wrapClassName="pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full sm:w-full">
                        <div className="flex flex-row w-full border-white-A700 border-[1px] rounded-xl justify-center align-middle">
                          <input
                            name="password"
                            placeholder="Password"
                            className=" border-none leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent h-14"
                            wrapClassName=" flex px-4 py-[13px] rounded-[12px] w-[400px] sm:w-full"
                            value={formData.password}
                            onChange={handleInputChange}
                            type={passwordVisible ? 'text' : 'password'}
                          />
                          <IconButton onClick={togglePasswordVisibility} className="p-3 pt-4" style={{ color: "white", border: "none" }} >
                            {passwordVisible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </div>

                        <div className="flex flex-row gap-1 items-center justify-start w-auto">

                          <input
                            className="rounded-l"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtNotoSansMedium16"
                          >
                            Remember me
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-center w-auto sm:w-full">
                        <button type="submit" className="bg-gradient5  cursor-pointer font-semibold leading-[normal] py-[13px] rounded-[12px] text-center text-white-A700 text-xl w-[400px] sm:w-[70%]">
                          Login
                        </button>
                        <Text
                          className="common-pointer text-base text-white-A700 w-auto"
                          size="txtNotoSansMedium16"
                          onClick={navToForgotPassword}
                        >
                          Forgot password ?
                        </Text>
                      </div>
                    </div>
                  </form>
                  <div className="flex flex-col gap-3 items-center justify-center md:ml-[0]  w-full sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-5 sm:gap-[0] items-center justify-start w-auto sm:w-full">
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
                    onClick={navToSignup}
                  >
                    Don’t have an account ? <b className="text-xl"> Signup </b>
                  </Text>
                  <div className=" flex flex-row gap-[31px] items-center justify-between px-1.5 py-1 rounded-md w-[400px] sm:w-full">
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

export default LoginPage;
