import * as React from 'react';
import pic1 from './resource/testSticker01.png';

export default function PicArea({}) {
    return (
<div
    style={{
        "backgroundColor": "grey",
        "width": "900px",
        "height": "800px"
    
    }}
>PicArea
<br></br><br></br>
    <div
    
        onMouseMove={(event)=>{
            console.log("moust position: ", event.clientX, ", ", event.clientY);
            
        }}
    
    >
        <img 
            src={pic1}
        />
    </div>

</div>)


}