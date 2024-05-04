import Toast from "../components/Toast/Toast";

export default {
    title: "components/Toast",
    component: Toast,
};

const Template = (args) => <Toast {...args} />;
export const Default = Template.bind({});
Default.args = {
    text: "This is a toast message",
    maxWidth: "15vw",
    visible: true,
};
