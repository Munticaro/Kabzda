import React from "react";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

const callBack = action('UncontrolledRating Changed')

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0} onChange={callBack}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callBack}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callBack}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callBack}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callBack}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callBack}/>

