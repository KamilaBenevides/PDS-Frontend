import React, { useEffect, useState} from 'react';
import { Form } from 'antd';
import ModalForm from '../../components/ModalForm/ModalForm';

const DocumentProduction = () => {

    const [modalConfig, setModalConfig] = useState({});

    const [form] = Form.useForm();

    const onModalSubmit = (values) => {
        // console.log("value", values);
    }

    const onCancelModal = () => {
        setModalConfig({});
    }

    useEffect(() => {
        setModalConfig({
            title: `Selecione o tipo de examinador:`,
            okText: "Salvar",
            cancelText: "Cancelar",
            onFinish: onModalSubmit,
            onCancel: onCancelModal,
            visible: true,
          });
    },[])

    const items = [
        {
            id: "1",
            name: "0",
            label: "Interno",
            colSpan: 24,
        },
        {
            id: "2",
            name: "1",
            label: "Externo ao programa",
            colSpan: 24,
        },
        {
            id: "3",
            name: "2",
            label: "Externo a instituição",
            colSpan: 24,
        },
    ];

    

    return (<>
        <ModalForm 
        {...modalConfig}
        items={items}
        form={form}
        ></ModalForm>
        {/* <Button onClick={}></Button> */}
    </>)
}

export default DocumentProduction;
