import React from "react";
import Link from 'next/link';

export function Button() {
    return (
    <a
        href="https://www.instagram.com/moradabiker"
        target="_blank"
        rel="noopener noreferrer"
        className=" tooltip-button inline-block bg-primary hover:bg-violet-900 text-white font-bold py-2 px-4 rounded shadow-lg"
    >
        CONTRÁTAME {"->"}
        <span className="tooltip-text bg-blend-color-burn">Ingresa al perfil y envía un mensaje al DM</span>
    </a>
  );
}

export function Icon({ icon, link_ }: { icon: string, link_: string }) {
    return (
        <button className="text-black">
            <Link href={link_}>
                
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 22 22"
                    >
                        <path fill="#ffb400" fill-rule="evenodd" d={icon} clip-rule="evenodd" />
                    </svg>
                
            </Link> 
        </button>
    );
}
