import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas para <AddCategory />", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
        jest.clearAllMocks();
    });

    test("Debe mostrarse de manera correcta", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Probamos que la caja de texto cambie correctamente su value al escribir texto", () => {
        const input = wrapper.find("input");
        const value = "Hola Mundo";

        input.simulate("change", {
            target: { value },
        });

        const inputAfter = wrapper.find("input");

        expect(inputAfter.prop("value")).toBe(value);
    });

    test("No se debe hacer submit del formulario cuando el input está vacío", () => {
        const form = wrapper.find("form");

        form.simulate("submit", { preventDefault: () => {} });

        // Se espera que la función setCategories no sea llamada cuando se le pasa un input vacio en el submit.
        expect(setCategories).not.toHaveBeenCalled();
    });

    test("Debe de llamarse el setCategories y dejar el input vacío", () => {
        const value = "Naruto";

        wrapper.find("input").simulate("change", { target: { value } });
        wrapper.find("form").simulate("submit", { preventDefault: () => {} });

        // set categories debe haberse llamado ya que se tiene un value
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // Input debe quedar vacío luego de llamarse el setCategories
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe("");
    });
});
