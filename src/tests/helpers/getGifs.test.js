import { getGifs } from "../../helpers/getGifs";

describe("Pruebas para getGifs.js", () => {
    test("Debe obtener 10 elementos", async () => {
        const gifs = await getGifs("Naruto");

        expect(gifs.length).toBe(10);
    });

    test("Debe obtener 0 elementos", async () => {
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0);
    });
});
