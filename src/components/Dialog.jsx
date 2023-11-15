
import { Dialog as Modal, Portal } from 'react-native-paper';

const { Title, Content } = Modal;

export default function Dialog({
    visible,
    children,
    name
}) {

    return (


        <Portal>

            <Modal style={{ backgroundColor: 'white' }} visible={visible} /* onDismiss={hideModal} */>

                <Title>{name}</Title>

                <Content>
                    {children}
                </Content>

            </Modal>

        </Portal>


    );

};

