import React, { useState, useRef, useEffect } from "react";
import './title.scss'

export default function Title() {

    const [title, setTitle] = useState("default title");
    const [darkMode, setDarkMode] = useState(false);
    const titleRef = useRef();

    useEffect(() => {
        console.log("useEffect");
        document.title = title;
    },[title]);

    console.log("render");
    const handleClick = () => setTitle(titleRef.current.value);
    const handleCheckboxChange = () => {
        setDarkMode( (prevState) => !prevState )
    };

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <label htmlFor="darkMode">dark mode</label>
            <input
                name="darkMode"
                type="checkbox"
                checked={darkMode}
                onChange={handleCheckboxChange}
            />
            <input ref={titleRef} defaultValue="default title" />
            <button onClick={handleClick}>change title</button>
        </div>
    )
}
