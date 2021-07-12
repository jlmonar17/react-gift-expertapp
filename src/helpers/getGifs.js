export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
        category
    )}&api_key=3yWBhW7A3XHuTLpsLQ5GbyFhZsMVxMOD`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((image) => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.downsized_medium.url,
        };
    });

    return gifs;
};
