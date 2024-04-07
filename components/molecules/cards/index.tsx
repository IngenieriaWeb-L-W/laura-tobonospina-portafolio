import { Badge } from "@components/atoms/badge";
import { Subtitle_1_h4, Paragraph } from "@components/atoms/text";
import Image from "next/image";

export function LeftMenuInfo() {
    return (
        <div className="w-[305px] h-[4517px] bg-white justify-center">
 
            <div className='w-[150px] h-[242px] justify-center items-center p-2 bg-red'>
                    <div className=" my-6 rounded-full overflow-hidden" style={{ top: '50px', left: '74px'}}>
                        <Image 
                            src={'/foto-perfil2.jpg'}
                            alt={"Foto perfil LauraT"} 
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className='my-5 justify-center'>
                        <Subtitle_1_h4 title='Laura Tobon'></Subtitle_1_h4>
                    </div>
                    <div>
                        <Paragraph text='Estudiante de Ingenieria'></Paragraph> 
                    </div>
                    <div className=" my-6 overflow-hidden" style={{ top: '50px', left: '74px'}}>
                        <Image 
                            src={'/Line6.png'}
                            alt={"Linea"} 
                            width={220}
                            height={150}
                        />
                    </div>
                    <div className="w-[220px] h-[25px] flex flex-row justify-between"> 
                        <Paragraph text='Edad:'></Paragraph>
                        <Paragraph text='35'></Paragraph>
                    </div>
                    <div className="w-[220px] h-[25px] flex flex-row justify-between">
                        <Paragraph text='Residencia:'></Paragraph>
                        <Paragraph text='Colombia'></Paragraph>
                    </div>
                    <div className="w-[220px] h-[25px] flex flex-row justify-between">
                        <Paragraph text='Freelance:'></Paragraph>
                        <Paragraph text='Disponible'></Paragraph>
                    </div>
                    <div className="w-[220px] h-[25px] flex flex-row justify-between">
                        <Paragraph text='Direccion:'></Paragraph> 
                        <Paragraph text='Antioquia, Medellin'></Paragraph>
                    </div>
                    <div className=" my-6 overflow-hidden" style={{ top: '50px', left: '74px'}}>
                        <Image 
                            src={'/Line6.png'}
                            alt={"Linea"} 
                            width={220}
                            height={150}
                        />
                    </div>
                    <div className='my-5'>
                        <Subtitle_1_h4 title='Idiomas'></Subtitle_1_h4>
                    </div>
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='Espanol:'></Paragraph>
                        <Paragraph text='100%'></Paragraph>
                    </div>
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='Ingles:'></Paragraph>
                        <Paragraph text='60%'></Paragraph>
                    </div>
                    <div className='my-5'>
                        <Subtitle_1_h4 title='Lenguajes de programacion'></Subtitle_1_h4>
                    </div>
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='Html:'></Paragraph>
                        <Paragraph text='50%'></Paragraph>
                    </div>    
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='Css:'></Paragraph>
                        <Paragraph text='50%'></Paragraph>
                    </div>   
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='JavaScryp:'></Paragraph>
                        <Paragraph text='70%'></Paragraph>
                    </div>
                    <div className="w-[220px] h-[24px] flex flex-row justify-between">
                        <Paragraph text='C++:'></Paragraph>
                        <Paragraph text='80%'></Paragraph>
                    </div>

                    <div className=" my-6 overflow-hidden" style={{ top: '50px', left: '74px'}}>
                        <Image 
                            src={'/Line6.png'}
                            alt={"Linea"} 
                            width={220}
                            height={150}
                        />
                    </div>
                    
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
    <div className="w-[310px] h[225px] justify-center items-center p-2 sm:items-center bg-white">
      <div
        className=" my-6 justify-center overflow-hidden sm:items-center"
        style={{ top: "50px", left: "74px" }}
      >
        <Image src={image} alt={"icono"} width={74} height={74} />
        <div className="my-5">
          <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        </div>
        <div>
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
      <div className="w-1/3 bg-orange-200 p-4">
        <Subtitle_1_h4 title={title}></Subtitle_1_h4>
        <Paragraph text={time}></Paragraph>
      </div>
      <div className="w-2/3 bg-orange-200 p-4">
        <Subtitle_1_h4 title={text}></Subtitle_1_h4>
        <Paragraph text={profile}></Paragraph>
      </div>
    </div>
  );
}
