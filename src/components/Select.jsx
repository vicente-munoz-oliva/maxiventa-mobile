import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export default function Select({
    value,
    setValue,
    data,
    name,
    labelField,
    valueField,
}) {

    const [isFocus, setIsFocus] = useState(false);

    return (

        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#f59222' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}

            data={data}
            search
            maxHeight={300}
            labelField={labelField || 'label'}
            valueField={valueField || 'value'}
            placeholder={!isFocus ? name : '...'}
            searchPlaceholder="Buscar..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {

                setValue(item[valueField]);
                setIsFocus(false);
            }}

        />
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 46,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,

        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,

    },
});