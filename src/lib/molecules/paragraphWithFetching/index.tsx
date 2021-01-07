import React, {FunctionComponent, useEffect, useState} from 'react';
import Paragraph from "../../atoms/paragraph";
import {ICurrentText, defaultCurrentText} from "./interface";

const ParagraphWithFetching: FunctionComponent = () => {
    const [currentText, setCurrentText] = useState<ICurrentText>(defaultCurrentText);
    const textContent = currentText.textContent

    useEffect(() => {
        // The setTimeout function simulates the data fetching timer
        setTimeout(() => { setCurrentText({textContent: 'Edit src/App.tsx and save to reload.'}) }, 2000)
    })

    return (
        <Paragraph text={textContent} loading={textContent === ''} />
    )
}

export default ParagraphWithFetching;
