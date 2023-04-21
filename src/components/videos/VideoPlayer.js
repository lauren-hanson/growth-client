import { useState } from "react"

export const VideoPlayer = () => {

    const [showButtons, setShowButtons] = useState(false);

    const handleVideoEnded = () => {
        setShowButtons(true);
    };
    console.log(handleVideoEnded)

    return (
        <div>
            <video src="https://vimeo.com/257107885" controls onEnded={handleVideoEnded} />
            {showButtons && (
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
            )}
        </div>
    );
}

