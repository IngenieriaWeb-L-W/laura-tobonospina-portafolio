//import React from "react";
import Image from "next/image";
import { Button, Icon } from "@components/atoms/buttoms";
import {Title_1, Title_2_h6,Paragraph, Subtitle_1,Subtitle_1_h2} from "@components/atoms/text";
import { Badge } from "@components/atoms/badge";
import { Component } from "react";
import {LeftMenuInfo, Rectangle, Certifications,} from "@components/molecules/cards";
import { LeftMenu, CenterMenu1, CenterMenu2, CenterMenu3, RigthMenu } from "@components/organisms/leftm";
export default function Home() {
  return (
    <div className="bg-ice h-full w-full">
      <div>
        <LeftMenu>
            
        </LeftMenu>
      </div>

      <div className="overflow-y-scroll h-32">
        <div className="w-[988px] h-[2811.09px] absolute left-[326px] top-0 px-9 bg-ice justify-center">
          <CenterMenu1>
          </CenterMenu1>
          <CenterMenu2>
          </CenterMenu2>
          <CenterMenu3>
          </CenterMenu3>
        </div>
      </div>

      <div className="w-[95px] h-[2900px] absolute top-[1px] left-[1345px] py-73 gap-19 px-9 bg-white">
        <RigthMenu>
        </RigthMenu>
      </div>
  </div>
  );
}
