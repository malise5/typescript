import React from "react";
import Button from "./components/Button";
import "./styles/app.css";

function App() {
    return (
        <div className="App">
            {/* <NavBar /> */}
            <Button onClick={() => alert("clicked")} text={"click me"} />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
