import * as React from 'react';
import pic1 from './resource/testSticker01.png';

export default function PicArea({}) {

const picH = 138;
const picW = 332;

const vCutPos1 = picW / 3;
const vCutPos2 = 2 * (picW / 3);



    return (
<div
    style={{
        "backgroundColor": "grey",
        "width": "900px",
        "height": "800px"
    
    }}
>PicArea
<br></br><br></br>
        <img 
            draggable="false"
            src={pic1}
        />
<br></br><br></br>

<div
        style={{
            "border": "2px solid brown",
            "height": "500px",
            "alignContent": "center"
        }}
        onMouseUp={(event)=>{
            console.log("mouse up: ", event.clientX, ", ", event.clientY);

        }}
>
    <div
        style={{
                "height": "auto",    
        }}
    >
        {/* placeholder-top */}
    </div>
    <div
        style={{
            "border": "3px solid orange",
            "width": "auto",
            "height": "auto",
            "display": "flex",
            "justifyContent": "center",
            "padding": "0px",
            "margin": "0px"

        }}
    >   
        <div
            style={{
                "width": "auto",    
            }}

        >
                        {/* placeholder-left */}
        </div> 
    
        <div
            style={{
                "border": "2px solid purple",
                "height": `${picH}px`,
                "width": `${picW}px`,

            }}
            onMouseMove={(event)=>{
            //console.log("mouse position: ", event.clientX, ", ", event.clientY);

            }}
            onMouseDown={(event)=>{
                console.log("mouse down: ", event.clientX, ", ", event.clientY);

            }}
        >
            {/* center-sticker-place */}
            <div>
                <img 
                    draggable="false"
                    src={pic1}
                />
            </div>

        </div>

        <div
            style={{
                "width": "auto",    
            }}
        >
                        {/* placeholder-right */}
            
        </div>
 
    </div>
    <div
        style={{
                "height": "auto",    
        }}
    >
        {/* placeholder-bottom */} 
    </div>
</div>

</div>)


}