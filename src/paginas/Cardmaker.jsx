

// import React, { useState } from "react";
// import Cabecalho from "../components/cabecalho/Cabecalho";
// import Card from "../components/card/Card"; // Import Card component
// import './cardmaker.css';

// const Cardmaker = () => {

//     // Step 1: Create state to store the value of the textarea
//     const [cardText, setCardText] = useState("");
//     const [submittedText, setSubmittedText] = useState(""); // State for the submitted text

//     // Step 2: Handle input change in the textarea
//     const handleInputChange = (event) => {
//         setCardText(event.target.value); // Update state with the textarea value
//     };

//     // Step 3: Handle submit button click
//     const handleSubmit = () => {
//         setSubmittedText(cardText); // Save the cardText to submittedText on submit
//         setCardText(""); // Optionally clear the textarea after submitting
//     };

//     return(
//         <>
//             <Cabecalho />

//             <p>Make new cards here:</p>

//             {/* Textarea for the user to input card text */}
//             <textarea 
//                 className="cardinput" 
//                 value={cardText} 
//                 onChange={handleInputChange} 
//             ></textarea>

//             {/* Submit button */}
//             <button onClick={handleSubmit}>Submit</button>

//             {/* Conditionally render the Card component when there's submitted text */}
//             {submittedText && <Card text={submittedText} />}
//         </>
//     );
// }

// export default Cardmaker;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Cabecalho from "../components/cabecalho/Cabecalho";
import './cardmaker.css';

const Cardmaker = () => {
    const [cardText, setCardText] = useState(""); // Stores input text
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Handle textarea input
    const handleInputChange = (event) => {
        setCardText(event.target.value); // Update state with the textarea value
    };

    // Handle submit and navigate to Cardpage
    const handleSubmit = () => {
        // Navigate to Cardpage and pass cardText via state
        navigate("/cardpage", { state: { cardText } });
        setCardText(""); // Clear the textarea after submit (optional)
    };

    return (
        <>
            <Cabecalho />
            <p>Make new cards here:</p>
            <textarea
                className="cardinput"
                value={cardText}
                onChange={handleInputChange}
            ></textarea>

            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Cardmaker;
