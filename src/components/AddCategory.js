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
            setCategories((category) => [inputValue, ...category]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputValue} />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
