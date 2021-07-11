import { useState } from "react";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        "Naruto",
        "Dragon Ball",
    ]);

    const handleAdd = () => {
        // setCategories([...categories, "Ranma"]);
        setCategories((cats) => [...cats, "Ranma 1/2"]);
    };

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ul>
                {categories.map((category) => {
                    return <li key={category}> {category}</li>;
                })}
            </ul>
        </>
    );
};

export default GiftExpertApp;
