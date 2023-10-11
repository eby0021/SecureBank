import React from "react";
import { useNavigate } from 'react-router-dom';
import { Img, Line, Text } from "components";

const HomePageSavingsAccount30WebFeelingPage = () => {
  const navigate = useNavigate();
  const handlePayClick = () => {
    navigate('/paysomeonebybank30webfeeling');
  }
  const handleTransactionHistoryClick = () => {
    navigate('/transactionhistory30webfeeling');
  }
  const handleViewProfileClick = () => {
    navigate('/viewprofile30webfeeling');
  }
  const handleTransactionAnalyticsClick = () => {
    navigate('/transactionanalytics30webfeeling');
  }
  const handleChatbotClick = () => {
    navigate('/chatbotpage30webfeeling');
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[168px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-24 h-[104px] md:px-5 relative w-full">
            <div className="absolute bg-light_blue-900 border border-black-900 border-solid flex flex-col inset-x-[0] items-end justify-end mx-auto p-1.5 shadow-bs top-[0] w-full">
              <div className="flex flex-col items-center justify-start mr-[11px] w-[5%] md:w-full">
                <Img
                  className="h-[81px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
              </div>
            </div>
            <Text
              className="absolute h-max inset-y-[0] left-[2%] my-auto md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Secure Bank
            </Text>
            <Text
              className="absolute bottom-[0] right-[14%] md:text-5xl text-[64px] text-white-A700 underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between my-[0px] max-w-[2228px] mt-2.5 mx-auto md:px-5 w-[90%] h-[260px]">
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end mb-[20px] md:mt-0 mt-[22px] p-2.5 rounded-[50px] shadow-bs3 w-[33%] md:w-full my-[0px]"
            onClick={handleChatbotClick}>
              <Img
                className="h-[160px] md:h-auto sm:mt-0 mt-4 object-cover w-[160px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <div>
              <Text
                className="sm:mt-0 my-[10px] sm:text-4xl md:text-[25px] text-[28px] text-black-900 text-center text-shadow-ts"
                size="txtPoppinsBold40"
              >
                <>
                  Open <br />
                  Chat Bot
                  <br />
                  <br />
                </>
              </Text>
              <div>
            <Text
                className="sm:mt-0 my-[10px] sm:text-4xl md:text-[25px] text-[28px] text-black-900 text-center text-shadow-ts"
                size="txtPoppinsBold40"
              >
             Get Instant Help!

              </Text>
            </div>
             
              </div>

            </div>
            <div className="flex md:flex-1 flex-row md:gap-10 items-start justify-between w-[55%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start md:mt-0 mt-[10px] p-[9px] shadow-bs4">
                <div className="flex flex-col gap-[0px] justify-start mb-6 ml-0 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[0px] items-start justify-start w-full">
                    <Img
                      className="h-[70px] "
                      src="images/img_iconwallet.svg"
                      alt="iconwallet"
                    />
                    <Text
                      className="sm:mt-0 mt-[29px] sm:text-[40px] md:text-[30px] text-[32px] text-center text-light_blue-900"
                      size="txtPoppinsSemiBold50"
                    >
                      Current Balance
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[174px] md:text-5xl text-[50px] text-center text-light_blue-900"
                    size="txtPoppinsSemiBold100"
                  >
                    $2,198
                  </Text>
                </div>
              </div>
              <Img
                className="h-[125px] md:h-auto mb-2.5 rounded-[50%] w-[125px] mx-"
                src="images/img_ellipse20.png"
                alt="ellipseTwenty"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-jost gap-[37px] items-start justify-between max-w-[2383px] mt-[49px] mx-auto md:px-5 w-full">
            <div className="flex flex-col justify-start">
              <Line className="bg-black-900_72 h-0.5 md:ml-[0] ml-[122px] mr-[60px] w-[93%]" />
              <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-end md:ml-[0] ml-[206px] mt-[78px] w-[92%] md:w-full">
                <div className="bg-light_blue-900 border-2 border-light_blue-900 border-solid h-[70px] md:mt-0 my-2.5 rounded-[35px] shadow-bs6 w-[4%]"></div>
                <Text
                  className="md:ml-[0] ml-[53px] md:text-5xl text-6xl text-black-900 text-center text-shadow-ts1"
                  size="txtPoppinsMedium60"
                >
                  In Savings Account
                </Text>
                <div className="bg-white-A700 border-2 border-light_blue-900 border-solid h-[70px] md:ml-[0] ml-[430px] md:mt-0 my-2.5 rounded-[35px] shadow-bs5 w-[4%]"></div>
                <Text
                  className="md:ml-[0] ml-[41px] md:text-5xl text-6xl text-black-900 text-center text-shadow-ts1"
                  size="txtPoppinsMedium60"
                >
                  Switch to Every Day Account
                </Text>
              </div>
              <Line className="bg-light_blue-900 h-[5px] md:ml-[0] ml-[341px] mr-[1407px] w-1/4" />
              <div className="flex md:flex-col flex-row font-jost md:gap-10 items-center justify-between md:ml-[0] ml-[451px] mt-[220px] w-[66%] md:w-full">
                <div className="h-[530px] relative w-[39%] md:w-full" onClick={handlePayClick}>
                  <div className="h-[530px] m-auto w-full">
                    <div className="bg-white-A700 h-[530px] m-auto rounded-[293px] shadow-bs7 w-full"></div>
                    <Line className="absolute bg-black-900 bottom-[33%] h-px inset-x-[0] mx-auto w-[72%]" />
                  </div>
                  <div className="absolute flex flex-col gap-2.5 h-max inset-[0] items-center justify-center m-auto w-[54%]">
                    <Img
                      className="h-[294px]"
                      src="images/img_iconmoneyrecive.svg"
                      alt="iconmoneyrecive"
                    />
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtJostRomanBold50"
                    >
                      Pay{" "}
                    </Text>
                  </div>
                </div>
                <div className="h-[508px] relative w-[39%] md:w-full" onClick={handleTransactionHistoryClick}>
                  <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[5%] w-[72%]">
                    <Img
                      className="h-[297px]"
                      src="images/img_iconwallet_light_blue_800.svg"
                      alt="iconwallet_One"
                    />
                    <Line className="bg-black-900 h-px mt-[27px] w-[98%]" />
                    <Text
                      className="mt-3 sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                      size="txtJostRomanBold47"
                    >
                      Transaction History
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-jost md:gap-10 items-center justify-between md:ml-[0] ml-[437px] mt-[280px] w-[67%] md:w-full">
                <div className="h-[508px] relative w-[38%] md:w-full" onClick={handleTransactionAnalyticsClick}>
                  <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto top-[4%] w-4/5">
                    <Img
                      className="h-[265px]"
                      src="images/img_iconchart3.svg"
                      alt="iconchartThree"
                    />
                    <div className="flex flex-col gap-9 items-center justify-start w-full">
                      <Line className="bg-black-900 h-px w-full" />
                      <Text
                        className="sm:text-[37px] md:text-[43px] text-[47px] text-black-900"
                        size="txtJostRomanBold47"
                      >
                        Transaction Analytics
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[508px] relative w-[38%] md:w-full" onClick={handleViewProfileClick}>
                  <div className="bg-white-A700 h-[508px] m-auto rounded-[295px] shadow-bs7 w-full"></div>
                  <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto top-[4%] w-4/5">
                    <Img
                      className="h-[269px] md:ml-[0] ml-[113px]"
                      src="images/img_iconuser.svg"
                      alt="iconuser"
                    />
                    <Line className="bg-black-900 h-px mt-[18px] w-full" />
                    <Text
                      className="md:ml-[0] ml-[74px] mt-7 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtJostRomanBold50"
                    >
                      View Profile
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_72 h-0.5 mr-[368px] mt-[63px] w-[85%]" />
              <Text
                className="md:ml-[0] ml-[800px] mt-[7px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                size="txtJostRomanRegular36"
              >
                Copyrights © 2023 Secure Bank All Rights Reserved
              </Text>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[999px] md:mt-0 mt-[30px] rounded-[10px] w-[1%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSavingsAccount30WebFeelingPage;
