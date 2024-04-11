import Image from "next/image";

/**
 * Componente Badge para mostrar una imagen.
 *
 * @param {string} image - La URL de la imagen a mostrar.
 * @returns 
 */
export function Badge({ image }: { image: string }) {
  return (
    <div className="h-[68px] w-[68px] flex justify-center items-center">
      <Image
        src={image}
        alt={"Codificando"}
        width={66}
        height={66}
      />
    </div>
  );
}
