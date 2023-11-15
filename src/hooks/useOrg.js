import { OrgContext } from "../context/org"

export default function useOrg() {

    const {
        orgs,
        setOrgs
    } = OrgContext();

    async function pushDataOrg(data) {
        if (data) {
            if (Array.isArray(data)) {
                setOrgs((prevOrg) => [...prevOrg, ...data]);
            } else if (typeof data === 'object') {
                setOrgs((prevOrg) => [...prevOrg, data]);
            } else {
                console.error('Entrada no válida para pushDataOrg');
            }
        }
    };

    return {
        pushDataOrg,
        orgs
    }
}