import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";

describe("Pruebas para <GiftExpertApp />", () => {
    test("Prueba que GiftExpertApp se renderice correctamente", () => {
        const wrapper = shallow(<GiftExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de mostrarse ua lista de categorias", () => {
        const categories = ["AC/DC", "Metallica"];
        const wrapper = shallow(
            <GiftExpertApp defaultCategories={categories} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
