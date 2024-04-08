import Image from "next/image";
import { Button, Icon } from "@components/atoms/buttoms";
import {
  Title_1,
  Title_2_h6,
  Paragraph,
  Subtitle_1,
  Subtitle_1_h2,
} from "@components/atoms/text";
import { Badge } from "@components/atoms/badge";
import { Component } from "react";
import {
  LeftMenuInfo,
  Rectangle,
  Certifications,
} from "@components/molecules/cards";

export function LeftMenu() {
  return (
    <div className="w-[305px] h-[4517px] bg-white justify-center">
      <LeftMenuInfo></LeftMenuInfo>
    </div>
  );
}

export function CenterMenu1() {
  return (
    <div className="w-[970px] h-[467.09px] absolute left-0 top-0 px-9 bg-white justify-center">
      <div className="absolute top-[342px] left-[69px]">
        <Button />
      </div>

      <div className="absolute top-[100px] left-[601px]">
        <Image
          src={"/foto-perfil2.jpg"}
          alt={"Foto perfil LauraT"}
          width={400}
          height={400}
        />
      </div>

      <div className="w-[500px] h-[118px] absolute top-[93px] left-[69px]">
        <Title_1 title="Yo soy Laura Tobon estudiante de Ing. de sistemas" />
      </div>

      <div className="w-[424px] h-[88px] absolute top-[250px] left-[69px]">
        <Title_2_h6 title="Estudiante disciplinada, dedicada y responsable, con habilidades blandas como buena comunicacion y expresion oral" />
      </div>
    </div>
  );
}

export function CenterMenu2() {
    return (
        <div className="w-[970px] h-[653px] absolute left-0 top-[490px] px-9 bg-ice justify-center">
            <div className="w-[300px] h-[40px] absolute top-[5px] left-[387px] text-center">
                <Subtitle_1_h2 title="Mis conocimientos" />
            </div>

            <div className="w-[438px] h-[68px] absolute top-[60px] left-[320px] text-center">
                <Paragraph text="Habilidades multidisciplinarias que permiten desarrollos competitivos y completos desde diferentes abordajes" />
            </div>

            <div className="w-[970px] absolute top-[150px] left-[9px] flex flex-row justify-around">
                <Rectangle
                image="/Dev.png"
                title="Desarrollo web"
                text="Blog, Catalogo"
                ></Rectangle>
                <Rectangle
                image="/UX.png"
                title="Diseno UI/UX"
                text="diseno movil y web"
                ></Rectangle>
            </div>

            <div className="w-[970px] absolute top-[400px] left-[9px] flex flex-row justify-around">
                <Rectangle
                image="/Microphone.png"
                title="Diseno de sonido"
                text="Voces y musica sin CR"
                ></Rectangle>
                <Rectangle
                image="/Photographer.png"
                title="Fotografia"
                text="Portadas y produccion"
                ></Rectangle>
            </div>
        </div>
    );
    }


    export function CenterMenu3() {
        return (
            <div className="w-[970px] h-[815px] absolute left-0 top-[1150px] px-9 bg-ice justify-center">
                <div className="w-[300px] h-[40px] absolute top-[5px] left-[300px] text-center">
                    <Subtitle_1_h2 title="Educacion" />
                </div>
    
                <div className="w-[438px] h-[68px] absolute top-[60px] left-[320px] text-center">
                    <Paragraph text="Formada como tecnologa, con enfasis en investigacion aplicada, ahora preparandome como ingeniera" />
                </div>

                <div className="absolute top-[60px] left-[0px]">
                    <Certifications
                    title="Institucion universitaria Pascual Bravo"
                    text="Diploma de tecnologa en mecatronica"
                    time="Graduda ______ 27 junio 2006"
                    profile="Planear, organizar, ejecutar y controlar el montaje de sistemas flexibles automáticos en líneas de producción industriales o en nuevos procesos productivos."
                    ></Certifications>

                    <div className="overflow-hidden"
                        style={{ top: "1595.09px", left: "49px" }}
                        >
                        <Image src={"/Line32.png"} alt={"Linea"} width={901} height={150} />
                    </div>
                    <Certifications
                        title="Universidad de Antioquia"
                        text="Semestres de Ingenieria electronica"
                        time="En pausa ______ quinto Semestre"
                        profile="Profesional que combina preparación técnica y formación humanística para el desarrollo de soluciones modernas en el campo de la electronica, económicamente viables y ambientalmente sostenibles; diseno de circuitos, ingeniería de control y automatizacion. "
                    ></Certifications>

                    <div
                        className="overflow-hidden"
                        style={{ top: "1595.09px", left: "49px" }}
                        >
                        <Image src={"/Line32.png"} alt={"Linea"} width={901} height={150} />
                    </div>
                    <Certifications
                        title="Universidad de Antioquia"
                        text="Diploma de Ingeniera de sistemas"
                        time="Estudiante ______ Octavo Semestre"
                        profile="Profesional que combina preparación técnica y formación humanística para el desarrollo de soluciones modernas en el campo de la computación, económicamente viables y ambientalmente sostenibles; modelado matemático, algorítmico y computacional, ingeniería de software e ingeniería de datos. "
                    ></Certifications>
                        
                </div>


            </div>
        );
    }