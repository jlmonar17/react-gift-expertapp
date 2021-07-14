import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas con hook useFetchGifs", () => {
    test("Prueba que se retorne el estado inicial", async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("One Punch")
        );
        const { data, loading } = result.current;

        // Espero a que se haga el update, antes de que limpie cualquier cosa en el custom hook.
        // Luego de que se haga el useEffect (asíncrono), el componente se va a desmontar y limpiar.
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test("Debe retornar un arreglo de imagenes y el loading en false", async () => {
        // waitForNextUpdate retorna una promesa la cual nos indica cuando ha sucedido un
        // cambio (de forma asincrona) en el estado del custom hook
        // https://react-hooks-testing-library.com/usage/advanced-hooks#async
        // https://react-hooks-testing-library.com/reference/api#waitfornextupdate
        // Ya que en la prueba anterior, el hook fue limpiado y desmontado, aquí lo volvemos a renderizar.
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs("One Punch")
        );

        // useEffect obtiene la data de forma asincrona, por eso esperamos a los resultados antes de asignarlos a variables
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
