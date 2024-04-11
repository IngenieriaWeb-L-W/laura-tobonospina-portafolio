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
  RectanglePortfolio,
} from "@components/molecules/cards";

/**
 * LeftMenu es un componente funcional que representa la sección de menú izquierdo de la aplicación.
 * No recibe parámetros y devuelve un elemento JSX que representa el menú izquierdo.
 * Este componente se utiliza para mostrar el contenido del menú izquierdo, que incluye información sobre el usuario y enlaces a diferentes secciones de la aplicación.
 * @returns {JSX.Element} Un elemento JSX que representa la sección de menú izquierda.
 */
export function LeftMenu() {
  return (
    <div className="w-[305px] h-[2811.09px] absolute top-0 left-0 bg-white justify-center">
      <LeftMenuInfo />
    </div>
  );
}

/**
 * @description Esta función renderiza el componente CenterMenu1.
 * @returns JSX.Element - El componente JSX renderizado para CenterMenu1.
 */
export function CenterMenu1(): JSX.Element {
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
        <Title_1 title="Yo soy Laura Tobón estudiante de Ing. de sistemas" />
      </div>
      <div className="w-[424px] h-[88px] absolute top-[250px] left-[69px]">
        <Title_2_h6 title="Estudiante disciplinada, dedicada y responsable, con habilidades blandas como buena comunicación y expresión oral" />
      </div>
    </div>
  );
}

/**
 * @description Esta función renderiza el componente CenterMenu2.
 * @returns Un elemento JSX que representa el componente CenterMenu2.
 */
export function CenterMenu2(): JSX.Element {
  return (
    <div className="w-[970px] h-[653px] absolute left-0 top-[509px] px-9 bg-ice justify-center">
      <div className="w-[300px] h-[40px] top-[0px] absolute left-[387px] text-center">
        <Subtitle_1_h2 title="Mis conocimientos" />
      </div>
      <div className="w-[438px] h-[68px] absolute top-[65.09px] left-[320px] text-center">
        <Paragraph text="Habilidades multidisciplinarias que permiten desarrollos competitivos y completos desde diferentes abordajes" />
      </div>
      <div className="w-[970px] absolute top-[150px] left-[9px] flex flex-row justify-around">
        <Rectangle
          image="/Dev.png"
          title="Desarrollo web"
          text="Blog, Catálogo"
        />
        <Rectangle
          image="/UX.png"
          title="Diseño UI/UX"
          text="diseño móvil y web"
        />
      </div>
      <div className="w-[970px] absolute top-[400px] left-[9px] flex flex-row justify-around justify-items-center">
        <Rectangle
          image="/Microphone.png"
          title="Diseño de sonido"
          text="Voces y música sin CR"
        />
        <Rectangle
          image="/Photographer.png"
          title="Fotografía"
          text="Portadas y producción"
        />
      </div>
    </div>
  );
}

/**
 * @description Este componente representa la sección CenterMenu3, que es parte de la estructura principal del layout.
 * @returns {JSX.Element} El elemento JSX que representa al componente CenterMenu3.
 */
export function CenterMenu3() {
  return (
    <div className="w-[970px] h-[815px] absolute left-0 top-[1204px] px-9 bg-ice justify-center">
      <div className="w-[158px] h-[40px] absolute top-[0px] left-[406px] text-center">
        <Subtitle_1_h2 title="Educación" />
      </div>
      <div className="w-[438px] h-[68px] absolute top-[65.09px] left-[275px] text-center">
        <Paragraph text="Formada como tecnóloga, con énfasis en investigación aplicada, ahora preparándome como ingeniera" />
      </div>
      <div className="w-[970px] h-[632px] absolute top-[183.09px] left-[46px] bg-white">
        <Certifications
          title="Institución universitaria Pascual Bravo"
          text="Diploma de tecnóloga en mecatrónica"
          time="Graduda ______ 27 junio 2006"
          profile="Planear, organizar, ejecutar y controlar el montaje de sistemas flexibles automáticos en líneas de producción industriales o en nuevos procesos productivos."
        />
        <div
          className="overflow-hidden absolute top-[150px] left-[10px]"
        >
          <Image
            src={"/Line32.png"}
            alt={"Línea"}
            width={901}
            height={150}
          />
        </div>
        <Certifications
          title="Universidad de Antioquia"
          text="Semestres de Ingeniería electrónica"
          time="En pausa ______ quinto Semestre"
          profile="Profesional que combina preparación técnica y formación humanística para el desarrollo de soluciones modernas en el campo de la electrónica, económicamente viables y ambientalmente sostenibles; diseño de circuitos, ingeniería de control y automatización. "
        />
        <div
          className="overflow-hidden absolute top-[320px] left-[10px]"
        >
          <Image
            src={"/Line32.png"}
            alt="Línea"
            width={901}
            height={150}
          />
        </div>
        <Certifications
          title="Universidad de Antioquia"
          text="Diploma de Ingeniera de sistemas"
          time="Estudiante ______ Octavo Semestre"
          profile="Profesional que combina preparación técnica y formación humanística para el desarrollo de soluciones modernas en el campo de la computación, económicamente viables y ambientalmente sostenibles; modelado matemático, algorítmico y computacional, ingeniería de software e ingeniería de datos. "
        />
      </div>
    </div>
  );
}

/**
 * @description Esta función representa el componente CenterMenu4, que es una sección de la estructura principal.
 * @returns {JSX.Element} El componente JSX que representa a CenterMenu4.
 */
export function CenterMenu4(): JSX.Element {
  return (
    <div className="w-[970px] h-[648px] absolute left-0 top-[2061px] px-9 bg-ice justify-center">
      <div className="w-[300px] h-[40px] absolute top-[0px] left-[380px] text-center">
        <Subtitle_1_h2 title="Portafolio" />
      </div>
      <div className="w-[438px] h-[68px] absolute top-[73px] left-[266px] text-center">
        <Paragraph text="Aquí se presentan algunas secciones de un desarrollo realizado en varias etapas, guiadas por actividades académicas" />
      </div>
      <div className="w-[970px] h-[510px] absolute top-[150px] left-[9px] flex flex-row justify-between overflow-x-scroll overflow-y-hidden ">
        <div className="w 1/4 mx-8 bg-white">
          <RectanglePortfolio
            image="/1.jpg"
            link="Learn more >"
            url="https://blog.hubspot.es/website/que-es-crud"
            title="Creación de usuarios"
            text="Se desarrolla una base para que los usuarios puedan generar credenciales de acceso a una aplicación móvil"
          />
        </div>
        <div className="w 1/4 mx-8 bg-white">
          <RectanglePortfolio
            image="/2.jpg"
            link="Learn more >"
            url="https://www.cyberclick.es/numerical-blog/que-es-un-ecommerce-tipos-como-crearlo-y-ejemplos"
            title="e-commerce"
            text="Se desarrolla una ventana de visualización virtual para negocios"
          />
        </div>
        <div className="w 1/4 mx-8 bg-white">
          <RectanglePortfolio
            image="/3.jpg"
            link="Learn more >"
            url="https://github.com/lauratobon/mobe_BE"
            title="Muro de calificaciones"
            text="Se desarrolla una estrategia en donde los usuarios califican el servicio de los negocios"
          />
        </div>
        <div className="w 1/4 mx-8 bg-white">
          <RectanglePortfolio
            image="/4.jpg"
            link="Learn more >"
            url="https://github.com/lauratobon/mobe_BE"
            title="Espacio de comentarios"
            text="Se desarrolla un espacio donde se pueden leer los comentarios de los usuarios y visualizar las calificaciones"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * @description Esta función representa el componente RightMenu, que es una sección de la estructura principal.
 * @returns {JSX.Element} El componente JSX que representa a RightMenu.
 */
export function RightMenu() {
  return (
    <div>
      <div className="w-[47px] h-[22px] absolute top-[10px] left-[25px] text-center">
        <Paragraph text="Links" />
      </div>

      <div className="w-[48px] h-[363px] gap-4 absolute top-[60px] left-[25px] flex-row">
        <Icon
          icon={
            "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443z"
          } link_="https://www.facebook.com/MoradaBikerLau/"
        ></Icon>{" "}
        {/* facebook */}
        <Icon
          icon={
            "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
          } link_="https://co.linkedin.com/"
        ></Icon>{" "}
        {/* Linkedin */}
        <Icon
          icon={
            "M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"
          } link_="https://www.instagram.com/moradabiker/"
        ></Icon>{""}
        {/* instagram */}
        <Icon
          icon={
            "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979"
          } link_="https://twitter.com/BikerMorad85146" 
        ></Icon>{" "}
        {/* Twitter */}
        <Icon
          icon={
            "M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"
          } link_="https://www.youtube.com/channel/UCN7h8qY1Tu-f9ABMSeSGTIw "
        ></Icon>{""}
        {/* Youtube */}
        <Icon
          icon={
            "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"
          } link_="https://github.com/lauratobon?tab=repositories"
        ></Icon>{" "}
        {/* Github */}
      </div>
    </div>
  );
}

/**
 * @description Esta función representa el componente Footer, que es parte de la estructura principal de la aplicación.
 * @returns {JSX.Element} El componente Footer, que contiene una nota de copyright.
 */
export function Footer() {
  return (
    <div className="w-[970px] h-[60px] absolute left-[9px] top-[2751.09px] bg-white">
      <div className="w-[251px] h-[24px] absolute left-[371px] top-[18px]">
        <Paragraph text="Todos los derechos reservados 2024" />
      </div>
    </div>
  );
}
