import { Component } from "react";
import { LeftMenu, CenterMenu1, CenterMenu2, CenterMenu3, CenterMenu4, RightMenu, Footer } from "@components/organisms/leftm";
/**
 * @name Assembly
 * @description Este componente se encarga de ensamblar el diseño principal de la aplicación.
 * Incluye el menú de la izquierda, el contenido central y el menú de la derecha.
 * @returns {JSX.Element} El elemento JSX que representa el diseño ensamblado.
 */
export function Assembly(): JSX.Element {
    return (
        <div>
            <div>
                <LeftMenu />
            </div>

            <div className="w-[988px] h-[2811.09px] absolute left-[326px] top-0 px-9 bg-ice justify-center overflow-y-scroll overflow-x-hidden">
                <CenterMenu1 />
                <CenterMenu2 />
                <CenterMenu3 />
                <CenterMenu4 />
                <Footer />
            </div>

            <div className="w-[95px] h-[2811.09px] absolute top-[1px] left-[1345px] py-73 gap-19 px-9 bg-white">
                <RightMenu />
            </div>
        </div>
    );
}