import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas para <GifGridItem />", () => {
    const title = "Imagen categoria";
    const url = "http://localhost/image.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("Prueba de que  GifGridItem se renderiza como queremos", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Prueba que el párrafo tenga un texto", () => {
        const p = wrapper.find("p");

        expect(p.text()).toBe(title);
    });

    test("Prueba que la imagen tenga en src y alt, los props", () => {
        const img = wrapper.find("img");

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("Prueba que el div tenga la clase animate__fadeIn", () => {
        const div = wrapper.find("div");

        // expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
        expect(div.hasClass("animate__fadeIn")).toBe(true);
    });
});
