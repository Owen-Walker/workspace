import { memo } from 'react'

function Content({onIncrease}) {

    console.log("re-render");

    return (
        <>
            <h2>HELLO WORLD</h2>
            <button
                onClick={onIncrease}
            >Click me!</button>
        </>
    )
}

export default memo(Content)