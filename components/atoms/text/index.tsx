export function Title_1({title} : { title: string} ) {
    return (
        <h1 className="font-inter text-5xl font-extrabold leading-15.33 text-left text-tertiary">{title}</h1>
        )
}

export function Title_2_h6({title} : { title: string} ) {
    return (
    <h2 className="font-inter text-base font-normal leading-6 text-left text-gray">{title}</h2>
    )
}

export function Subtitle_1({title} : { title: string} ) {
    return (
        <h3 className="font-inter text-2xl font-bold leading-10 text-left text-gray">{title}</h3>
    )
}
export function Subtitle_1_h4({title} : { title: string} ) {
    return (
        <h3 className="font-inter text-lg font-medium leading-[22.25px] text-left text-tertiary">{title}</h3>
    )
}

export function Paragraph({text} : { text: string} ) {
    return (
        <p className="font-inter text-sm font-normal leading-6 text-left text-gray">{text}</p>
    )
}