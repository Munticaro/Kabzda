import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputReference = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputReference.current as HTMLInputElement
        setValue(el.value)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return (
        <div>
            <input onChange={onChange} /> - {value}
            <div>
                <> <input ref={inputReference} /> <button onClick={save}>save</button> - actual value: {value} </>
            </div>
        </div>

    )


};