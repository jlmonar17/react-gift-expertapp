import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas para <GifGrid />", function () {
    const category = "Dragon Ball";

    test("Probando que GifGrid se renderice sin items cuando aun no se llama a las imágenes con useFetchGifs", () => {
        // Simulamos el retorno que tendrá esta función dentro de GifGrid, en este caso, con una data de gifs vacia
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de mostrar items cuando se cargan imagenes con useFetchGifs", () => {
        const gifs = [
            {
                id: "ABC",
                title: "Dragon Ball GIF",
                url: "https://localhost/imagen.jpg",
            },
            {
                id: "DEF",
                title: "Naruto GIF",
                url: "https://localhost/naruto.jpg",
            },
        ];

        // Simulamos el retorno que tendrá esta función dentro de GifGrid, en este caso, con una data de gifs
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        // Parrafo que dice "Cargando..." ya no debería aparacer
        expect(wrapper.find("p").exists()).toBe(false);
        // Los GifGridItem deben exister en al misma cantidad que el arreglo de gifs
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
