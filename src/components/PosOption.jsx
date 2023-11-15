import { View } from "react-native";
import Select from "./Select";

export default function PosOption({

}) {

    return (

        <View style={{ flex: 1, padding: 6 }} >

            <View style={{ flexDirection: 'row', }}>

                <View style={{ flex: 1, padding: 5 }} >

                    <Select
                        name="Tipo documento"
                        data={data}
                        setValue={setDocumentType}
                        value={documentType}
                    />

                </View>

                <View style={{ flex: 1, padding: 5 }} >

                    <Select
                        name="Lista de precio"
                        data={priceListsByDocumentType}
                        labelField={"name"}
                        valueField={"priceListId"}
                        setValue={setPriceList}
                        value={priceList}
                    />

                </View>

            </View>

            <View style={{ flex: 1, padding: 5 }} >

                <Select
                    name="Cliente"
                    data={clients}
                    setValue={setClient}
                    value={client}
                    labelField={"name"}
                    valueField={"clientId"}
                />

            </View>

        </View>

    )

}