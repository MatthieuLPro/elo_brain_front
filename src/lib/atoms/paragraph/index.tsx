import React, { FunctionComponent } from 'react';

interface ParagraphProps {
    text: string
}

const Paragraph: FunctionComponent<ParagraphProps> = ({text}) => {
    return (
        <p>{text}</p>
    )
}

export default Paragraph