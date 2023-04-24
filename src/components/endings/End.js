import { useState, useEffect } from "react"
import "./End.css"

export const End = () => {

    const [forms, setForms] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/forms`)
                .then(response => response.json())
                .then((formArray) => {
                    setForms(formArray)
                })
        },
        []
    )

    const lastIndex = forms.length - 1;
    const lastGrowthAnswer = forms[lastIndex]?.growth;

    return (<>
        <h4>{lastGrowthAnswer}</h4>

        <p>Thanks for playing along.</p>
        <div>
            <input
                type="checkbox" />
            <label>Download?</label></div>
    </>)
}