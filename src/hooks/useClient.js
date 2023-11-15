import { useEffect, useState } from "react";
import { ClientContext } from "../context/client"
import clientService from "../services/client";
import errorHandling from "../utils/errorHandling";
import { Alert } from "react-native";
import mappendResponse from "../utils/mappendResponse";

let initProps = {
    name: '',
    tax: '',
    phone: '',
    address: '',
    communeId: '0',
    regionId: '0',
    turnId: '0',
    creditLimit: '',
    email: '',
    economicActivities: '',
    businessPartnerGroupId: '',
    isActive: true,
    isCreditCustomer: false,
    isFactoring: false,
    isShipper: false,
};

export default function useClient() {

    const { clients, setClients } = ClientContext();
    const [form, setForm] = useState(initProps)

    async function listClients() {
        try {
            const { data } = await clientService.getAllClients();
            setClients(await mappendResponse.client(data));
        } catch (error) {
            let errorMessage = errorHandling(error);
            console.log({ errorMessage })
        }
    }

    async function createClient() {
        try {
            const { data } = await clientService.createClient({ form })
            Alert.alert(data.message)
        } catch (error) {
            let errorMessage = errorHandling();
            console.log({ errorMessage })
        }
    }

    useEffect(() => {
        (async () =>
            await listClients()
        )();
    }, [])

    return {
        clients,
        createClient
    }
}