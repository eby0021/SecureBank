import React, { useState } from "react";

import { Button, Img, Line, Text } from "components";
import { useNavigate  } from "react-router-dom";
const LoginPage30Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate ();
  const handleSignupLogic = () => {
    navigate("/SignupPage30")
  };
 
  const handleLoginLogic =  () => {
    try {
      if(
        !email ||
        !password
      ) {
        alert("Fill in all the required fields");
        return;
      }
      else{
        alert("data will be sent to backend through API")
        navigate("/homepageeverydayaccount30webfeeling");

      }
    //   const response = await fetch("http://localhost:3001/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //   });

    //   if (response.status === 200) {
    //     // Handle successful login (e.g., redirect to a dashboard)
    //     alert("Login successful");
    //     navigate("/homepageeverydayaccount30webfeeling");
    //   } else {
    //     // Handle login failure (e.g., show an error message)
    //     alert("Login failed");
    //     console.error("Login failed");
    //   }
    // } catch (error) {
    //   // Handle network or other errors
    //   console.error("Error:", error);
     }
     catch (error) {
        console.error("Error:", error);
     }

  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[49px] w-full">
        <div className="font-poppins h-[95px] md:px-5 relative w-full">
          <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-col h-full items-end justify-start m-auto p-[7px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
              <Img className="h-[81px]" src="images/img_plus.svg" alt="plus" />
            </div>
          </div>
          <Text
            className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700"
            size="txtPoppinsRegular64"
          >
            Secure Bank
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start max-w-[1000px] mt-[41px] mx-auto p-[38px] md:px-5 rounded-[50px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start mb-[23px] w-[72%] md:w-full">
            <Img
              className="h-24"
              src="images/img_iconbank_black_900_96x110.svg"
              alt="iconbank"
            />
           <div className="h-[169px] relative w-[100%] sm:w-full">
            <Text
              className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center"
              size="txtPoppinsBold50"
            >
              <>
                Login
                <br />
                Secure Bank
              </>
            </Text>
            <Line className="absolute bg-light_blue-900 h-[5px] inset-[0] justify-center m-auto w-[48%]" />
          </div>
            <div className="flex flex-col items-start justify-start mt-[43px] w-full">
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                <input
                  type="email"
                  className="ml-3.5 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700  border-none outline-none"
                  placeholder="Enter Your Email"
                  value={email} // Set the value attribute to the email state
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Img
                  className="h-[74px] md:h-auto mr-[3px] object-cover rounded-[10px]"
                  src="images/img_keyboard8419852_74x129.png"
                  alt="keyboard8419852"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-0 w-full" />
              <Text
                className="italic ml-1.5 md:ml-[0] mt-[13px] text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Login ID?
              </Text>
              <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[106px] p-2 rounded-tl-[10px] rounded-tr-[10px] w-full">
                <input
                  type="password"
                  className="ml-3.5 sm:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-gray-700  border-none outline-none"
                  placeholder="Enter Your Password"
                  value={password} // Set the value attribute to the email state
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Img
                  className="h-[74px] md:h-auto mr-[3px] object-cover rounded-[10px]"
                  src="images/img_keyboard8419852_74x129.png"
                  alt="keyboard8419852_One"
                />
              </div>
              <Line className="bg-light_blue-900 h-[5px] mt-[0px] w-full" />
              <Text
                className="italic mt-[25px] text-2xl md:text-[22px] text-center text-light_blue-900 sm:text-xl"
                size="txtPoppinsMediumItalic24"
              >
                Forgot Password?
              </Text>
              <div className="flex sm:flex-col flex-row gap-[13px] items-start justify-end md:ml-[0] ml-[265px] mt-0.5 w-[59%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-[50px] mb-[3px] rounded-[10px] w-[50px]"></div>
                <Text
                  className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtPoppinsSemiBold35"
                >
                  Keep me signed in
                </Text>
              </div>
              <div className="bg-gray-50 border border-light_blue-900 border-solid flex flex-col items-end justify-end md:ml-[0] ml-[46px] mt-[90px] p-[3px] shadow-bs2 w-[87%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[11px] w-[91%] md:w-full">
                  <div className="bg-white-A700 border-2 border-gray-700_01 border-solid h-[50px] mb-[33px] sm:mt-0 mt-[41px] w-[50px]"></div>
                  <Text
                    className="ml-3 sm:ml-[0] sm:text-[23px] md:text-[25px] text-[27px] text-black-900 text-center"
                    size="txtPoppinsRegular27"
                  >
                    Im not a robot
                  </Text>
                  <div className="flex flex-col justify-start sm:ml-[0] ml-[98px] w-[31%] sm:w-full">
                    <Img
                      className="h-[65px] md:h-auto md:ml-[0] ml-[55px] object-cover w-[65px]"
                      src="images/img_captcha6119848.png"
                      alt="captcha6119848"
                    />
                    <div className="h-14 md:h-[33px] mt-[3px] relative w-full">
                      <Text
                        className="absolute italic right-[10%] text-black-900 text-center text-xl top-[0]"
                        size="txtPoppinsMediumItalic20"
                      >
                        reCaptcha
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] italic mx-auto text-black-900 text-center text-xl w-max"
                        size="txtPoppinsMediumItalic20"
                      >
                        <a
                          href="javascript:"
                          className="text-black-900 font-poppins font-medium underline italic"
                        >
                          Privacy
                        </a>
                        <span className="text-black-900 font-poppins font-medium italic">
                          {" "}
                          -{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-black-900 font-poppins font-medium underline italic"
                        >
                          Terms
                        </a>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="cursor-pointer font-semibold leading-[normal]
               min-w-[547px] sm:min-w-full ml-11 md:ml-[0] mt-[152px] rounded-[47px] 
               sm:text-[35px] md:text-[41px] text-[45px] text-center"
               onClick={handleLoginLogic}
               type="submit"
               >
                Login
              </Button>
              <Button
                className="border-[5px] border-light_blue-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[547px] sm:min-w-full md:ml-[0] ml-[49px] mt-[61px] rounded-[47px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                color="white_A700"
                onClick={handleSignupLogic}
              >
                Signup
              </Button>
            </div>
          </div>
        </div>
        <Line className="bg-black-900_72 h-0.5 mt-[181px] w-full" />
        <Text
          className="mt-[63px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
          size="txtJostRomanRegular36"
        >
          Copyrights © 2023 Secure Bank All Rights Reserved
        </Text>
      </div>
    </>
  );
};

export default LoginPage30Page;
