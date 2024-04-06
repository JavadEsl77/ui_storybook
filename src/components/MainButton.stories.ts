import type {Meta, StoryObj} from "@storybook/react";
import MainButton from "./MainButton";

const meta: Meta<typeof MainButton> = {
    component: MainButton,
};
export default meta;
type Story = StoryObj < typeof MainButton >;

export const Primary: Story = {
    parameters: {
        design: {
            type: "figspec",
            url: "https://www.figma.com/file/IORI15NeSdcbTPdxcdL9qR/Material-3-Design-Kit-%3E-Customize-For-Datame?type=design&node-id=54961-27155&mode=design&t=MOZwH4xvQZHOh3QZ-4",
            accessToken:"figd_2SZFJi36VJWgU9pSZuNjMVVbBQeMLy6DzkLyeZ9H"
        },
    },
    args: {
        title: 'Button',
    },
};