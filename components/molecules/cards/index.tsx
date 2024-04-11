import { Badge } from "@components/atoms/badge";
import { Subtitle_1_h4, Paragraph } from "@components/atoms/text";
import Image from "next/image";

/**
 * @description Este componente representa la información del menú izquierdo de un usuario.
 * @returns {JSX.Element} Un elemento JSX que representa la información del menú izquierdo.
 */
export function LeftMenuInfo() {
  return (
    <div>
      <div className="w-[150px] h-[242px] absolute top-[50px] left-[74px] p-2 justify-center items-center">
        <div
          className="my-6 rounded-full overflow-hidden"
          style={{ top: "50px", left: "74px" }}
        >
          <Image
            src="/foto-perfil2.jpg"
            alt="Foto perfil LauraT"
            width={150}
            height={150}
          />
        </div>
        <div className="my-5 justify-center">
          <Subtitle_1_h4 title="Laura Tobón" />
        </div>
        <div className="my-5 justify-center">
          <Paragraph text="Estudiante de Ingeniería" />
        </div>
      </div>
      <div
        className="overflow-hidden m-8 mt-16 absolute top-[300px] left-[10px]"
        style={{ width: "220px", height: "150px" }}
      >
        <Image src="/Line6.png" alt="Línea" width={220} height={150} />
      </div>
      <div
        className="w-[220px] h-[126] absolute top-[381px] left-[40px] my-3"
        style={{ width: "220px", height: "25px" }}
      >
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Edad:" />
          <Paragraph text="35" />
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Residencia:" />
          <Paragraph text="Colombia" />
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Freelance:" />
          <Paragraph text="Disponible" />
        </div>
        <div className="w-[220px] h-[25px] flex flex-row justify-between my-3">
          <Paragraph text="Dirección:" />
          <Paragraph text="Antioquia, Medellín" />
        </div>
      </div>
      <div
        className="my-10 overflow-hidden m-8 absolute top-[685px] left-[10px]"
        style={{ width: "220px", height: "150px" }}
      >
        <Image src="/Line6.png" alt="Línea" width={220} height={150} />
      </div>
      <div
        className=" w-[220px] h-[153px] absolute top-[557px] left-[40px]"
        style={{ width: "220px", height: "24px" }}
      >
        <div className="my-5">
          <Subtitle_1_h4 title="Idiomas" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Español:" />
          <Paragraph text="100%" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Inglés:" />
          <Paragraph text="60%" />
        </div>
      </div>
      <div
        className="w-[220px] h-[242px] absolute top-[760px] left-[40px]"
        style={{ width: "220px", height: "24px" }}
      >
        <div className="my-5">
          <Subtitle_1_h4 title="Lenguajes de programación" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Html:" />
          <Paragraph text="50%" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="Css:" />
          <Paragraph text="50%" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="JavaScrypt:" />
          <Paragraph text="70%" />
        </div>
        <div className="w-[220px] h-[24px] flex flex-row justify-between my-3">
          <Paragraph text="C++:" />
          <Paragraph text="80%" />
        </div>
      </div>
      <div
        className="my-10 overflow-hidden m-8 absolute top-[1027px] h-[41px]"
        style={{ width: "220px", height: "150px" }}
      >
        <Image src="/Line6.png" alt="Linea" width={220} height={150} />
      </div>
    </div>
  );
}

/**
 * @description Un componente React llamado Rectangle que muestra una imagen, un título y un texto.
 * @param {string} image - La URL de la imagen a mostrar.
 * @param {string} title - El título del componente Rectangle.
 * @param {string} text - El texto a mostrar dentro del componente Rectangle.
 * @returns {JSX.Element} Un elemento JSX que representa un componente Rectangle con la imagen, título y texto proporcionados.
 */
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
        <Image src={image} alt="icono" width={74} height={74} />
        <div className="w-[310px] my-5">
          <Subtitle_1_h4 title={title} />
        </div>
        <div className="w-[310px]">
          <Paragraph text={text} />
        </div>
      </div>
    </div>
  );
}

/**
 * @description Un componente de React que muestra una certificación con título, texto, tiempo y perfil.
 * @param {string} title - El título de la certificación.
 * @param {string} text - El texto que describe la certificación.
 * @param {string} time - El tiempo en que se obtuvo la certificación.
 * @param {string} profile - El perfil asociado a la certificación.
 * @returns {JSX.Element} Un elemento JSX que representa la certificación.
 * 
 */
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
      <div className="w-1/3 bg-white p-4 my-5">
        <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        <Paragraph text={time}></Paragraph>
      </div>
      <div className="w-2/3 bg-white p-4 my-5">
        <Subtitle_1_h4 title={text}></Subtitle_1_h4>
        <Paragraph text={profile}></Paragraph>
      </div>
    </div>
  );
}

/**
 * @description Un componente de React que muestra un elemento de portafolio con una imagen, título, texto y enlace.
 * @param {string} image - La URL de la imagen a mostrar.
 * @param {string} title - El título del elemento de portafolio.
 * @param {string} text - El texto a mostrar debajo del título.
 * @param {string} link - El texto a mostrar como enlace.
 * @param {string} url - La URL a la que se dirigirá el enlace.
 * @returns {JSX.Element} Un elemento JSX que representa un elemento de portafolio con la imagen, título, texto y enlace proporcionados.
 */
export function RectanglePortfolio({
  image,
  title,
  text,
  link,
  url
}: {
  image: string;
  title: string;
  text: string;
  link: string;
  url: string;
}) {
  return (
    <div className="w-[310px] h[474px] items-center bg-white">
      <div
        className="w-[310px] h-[300] "
        style={{
          width: "310px",
          height: "300px",
          top: "0px",
          left: "0px",
        }}
      >
        <Image
          src={image}
          alt="muestra"
          width={310}
          height={300}
        />
        <div
          className="w-[249px] h-[22px] m-4"
          style={{
            width: "249px",
            height: "22px",
            left: "25px",
            top: "325px",
          }}
        >
          <Subtitle_1_h4 title={title} />
        </div>
        <div
          className="w-[268px] h-[70px] m-4 "
          style={{
            width: "268px",
            height: "70px",
            left: "25px",
            top: "355px",
          }}
        >
          <Paragraph text={text} />
        </div>
        <div
          className="w-[119px] h-[24px] m-4"
          style={{
            width: "119px",
            height: "24px",
            left: "25px",
            top: "434px",
          }}
        >
          <a href={url}>
            <Subtitle_1_h4 title={link} />
          </a>
        </div>
      </div>
    </div>
  );
}