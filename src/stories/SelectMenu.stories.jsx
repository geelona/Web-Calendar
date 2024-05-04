import SelectMenu from "../components/SelectMenu/SelectMenu";

export default {
    title: "components/SelectMenu",
    component: SelectMenu,
};

const Template = (args) => <SelectMenu {...args} />;
export const Default = Template.bind({});
Default.args = {
    label: "Select Menu",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    selectDefault: "Option 1",
};
