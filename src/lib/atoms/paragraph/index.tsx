import React, { FunctionComponent } from 'react';
import WithLoading from '../../hoc/withLoading';
import {IParagraphProps} from './interface';

const Paragraph: FunctionComponent<IParagraphProps> = ({text}) => {
    return (
        <p>{text}</p>
    )
}

export default WithLoading(Paragraph)
