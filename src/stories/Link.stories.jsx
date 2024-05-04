import Link from "../components/Link/Link";

export default {
    title: "components/Link",
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Link",
    href: "",
    disabled: false,
};
