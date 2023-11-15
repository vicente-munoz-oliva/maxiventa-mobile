import { useEffect } from "react";
import { useState } from "react";
import regionService from "../services/region";
import errorHandling from "../utils/errorHandling";

export default function useRegion() {

    const [regions, setRegions] = useState();

    async function listRegions() {
        try {
            const { data } = await regionService.getAllRegions();
            setRegions(data);
        } catch (error) {
            let errorMessage = errorHandling(error);
            console.log({ errorMessage })
        }
    }

    useEffect(() => {
        (async () =>
            await listRegions()
        )();
    }, [])

    return {
        regions
    }

}