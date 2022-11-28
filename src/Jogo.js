import { useState } from "react"


export default function Jogo({count,randWord,showWord,changeColor,arrayWord,wordOn,setRandWord,underlined,rand}){

  
    

    return (
        <>
            <div className="game">


                <div className="image">
                    <img data-test="game-image" src={`/assets/forca${count}.png`}/>
                </div>
                <div className="right_content">
                    <button data-test="choose-word" onClick={showWord}  className="bt" type="button">Escolher Palavra</button>
                    <p  data-test="word" data-answer={rand} className={`randWord ${changeColor}`} >{wordOn?arrayWord.join(""):randWord}</p>
                </div>
            </div>

        </>
    )

}

