//import React from "react";
import { Component } from "react";
import { LeftMenu, CenterMenu1, CenterMenu2, CenterMenu3, CenterMenu4, RigthMenu, Footer } from "@components/organisms/leftm";
export default function Home() {
  return (
    <div className="bg-ice w-[1440px] h-[2811.09px]">
      <div>
        <LeftMenu>
            
        </LeftMenu>
      </div>

      <div className="">
        <div className="w-[988px] h-[2811.09px] absolute left-[326px] top-0 px-9 bg-ice justify-center overflow-y-scroll overflow-x-hidden">
          <CenterMenu1>
          </CenterMenu1>
          <CenterMenu2>
          </CenterMenu2>
          <CenterMenu3>
          </CenterMenu3>
          <CenterMenu4>
          </CenterMenu4>
          <Footer>
          </Footer>

        </div>

      </div>

      <div className="w-[95px] h-[2811.09px] absolute top-[1px] left-[1345px] py-73 gap-19 px-9 bg-white">
        <RigthMenu>
        </RigthMenu>
      </div>
  </div>
  );
}
