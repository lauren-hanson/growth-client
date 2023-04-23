import { useState, useEffect } from "react" 

export const TopicList = () => { 

    const [topics, setTopics] = useState([])

    useEffect( 
        () => { 
            fetch(`https://seashell-app-38zla.ondigitalocean.app/topics`)
                .then(response => response.json())
                .then((topicArray) => { 
                    setTopics(topicArray)
                })
        }, 
        []
    )

    return ( 
        <article className="topics"> 
        { 
        topics.map((t) => { 
            return <div>{t.type}</div>
        }
        )}
        </article>
    )


}