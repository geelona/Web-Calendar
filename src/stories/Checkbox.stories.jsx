import CheckBox from "../components/Checkbox/Checkbox";

export default {
    title: "components/Checkbox",
    component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;
export const Default = Template.bind({});
Default.args = {
    Label: "Label",
    LabelOn: false,
};
