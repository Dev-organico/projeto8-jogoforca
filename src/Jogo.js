import { useState } from "react"


export default function Jogo({count,randWord,isDisabled,showWord}){

    
    

  


    return (
        <>
            <div className="game">


                <div className="image">
                    <img src={`/assets/forca${count}.png`}/>
                </div>
                <div className="right_content">
                    <button onClick={showWord} disabled={isDisabled} className="bt" type="button">Escolher Palavra</button>
                    <p className="randWord">{randWord}</p>
                </div>
            </div>

        </>
    )

}

