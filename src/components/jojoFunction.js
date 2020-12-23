import React from 'react'

function jojoClick(){
    function clickHandler() {
        alert("Woof Woof! Hello! Im JoJo, Nice to meet you, thanks 4 pet me, now im happy, truly happy... Are you still here reading this easter egg? wow, nice job.")
    }
    return(
        <div>
            <a href="#contact" onClick={clickHandler}><img id="jojo"src="./images/jojo.png"></img></a>
        </div>
    )
}

export default jojoClick;