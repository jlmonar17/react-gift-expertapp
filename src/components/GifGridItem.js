export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} key={id} />
            <p>{title}</p>
        </div>
    );
};
