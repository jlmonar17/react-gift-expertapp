import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            {categories.map((category) => {
                return <GifGrid key={category} category={category} />;
            })}
        </>
    );
};

export default GiftExpertApp;
