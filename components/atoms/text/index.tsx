export function Title_1({title} : { title: string} ) {
    return (
        <h1 style={{
            font: 'Inter',
            fontSize: '48px',
            fontWeight: 1000, 
            lineHeight: '59.33px',
            textAlign: 'left',
            color: '#2B2B2B', 
        }}>{title}
        </h1>

        )
}

export function Title_2({title} : { title: string} ) {
    return (
        <h2 style={{
            font: 'Inter',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#767676',
        }}>{title}
        </h2>
        )
}

export function Subtitle_1({title} : { title: string} ) {
    return (
        <h3 style={{
            font: 'Inter',
            fontSize: '32px',
            fontWeight: 700, 
            lineHeight: '39.55px',
            textAlign: 'left',
            color: '#2B2B2B', 
        }}>{title}
        </h3>

        )
}

export function Paragraph({text} : { text: string} ) {
    return (
        <p style={{
            font: 'Inter',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#767676',
        }}>{text}
        </p>
        )
}