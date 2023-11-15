import { useState } from "react";

export default function useDialog() {

    const [visible, setVisible] = useState();

    const showModal = () => setVisible(true);

    const hideModal = () => setVisible(false);

    return {
        visible,
        showModal,
        hideModal
    }
}