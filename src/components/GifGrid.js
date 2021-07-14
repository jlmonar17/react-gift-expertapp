import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__pulse">{category}</h3>

            {loading && (
                <p className="animate__animated animate__flash">Cargando...</p>
            )}

            <div className="card-grid">
                {images.map((image) => {
                    return <GifGridItem key={image.id} {...image} />;
                })}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
