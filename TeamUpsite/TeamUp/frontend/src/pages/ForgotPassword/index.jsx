import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex sm:flex-col md:flex-col flex-row font-epilogue sm:gap-5 md:gap-5 items-start mx-auto pl-5 pt-5 w-full">
        <Img
          className="md:block md:flex-col sm:h-[100px] h-[111px] md:h-[130px] sm:items-center sm:justify-center ml-1 md:ml-[0] object-cover md:w-1/5 w-[10%] sm:w-[30%]"
          src="images/img_teamup1.png"
          alt="teamupOne"
        />
        <Text
          className="md:block md:flex-col sm:hidden md:items-center md:justify-center leading-[80.00px] md:m-[] md:mb-5 ml-2.5 md:ml-80 sm:ml-[0] sm:mt-0 md:mt-[-140px] mt-[331px] md:text-5xl text-7xl md:text-center text-white-A700 tracking-[-2.00px]"
          size="txtEpilogueExtraBold72"
        >
          <>
            We’re Help <br />
            To Build Your <br />
            Dream Project
          </>
        </Text>
        <div className="md:block md:flex-row font-notosans md:h-[590px] h-[964px] md:items-end md:justify-center md:m-[] md:ml-[0] ml-[18px] sm:mt-0 md:mt-[-50px] mt-[42px] md:px-5 relative w-[46%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[364px] h-full justify-start m-auto w-full">
            <div className="bg-gradient  h-[302px] mr-[340px] md:opacity-op rounded-[50%] w-[302px]" />
            <Img
              className="h-[298px] md:h-auto md:ml-[0] ml-[344px] object-cover md:opacity-op rotate-[29deg] w-[298px]"
              src="images/img_ellipse2.png"
              alt="ellipseTwo"
            />
          </div>
          <div className="absolute bg-gradient1  flex flex-col md:h-[90%] items-center justify-start outline outline-[1px] p-10 sm:px-5 right-[9%] rounded-[20px] shadow-bs top-[5%] w-3/4 md:w-[65%] white_A700_99_black_900_99_border">
            <div className="flex flex-col md:gap-10 gap-[372px] sm:gap-[60px] items-center justify-start mb-[7px] mt-[57px] w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col sm:gap-5 items-start justify-start w-auto">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                      size="txtNotoSansSemiBold36"
                    >
                      Forgot Password ?
                    </Text>
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtNotoSansMedium16"
                    >
                      Please enter you’re email
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto sm:w-full">
                    <input
                      name="email"
                      placeholder="example@mail.com"
                      className=" rounded-xl leading-[normal] p-3 placeholder:text-white-A700 text-left text-white-A700 text-xl w-full bg-transparent  h-14" wrapClassName="border border-solid border-white-A700 pl-4 pr-[35px] py-[13px] rounded-[12px] w-full"
                      type="email"
                    />
                    <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                      <button className="bg-gradient2  cursor-pointer font-medium leading-[normal] py-[13px] rounded-[12px] text-center text-white-A700 text-xl w-[400px] sm:w-full">
                        Reset Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center w-auto sm:w-full">
                <Text
                  className="common-pointer text-base text-white-A700 w-auto"
                  size="txtNotoSansMedium16"
                  onClick={() => navigate("/signup")}
                >
                  Don’t have an account ? Signup
                </Text>
                <div className=" flex flex-row gap-[31px] items-center justify-between sm:justify-end px-1.5 py-1 rounded-md w-[400px] sm:w-full">
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
                  <div className="flex flex-col items-start justify-start w-auto bg-transparent">
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
    </>
  );
};

export default ForgotPasswordPage;
