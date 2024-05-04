import Input from "../components/Input/Input";

export default {
    title: "components/Input",
    component: Input,
};

const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
    FieldName: "Label*",
    FieldType: "text",
    ErrorMessage: "Error Message",
    Placeholder: "Default Input",
    IsErrored: false,
    Disabled: false,
};
