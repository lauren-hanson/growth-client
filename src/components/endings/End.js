import { useState, useEffect } from "react"

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
        <div>{lastGrowthAnswer}</div>

        <p>Thanks for playing along.</p>
        <input
            type="checkbox" />
        <label>Download?</label>
    </>)
}