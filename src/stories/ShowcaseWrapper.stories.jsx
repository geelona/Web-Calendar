import ShowcaseWrapper from "../components/ShowcaseWrapper/ShowcaseWrapper";

export default {
    title: "components/ShowcaseWrapper",
    component: ShowcaseWrapper,
};

const Template = (args) => <ShowcaseWrapper {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Showcase Wrapper",
    children: <div>Content</div>,
};
