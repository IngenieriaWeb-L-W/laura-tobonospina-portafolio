import { Badge } from "@components/atoms/badge";
import { Subtitle_1_h4, Paragraph } from "@components/atoms/text";
import Image from "next/image";

export function LeftMenuInfo() {
  return (
    <div >
      <div className="w-[150px] h-[242px] absolute top-[50px] left-[74px] p-2 justify-center items-center">
        <div
          className=" my-6 rounded-full overflow-hidden"
          style={{ top: "50px", left: "74px" }}
        >
          <Image
            src={"/foto-perfil2.jpg"}
            alt={"Foto perfil LauraT"}
            width={150}
            height={150}
          />
        </div>
        <div className="my-5 justify-center">
          <Subtitle_1_h4 title="Laura Tobón"></Subtitle_1_h4>
        </div>
        <div className="my-5 justify-center">
          <Paragraph text="Estudiante de Ingeniería"></Paragraph>
        </div>
      </div>

      <div 
          className="overflow-hidden m-8 mt-16 absolute top-[300px] left-[10px]">
          <Image src={"/Line6.png"} alt={"Línea"} width={220} height={150} />
        </div>

      <div className="w-[220px] h=[126] absolute top-[381px] left-[40px] my-3">
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Edad:"></Paragraph>
          <Paragraph text="35"></Paragraph>
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Residencia:"></Paragraph>
          <Paragraph text="Colombia"></Paragraph>
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Freelance:"></Paragraph>
          <Paragraph text="Disponible"></Paragraph>
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Dirección:"></Paragraph>
          <Paragraph text="Antioquia, Medellín"></Paragraph>
        </div>
      </div>
      
      <div
        className=" my-10 overflow-hidden m-8 absolute top-[685px] left-[10px]">
        <Image src={"/Line6.png"} alt={"Línea"} width={220} height={150} />
      </div>
      
      <div className=" w-[220px] h-[153px] absolute top-[557px] left-[40px]">
        <div className="my-5">
          <Subtitle_1_h4 title="Idiomas"></Subtitle_1_h4>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Español:"></Paragraph>
          <Paragraph text="100%"></Paragraph>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Inglés:"></Paragraph>
          <Paragraph text="60%"></Paragraph>
        </div>
      </div>

      <div className="w-[220px] h-[242px] absolute top-[760px] left-[40px]">
        <div className="my-5">
          <Subtitle_1_h4 title="Lenguajes de programación"></Subtitle_1_h4>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Html:"></Paragraph>
          <Paragraph text="50%"></Paragraph>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Css:"></Paragraph>
          <Paragraph text="50%"></Paragraph>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="JavaScryp:"></Paragraph>
          <Paragraph text="70%"></Paragraph>
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="C++:"></Paragraph>
          <Paragraph text="80%"></Paragraph>
        </div>
      </div>

      <div
        className=" my-10 overflow-hidden m-8 absolute top-[1027px] h-[41px]">
        <Image src={"/Line6.png"} alt={"Linea"} width={220} height={150} />
      </div>
    </div>
  );
}

export function Rectangle({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="w-[310px] h[225px] bg-white justify-center">
      <div
        className="w-[310px] my-6 overflow-hidden"
        style={{ top: "50px", left: "74px" }}
      >
        <Image src={image} alt={"icono"} width={74} height={74} />
        <div className="w-[310px] my-5">
          <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        </div>
        <div className="w-[310px]">
          <Paragraph text={text}></Paragraph>
        </div>
      </div>
    </div>
  );
}

export function Certifications({
  title,
  text,
  time,
  profile,
}: {
  title: string;
  text: string;
  time: string;
  profile: string;
}) {
  return (
    <div
      className="flex"
      style={{
        width: "904px",
        height: "150px",
        top: "1434.09px",
        left: "46px",
        gap: "0px",
        borderRadius: "1px 0px 0px 0px",
        
      }}
    >
      <div className="w-1/3 bg-white p-4">
        <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        <Paragraph text={time}></Paragraph>
      </div>
      <div className="w-2/3 bg-white p-4">
        <Subtitle_1_h4 title={text}></Subtitle_1_h4>
        <Paragraph text={profile}></Paragraph>
      </div>
    </div>
  );
}

export function RectanglePortfolio({
  image,
  title,
  text,
  link,
}: {
  image: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <div className="w-[310px] h[474px] items-center bg-white">
      <div
        className="w-[310px] h-[300] absolute top-0 my-6 ">
        <Image src={image} alt={"muestra"} width={310} height={300} />
        <div className="w-[249px] h-[22px] absolute left-[25px] top-[325px] ">
          <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        </div>
        <div className="w-[268px] h-[70px] absolute left-[25px] top-[355px]">
          <Paragraph text={text}></Paragraph>
        </div>
        <div className="w-[119px] h-[24px] absolute left-[25px] top-[434px] ">
          <Subtitle_1_h4 title={link}></Subtitle_1_h4>
        </div>
      </div>
    </div>
  );
}