import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        "Naruto",
        "Dragon Ball",
    ]);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ul>
                {categories.map((category) => {
                    return <li key={category}> {category}</li>;
                })}
            </ul>
        </>
    );
};

export default GiftExpertApp;
