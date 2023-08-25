import React, { useState } from "react";
import "../styles/app.css";

interface MyButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<MyButtonProps> = (props) => {
    const [text, setText] = useState<string>("");
    const [add, setAdd] = useState<string[]>([]); // Initialize 'add' as an empty array

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAdd((prevAdd) => [...prevAdd, text]); // Add 'text' to the 'add' array
        setText(""); // Clear the input field after adding
    };

    return (
        <div className="btn-roof">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
            <div className="display">
                <h1>List of Names </h1>
                <ul>
                    {add.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Button;
