/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} title - El texto que se mostrará como título.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa el título.
 */
export function Title_1({title} : { title: string} ) {
    return (
        <h1 className="font-inter text-5xl font-extrabold leading-15.33  text-tertiary">{title}</h1>
    );
}

/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} title - El texto que se mostrará como subtítulo.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa el subtítulo.
 */
export function Title_2_h6({ title }: { title: string }) {
  return (
    <h2 className="font-inter text-base font-normal leading-6  text-gray">{title}</h2>
  );
}

/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} title - El texto que se mostrará como subtítulo.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa el subtítulo.
 */
export function Subtitle_1({ title }: { title: string }) {
  return (
    <h3 className="font-inter text-2xl font-bold leading-10  text-gray">{title}</h3>
  );
}
/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} title - El texto que se mostrará como subtítulo.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa el subtítulo.
 */
export function Subtitle_1_h4({title} : { title: string} ) {
    return (
        <h3 className="font-inter text-lg font-medium leading-[22.25px]  text-tertiary">{title}</h3>
    )
}
/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} title - El texto que se mostrará como subtítulo.
 *
 * @returns {JSX.Element} Un elemento JSX que representa el subtítulo.
 */
export function Subtitle_1_h2({title} : { title: string} ) {
    return (
        <h3 className="font-inter text-[32px] font-[700] leading-[39.55px]  text-tertiary">{title}</h3>
    )
}
/**
 * Un componente de React que representa un título con el título dado.
 *
 * @param {string} text - TEl texto que se mostrará como el párrafo.
 *
 * @returns {JSX.Element} - Un elemento JSX que representa el párrafo.
 */
export function Paragraph({text} : { text: string} ) {
    return (
        <p className="font-inter text-sm font-normal leading-6 text-gray">{text}</p>
    )
}