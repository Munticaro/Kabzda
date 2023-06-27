import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValue} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValue>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            {/*<UncontrolledRating />*/}
            {/*<OnOff />*/}
            {/*<OnOff on={switchOn}*/}
            {/*       onChange={ () => {setSwitchOn(!switchOn)}} // тут указываем функцию, которая меняет булевое значение*/}
            {/*/>*/}
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;


