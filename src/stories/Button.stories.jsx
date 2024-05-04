import Button from "../components/Button/Button";

export default {
    title: "components/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Button",
    color: "primary",
    withIcon: false,
    disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
    color: "secondary",
    withIcon: false,
    disabled: false,
};
