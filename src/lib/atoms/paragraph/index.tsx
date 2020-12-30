import React, { FunctionComponent } from 'react';
import WithLoading from '../../hoc/withLoading';

interface ParagraphProps {
    text: string
}

const Paragraph: FunctionComponent<ParagraphProps> = ({text}) => {
    return (
        <p>{text}</p>
    )
}

export default WithLoading(Paragraph)
