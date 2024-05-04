import Dropdown from "../components/Dropdown/Dropdown";

export default {
    title: "components/Dropdown",
    component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;
export const Default = Template.bind({});
Default.args = {
    options: ["Option 1", "Option 2", "Option 3"],
    selectDefault: "Option 1",
};
