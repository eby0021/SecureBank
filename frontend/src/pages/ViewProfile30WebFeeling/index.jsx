import React from "react";

import { Button, Img, Line, List, Text } from "components";

const ViewProfile30WebFeelingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto pb-[97px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins h-[117px] md:px-5 relative w-full">
            <div className="bg-light_blue-900 border border-black-900 border-solid flex flex-row h-full items-center justify-start m-auto p-[3px] shadow-bs w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mb-[7px] ml-[46px] w-[99%]">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 underline"
                  size="txtPoppinsRegular64"
                >
                  Secure Bank
                </Text>
                <Img
                  className="h-[97px] sm:mt-0 mt-[5px]"
                  src="images/img_iconsearch.svg"
                  alt="iconsearch"
                />
              </div>
            </div>
            <Text
              className="absolute right-[17%] md:text-5xl text-[64px] text-white-A700 top-[0] underline"
              size="txtPoppinsRegular64"
            >
              Logout
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[2890px] mt-[50px] mx-auto md:px-5 w-full">
            <Img
              className="h-[178px] md:mt-0 mt-[33px]"
              src="images/img_iconbacksquare.svg"
              alt="iconbacksquare"
            />
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[842px] p-[9px] shadow-bs4 w-[23%] md:w-full">
              <div className="flex flex-col gap-[29px] justify-start mb-4 ml-1 md:ml-[0] w-[87%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[45px] items-start justify-start w-full">
                  <Img
                    className="h-[78px] mb-6"
                    src="images/img_iconwallet.svg"
                    alt="iconwallet"
                  />
                  <Text
                    className="sm:mt-0 mt-[27px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-light_blue-900"
                    size="txtPoppinsSemiBold50"
                  >
                    Current Balance
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[156px] md:text-5xl text-[100px] text-center text-light_blue-900"
                  size="txtPoppinsSemiBold100"
                >
                  $2,198
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border-[5px] border-light_blue-900 border-solid flex mb-[25px] md:ml-[0] ml-[477px] md:mt-0 mt-[34px] p-[15px] relative rounded-[50px] shadow-bs3 w-[23%] md:w-full">
              <Img
                className="h-[221px] my-auto object-cover w-[221px]"
                src="images/img_ai28146662.png"
                alt="ai28146662"
              />
              <Text
                className="ml-[-58px] mr-[17px] mt-0.5 md:text-5xl text-[70px] text-black-900 text-center text-shadow-ts z-[1]"
                size="txtPoppinsBold70"
              >
                <>
                  Open <br />
                  Chat Bot
                </>
              </Text>
            </div>
          </div>
          <Line className="bg-black-900_72 h-0.5 max-w-[2928px] mt-[67px] mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-jost md:gap-10 items-start justify-between max-w-[2529px] mt-[124px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700_01 border border-light_blue-800 border-solid flex flex-col items-center justify-start md:mt-0 mt-[9px] p-[15px] rounded-[30px] shadow-bs5">
              <div className="flex flex-col items-end justify-start mb-3 w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[62%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[152px] md:text-5xl text-[70px] text-black-900 underline"
                      size="txtJostRomanBold70"
                    >
                      My Profile
                    </Text>
                    <Img
                      className="h-[314px] md:h-auto rounded-[50%] w-[314px]"
                      src="images/img_ellipse20_314x314.png"
                      alt="ellipseTwenty"
                    />
                  </div>
                  <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex sm:flex-col flex-row font-poppins sm:gap-[43px] items-start justify-between mb-1 md:mt-0 mt-[183px] p-2.5 rounded-tl-[10px] rounded-tr-[10px] w-[34%] md:w-full">
                    <Text
                      className="ml-2 sm:ml-[0] sm:mt-0 mt-4 sm:text-[31px] md:text-[33px] text-[35px] text-gray-700"
                      size="txtPoppinsBold35"
                    >
                      Upload New Image
                    </Text>
                    <Img
                      className="h-[101px] mb-[5px] mr-1"
                      src="images/img_icondocument.svg"
                      alt="icondocument"
                    />
                  </div>
                </div>
                <Line className="bg-light_blue-900 h-[5px] mr-[42px] w-[33%]" />
                <div className="flex flex-col font-poppins items-start justify-start mt-[46px] w-full">
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-end px-4 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="md:mt-0 mt-[35px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                      size="txtPoppinsBold35Black900"
                    >
                      Name
                    </Text>
                    <Line className="bg-black-900_72 md:h-0.5 h-[123px] md:ml-[0] ml-[104px] w-0.5 md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[60px] md:mt-0 mt-[41px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                      size="txtPoppinsSemiBold35"
                    >
                      Jack Sparrow
                    </Text>
                    <Img
                      className="h-[107px] md:ml-[0] ml-[591px] md:mt-0 mt-[7px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[178px] md:mt-0 mt-[25px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852"
                    />
                  </div>
                  <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-10 px-4 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <div className="h-[123px] relative w-[15%] md:w-full">
                      <Line className="absolute bg-black-900_72 h-[123px] inset-y-[0] my-auto right-[6%] w-0.5" />
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[31px] md:text-[33px] text-[35px] text-black-900 top-[12%] w-full"
                        size="txtPoppinsBold35Black900"
                      >
                        Mobile Number
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[46px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                      size="txtPoppinsSemiBold35"
                    >
                      040000000
                    </Text>
                    <Img
                      className="h-[107px] md:ml-[0] ml-[631px]"
                      src="images/img_iconmessage.svg"
                      alt="iconmessage_One"
                    />
                    <Img
                      className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[178px] object-cover rounded-[10px] w-[9%] md:w-full"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_One"
                    />
                  </div>
                  <List
                    className="flex flex-col gap-[22px] items-center mt-[72px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end px-4 rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="md:mt-0 mt-7 sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Email
                      </Text>
                      <Line className="bg-black-900_72 md:h-0.5 h-[122px] md:ml-[0] ml-[113px] w-0.5 md:w-full" />
                      <Text
                        className="md:ml-[0] ml-[58px] md:mt-0 mt-[29px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsSemiBold35"
                      >
                        j.sparrow@gmail.com
                      </Text>
                      <Img
                        className="h-[107px] md:ml-[0] ml-[441px] md:mt-0 mt-1.5"
                        src="images/img_iconmessage.svg"
                        alt="iconmessage"
                      />
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[178px] md:mt-0 mt-[29px] object-cover rounded-[10px] w-[9%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    <Line className="self-center h-[5px] bg-light_blue-900 w-full" />
                    <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start px-[18px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Birth Day
                      </Text>
                      <Line className="bg-black-900_72 md:h-0.5 h-[122px] md:ml-[0] ml-[65px] w-0.5 md:w-full" />
                      <Text
                        className="ml-16 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsSemiBold35"
                      >
                        23 March 1940
                      </Text>
                      <Img
                        className="h-[107px] md:ml-[0] ml-[584px]"
                        src="images/img_iconmessage.svg"
                        alt="iconmessage"
                      />
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[175px] object-cover rounded-[10px] w-[9%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                    <Line className="self-center h-[5px] bg-light_blue-900 w-full" />
                    <div className="bg-white-A700 border border-light_blue-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end px-[19px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        Acc No
                      </Text>
                      <Line className="bg-black-900_72 md:h-0.5 h-[122px] md:ml-[0] ml-[84px] w-0.5 md:w-full" />
                      <Text
                        className="ml-16 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsSemiBold35"
                      >
                        5111322021
                      </Text>
                      <Img
                        className="h-[107px] md:ml-[0] ml-[659px]"
                        src="images/img_iconmessage.svg"
                        alt="iconmessage"
                      />
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[175px] object-cover rounded-[10px] w-[9%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852"
                      />
                    </div>
                  </List>
                  <div className="h-[122px] sm:h-[177px] md:h-[590px] md:ml-[0] ml-[3px] mt-[55px] relative w-full">
                    <Img
                      className="h-[83px] ml-auto my-auto object-cover rounded-[10px] w-[16%]"
                      src="images/img_keyboard8419852.png"
                      alt="keyboard8419852_Two"
                    />
                    <div className="absolute bg-white-A700 border border-light_blue-900 border-solid flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto px-[19px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                      <Text
                        className="sm:flex-1 md:mt-0 mt-[13px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[14%] sm:w-full"
                        size="txtPoppinsBold30"
                      >
                        Change Password
                      </Text>
                      <Line className="bg-black-900_72 md:h-0.5 h-[122px] ml-2.5 md:ml-[0] w-0.5 md:w-full" />
                      <Text
                        className="ml-16 md:ml-[0] md:mt-0 mt-[22px] md:text-5xl text-6xl text-black-900"
                        size="txtPoppinsSemiBold60Black900"
                      >
                        .......................
                      </Text>
                      <Img
                        className="h-[107px] md:ml-[0] ml-[476px] md:mt-0 mt-1.5"
                        src="images/img_iconmessage.svg"
                        alt="iconmessage_Two"
                      />
                      <Img
                        className="md:flex-1 h-[74px] sm:h-auto md:ml-[0] ml-[175px] md:mt-0 mt-[26px] object-cover rounded-[10px] w-[9%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Three"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[58px] w-full">
                    <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start md:px-10 sm:px-5 px-[41px] rounded-tl-[10px] rounded-tr-[10px] w-[38%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-[34px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        PayID
                      </Text>
                      <Line className="bg-black-900_72 sm:h-0.5 h-[122px] sm:ml-[0] ml-[71px] w-0.5 sm:w-full" />
                      <Text
                        className="sm:ml-[0] ml-[98px] sm:mt-0 mt-[25px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsSemiBold35"
                      >
                        04000000
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-light_blue-900 border-solid flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-end px-[19px] rounded-tl-[10px] rounded-tr-[10px] w-[57%] md:w-full">
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsBold35Black900"
                      >
                        LoginID
                      </Text>
                      <Line className="bg-black-900_72 md:h-0.5 h-[122px] md:ml-[0] ml-[42px] w-0.5 md:w-full" />
                      <Text
                        className="md:ml-[0] ml-[62px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                        size="txtPoppinsSemiBold35"
                      >
                        JS76S
                      </Text>
                      <Img
                        className="h-[107px] md:ml-[0] ml-[81px]"
                        src="images/img_iconmessage.svg"
                        alt="iconmessage_Three"
                      />
                      <Img
                        className="h-[74px] sm:h-auto md:ml-[0] ml-[175px] object-cover rounded-[10px] w-[16%] md:w-full"
                        src="images/img_keyboard8419852.png"
                        alt="keyboard8419852_Four"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-1 w-full">
                    <Line className="bg-light_blue-900 h-[5px] w-[38%]" />
                    <Line className="bg-light_blue-900 h-[5px] w-[57%]" />
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] min-w-[578px] sm:min-w-full md:ml-[0] ml-[549px] mt-[37px] rounded-[50px] sm:text-[35px] md:text-[41px] text-[45px] text-center"
                    size="lg"
                  >
                    Save Profile
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-700_01 h-[809px] mb-[941px] rounded-[10px] w-[1%]"></div>
          </div>
          <Line className="bg-black-900_72 h-0.5 mt-[98px] w-full" />
          <Text
            className="mt-[98px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJostRomanRegular36"
          >
            Copyrights © 2023 Secure Bank All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};

export default ViewProfile30WebFeelingPage;
