import { useState } from "react";

function useInput() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => { 
        setInputValue(e.target.value)
    };
    return [inputValue, setInputValue, handleChange];
}

export default useInput;