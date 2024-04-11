
import { Assembly } from "@components/templates";

export default function Home(): JSX.Element {
  /**
   * El propósito de esta función es renderizar el componente Inicio.
   * Devuelve un elemento JSX que incluye el diseño principal y la estructura de la página.
   *
   * @returns {JSX.Element} The rendered JSX element representing the Home component.
   */
  return (
    <div // Este instaura el color de fondo como ice, el cual esta en las configuraciones como variable global
      className="bg-ice w-[1440px] h-[2811.09px]"> 
      <Assembly />
    </div>      
      // Se incluye dentro del componente Inicio para representar la plantilla principal.
  );
}
