import { Image } from 'react-native';


export default function Logo({
    height,
    width
}) {

    return (
        <Image
            source={require('../../assets/smartyventa.png')}
            style={{ width, height }}
        />

    )
}