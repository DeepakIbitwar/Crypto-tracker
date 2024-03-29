import React, { useState } from 'react'
import './style.css'
function CoinInfo({ heading, desc }) {

    const shortDesc = desc.slice(0, 350) + "<p style='color:var(--gray)'>Read More...</p> ";
    const longDesc = desc + "<p style='color:var(--gray)'>Read Less...</p>";;

    const [flag, setFlag] = useState(false);
    return (
        <div className='gray-wrapper'>
            <h2 className='coin-info-heading'>{heading}</h2>
            {desc.length>350 ? (
                <p onClick={() => setFlag(!flag)} className='coin-info-desc' dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }} />
            ):(<p  dangerouslySetInnerHTML={{ __html: desc}} />)}
            {/* <p>{desc}</p> */}
        </div>
    )
}

export default CoinInfo
