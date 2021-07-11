import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.length > 2) {
            setCategories((category) => [...category, inputValue]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input type="text" onChange={handleChange} value={inputValue} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
