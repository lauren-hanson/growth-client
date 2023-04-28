import { useState, useEffect } from "react" 

export const QuestionList = () => { 

    const [questions, setQuestions] = useState([])

    useEffect( 
        () => { 
            fetch(`http://:8088/questions`)
                .then(response => response.json())
                .then((questionArray) => { 
                    setQuestions(questionArray)
                })
        }, 
        []
    )

    return ( 
        <article className="questions"> 
        { 
        questions.map((q) => { 
            return <div>{q.question}</div>
        }
        )}
        </article>
    )


}