import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import { Img, Line, List, Text } from "components";

const PaySomeoneByBankErrorField30WebFeelingPage = () => {
  const navigate = useNavigate ();
  const [bsb, setBsb] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  
  const handleSubmit = async () => {
    // Create a data object to send to the server
    const data = {
      bsb,
      accountNumber,
      accountName,
      amount,
      reason,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch('http://localhost:3001/send-money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bsb,
          accountNumber,
          accountName,
          amount,
          reason
        }),
      });

      if (response.status === 200) {
        // Handle successful login (e.g., redirect to a dashboard)
        alert("Money sent");
        navigate("/homepageeverydayaccount30webfeeling");
      } else {
        // Handle login failure (e.g., show an error message)
        alert("Money not sent: error");
        //console.error("Login failed");
      }
    }catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start  pb-[52px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-poppins md:h-24 h-[99px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid h-[95px] inset-x-[0] mx-auto shadow-bs top-[0] w-full"></div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute right-[16%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
            <Img
              className="absolute h-[91px] inset-y-[0] my-auto right-[1%]"
              src="images/img_iconsearch.svg"
              alt="iconsearch"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2380px] mt-2 mx-auto md:px-5 w-full">
            <Img
              className="h-[157px] md:mt-0 mt-[68px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid
             flex md:ml-[0] ml-[250px] md:mt-0 mt-[27px] h-[200px] px-[130px] py-[40px] w-full relative rounded-[50px] shadow-bs3 md:w-full">
              <Img
                className="mt-[5px] mr-[80px] h-[70px] w-[70px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-25px] mr-[17px] mt-0.5 md:text-5xl text-[30px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
            <Img
              className="md:flex-1 h-[130px] sm:h-auto mb-3 md:ml-[0] ml-[400px] object-cover rounded-[161px] w-[17%] md:w-full mt-[35px] mr-[30px]"
              src="images/img_ellipse20_281x322.png"
              alt="ellipseTwenty"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2456px] mt-3.5 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Line className="bg-black-900_72 h-0.5 w-full" />
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[41px] mt-5 w-[96%] md:w-full">
                <div className="h-[299px] relative w-[13%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtPoppinsBold40"
                      >
                        My Favourites
                      </Text>
                      {/* <div className="h-52 relative w-[96%]">
                        <div className="bg-light_blue-900 h-52 m-auto rounded-[138px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute left-[22%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[33%]"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Daniel
                        </Text>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="absolute h-[67px] right-[0] top-[19%] w-[27%]">
                    <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[67px] m-auto rounded-[38px] shadow-bs9 w-full"></div>
                    <Img
                      className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[93%]"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025211"
                    />
                  </div> */}
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[169px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[209px] md:mt-0 mt-[57px] w-[54%] md:w-full"
                  orientation="horizontal"
                >
                  {/* <div className="md:h-52 h-[242px] relative w-full">
                    <div className="absolute bottom-[0] h-52 left-[0] w-[95%]">
                      <div className="bg-light_blue-900 h-52 m-auto rounded-[138px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Sajid
                      </Text>
                    </div>
                    <div className="absolute h-[67px] right-[0] top-[0] w-[27%]">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[67px] m-auto rounded-[38px] shadow-bs9 w-full"></div>
                      <Img
                        className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[93%]"
                        src="images/img_cancel6602521.png"
                        alt="cancel66025212"
                      />
                    </div>
                  </div> */}
                  {/* <div className="md:h-52 h-[242px] relative w-full"> */}
                    {/* <div className="absolute bottom-[0] h-52 left-[0] w-[96%]">
                      <div className="bg-light_blue-900 h-52 m-auto rounded-[138px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Peter
                      </Text>
                    </div> */}
                    {/* <div className="absolute h-[67px] right-[0] top-[0] w-[27%]">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[67px] m-auto rounded-[38px] shadow-bs9 w-full"></div>
                      <Img
                        className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[93%]"
                        src="images/img_cancel6602521.png"
                        alt="cancel66025213"
                      />
                    </div>
                  </div> */}
                  <div className="md:h-52 h-[242px] relative w-full">
                    {/* <div className="absolute bottom-[0] h-52 left-[0] w-[95%]">
                      <div className="bg-light_blue-900 h-52 m-auto rounded-[138px] shadow-bs9 w-full"></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[33%] w-max"
                        size="txtPoppinsSemiBold40WhiteA700"
                      >
                        Olivia
                      </Text>
                    </div> */}
                    {/* <div className="absolute h-[67px] right-[0] top-[0] w-[27%]">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[67px] m-auto rounded-[38px] shadow-bs9 w-full"></div>
                      <Img
                        className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[93%]"
                        src="images/img_cancel6602521.png"
                        alt="cancel66025214"
                      />
                    </div> */}
                  </div>
                </List>
                <div className="h-[290px] md:ml-[0] ml-[169px] md:mt-0 mt-[9px] relative w-[18%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[22px] justify-start w-full">
                      {/* <Text
                        className="md:ml-[0] ml-[277px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                        size="txtPoppinsMedium40"
                      >
                        See All
                      </Text> */}
                      {/* <div className="h-52 mr-[135px] relative w-[68%]">
                        <div className="bg-light_blue-900 h-52 m-auto rounded-[138px] shadow-bs9 w-full"></div>
                        <Text
                          className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 top-[33%] w-max"
                          size="txtPoppinsSemiBold40WhiteA700"
                        >
                          Tania
                        </Text>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="absolute h-[67px] right-[29%] top-[17%] w-[19%]">
                    <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[67px] m-auto rounded-[38px] shadow-bs9 w-full"></div>
                    <Img
                      className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-[93%]"
                      src="images/img_cancel6602521.png"
                      alt="cancel66025215"
                    />
                  </div> */}
                </div>
              </div>
              <Line className="bg-black-900_72 h-0.5 mt-[57px] w-full" />
              <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[424px] mt-[29px] p-[22px] sm:px-5 rounded-[30px] shadow-bs5 w-[57%] md:w-full">
                <div className="flex flex-col justify-center center-align mb-[73px] w-[89%] md:w-full">
                  <Img
                    className="h-[179px] md:ml-[0] ml-[500px]"
                    src="images/img_iconmoneyrecive.svg"
                    alt="iconmoneyrecive"
                  />
                  <Text
                    className="md:ml-[0] ml-[495px] mt-9 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                    size="txtPoppinsBold35Black900"
                  >
                    Pay Someone
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-1 flex-row items-center justify-between p-6 sm:px-5 rounded-[30px] w-2/5 md:w-full">
                        <Text
                          className="mb-[9px] ml-11 sm:text-[31px] md:text-[33px] text-[28px] text-black-900"
                          size="txtPoppinsBold35Black900"
                        >
                          Transfer
                        </Text>
                        <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[47px] mr-2.5 my-[7px] rounded-[23px] w-[47px]"></div>
                      </div>
                      <div className="h-28 relative w-2/5 md:w-full">
                        {/* <div className="flex flex-row h-full items-end justify-between mt-[25px] mx-auto w-[79%]">
                          <Text
                            className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Bank Account
                          </Text>
                          <div className="bg-light_blue-900 border-2 border-light_blue-900 border-solid h-[47px] mt-[7px] rounded-[23px] w-[47px]"></div>
                        </div> */}
                        <div className="absolute bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-row h-full inset-[0] items-center justify-between m-auto p-7 sm:px-5 rounded-tl-[30px] rounded-tr-[30px] w-full">
                          <Text
                            className="ml-[27px] mt-0.5 sm:text-[31px] md:text-[33px] text-[28px] text-black-900"
                            size="txtPoppinsBold35Black900"
                          >
                            Pay Someone
                          </Text>
                          <div className="bg-light_blue-900 border-2 border-light_blue-900 border-solid h-[47px] mr-[15px] my-[3px] rounded-[23px] w-[100px]"></div>
                        </div>
                      </div>
                    </div>
                    {/* input fields start from here */}
                    <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input className="ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 border-none outline-none"
                     type="text" value={bsb} onChange={(e) => setBsb(e.target.value)} placeholder='BSB Number'/>
                      <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>


                    <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input className="ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 border-none outline-none"
                    type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder='Account Number' />
                      <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[46px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:ml-[0] ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Account Name
                      </Text>
                      <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Two"
                      />
                    </div> */}
                     <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <input className="ml-[47px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 border-none outline-none"
                      type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder='Account Name'/>                     
                       <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    {/* <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[54px] px-[7px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Img
                        className="h-[88px] md:mt-0 mt-[5px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Line className="bg-black-900_72 md:h-0.5 h-[97px] md:ml-[0] ml-[9px] w-0.5 md:w-full" />
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-0 mt-[22px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Enter Amount
                      </Text>
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[620px] md:mt-0 mt-[9px] object-cover rounded-[10px] w-[12%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Three"
                      />
                    </div> */}
                       <div className="input-field bg-white-A700 border border-light_blue-900 border-solid flex flex-row md:gap-10
                     items-center justify-between mt-[63px] p-[11px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Img
                        className="h-[88px] md:mt-0 mt-[5px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                    <input className="ml-[0px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 border-none outline-none"
                      type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />                     
                        <Img
                        className="h-[74px] md:h-auto mr-1.5 object-cover rounded-[10px]"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    <Line className="bg-light_blue-900 h-[5px] mt-1.5 w-full" />
                    <div className="input-field bg-white-A700 border-2 border-light_blue-900 border-solid flex md:flex-col flex-row gap-[57px] items-center justify-end mt-[77px] w-[80%]  md:w-full">
                    <select value={reason} onChange={(e) => setReason(e.target.value)} className='border-none outline-none w-full'>
                    <option value="business">Business</option>
                    <option value="self">Self</option>
                    <option value="investment">Investment</option>
                    </select>
                    </div>
                    <button
                      className="bg-light_blue-900 h-[89px] justify-center mt-[49px] pb-[7px] pt-[13px] sm:px-5 px-[35px] rounded-[44px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 w-[558px]"
                      onClick={handleSubmit}>
                     Send Money
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[787px] md:mt-0 mt-[262px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-5 w-full" />
          <Text
            className="md:ml-[0] ml-[807px] mt-[38px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default PaySomeoneByBankErrorField30WebFeelingPage;
