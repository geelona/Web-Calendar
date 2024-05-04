import Modal from "../components/Modal/Modal";

export default {
    title: "components/Modal",
    component: Modal,
};

const Template = (args) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Modal Title",
    text: "This is the modal content.",
    isOpen: true,
    maxWidth: "15vw",
};
