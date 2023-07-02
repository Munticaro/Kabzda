// import React, {useState} from "react";
// import {action} from "@storybook/addon-actions";
// import Accordion, {AccordionPropsType} from "./Accordion";
// import {Story} from "@storybook/react";
//
// export default {
//     title: 'Acordion',
//     component: Accordion,
// };
//
// const callback = action("accordion mode change event fired");
//
// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
// export const MenuCollapsedMode = Template.bind({});
// MenuCollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: true,
//     onClick: callback,
// }
// export const UsersUnCollapsedMode = Template.bind({});
// UsersUnCollapsedMode.args = {
//     titleValue: 'Users',
//     collapsed: false,
//     onClick: callback,
// }
//
// export const UsersUnCollapsedMode2 = () => <Accordion titleValue={'Users'} collapsed={false} onClick={callback}/>
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true)
//     return (
//         <Accordion titleValue={"Users"} collapsed={value} onClick={()=>setValue(!value)}/>
//     )
// }