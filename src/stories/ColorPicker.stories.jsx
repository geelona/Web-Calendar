import ColorPicker from "../components/ColorPicker/ColorPicker";

export default {
    title: "components/ColorPicker",
    component: "color-picker",
};

const Template = (args) => <ColorPicker {...args} />;
export const Default = Template.bind({});
