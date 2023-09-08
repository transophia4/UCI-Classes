import React, {useState, useEffect} from 'react';
import "./Home.css"
// Text input and submit button
// Change state on typing input
function Classes (props) {
    return <p>{props.classes}</p>

};

function Home() {
    const [classes, addClass] = useState("");
    let [new_class, addNewClasses] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        document.title = 'Favorite Classes'
    }, []);
return (
    <div>
        <h1>Sophia's Favorite Classes</h1>
        <p></p>
        <form onSubmit={handleSubmit}>
                <label>Enter your favorite class: </label>
                <input value={new_class} onChange={e => addNewClasses(e.target.value)}/>
                <button onClick={() => addClass(classes + "\n • " + new_class)}>
                    Submit
                </button>
                    <Classes classes={classes}/>   
        </form>
    </div>
    
);
}
export default Home;