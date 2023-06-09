import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action("on or off clicked");

export const defaultOnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const defaultOffMode  = () => <UncontrolledOnOff  defaultOff={false} onChange={callback} />

export const BugMode  = () => <div>Unsync when change defaultValue when already rendered</div>