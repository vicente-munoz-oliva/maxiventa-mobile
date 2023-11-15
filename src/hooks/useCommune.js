import { useEffect } from "react";
import { useState } from "react";
import communeService from "../services/commune";
import errorHandling from "../utils/errorHandling";

export default function useCommune() {

    const [communes, setCommunes] = useState();

    async function listCommunes() {
        try {
            const { data } = await communeService.getAllCommunes();
            setCommunes(data);
        } catch (error) {
            let errorMessage = errorHandling(error);
            console.log({ errorMessage })
        }
    }

    useEffect(() => {
        (async () =>
            await listCommunes()
        )();
    }, [])

    return {
        communes
    }

}