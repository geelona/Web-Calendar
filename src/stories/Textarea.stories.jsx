import Textarea from "../components/Textarea/Textarea";

export default {
    title: "components/Textarea",
    component: Textarea,
};

const Template = (args) => <Textarea {...args} />;
export const Default = Template.bind({});
Default.args = {
    Label: "Label",
    Placeholder: "Default Textarea",
    rows: 5,
    cols: 50,
};
