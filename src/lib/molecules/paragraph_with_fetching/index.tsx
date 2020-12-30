import React, {FunctionComponent, useEffect, useState} from 'react';
import Paragraph from "../../atoms/paragraph";

const ParagraphWithFetching: FunctionComponent = () => {
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        // The setTimeout function simulates the data fetching timer
        setTimeout(() => { setCurrentText('Edit src/App.tsx and save to reload.') }, 2000)
    })

    return (
        <Paragraph text={currentText} loading={currentText === ''} />
    )
}

export default ParagraphWithFetching;
