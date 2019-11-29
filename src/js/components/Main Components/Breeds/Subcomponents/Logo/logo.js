import React from 'react'
import logo from "../../../../../../../images/cat icon.png";

function Logo() {
    return (
        <>
            <div className={'logo-section'}>
                <img src={logo} alt="logo-kota"/>
                <h2>Select cat&apos;s breed</h2>
            </div>
        </>
    )
}
export default Logo;