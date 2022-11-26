


export default function Letras({ alfabeto, letterList, setLetterList, arrayWord, isLetterDisabled, setRandWord, underLined, setUnderLined,count,setCount }) {
        
    

    console.log(arrayWord)
    console.log(underLined)
    setRandWord(underLined)
    


    return (
        <div className="letter_buttons">
            {alfabeto.map((l) => <Letter key={l} l={l} />)}
        </div>

    )


    
    
    
    
    function verifyLetter(el) {
        console.log(el)
        console.log(letterList)
        
        
        
        setLetterList([...letterList, el])





        if (arrayWord.includes(el)) {
            const changeLetter = underLined.map((e, i) => (arrayWord[i] === el) ? e = el : e)
            setUnderLined(changeLetter)
            
            
            
        }
        else{setCount(count+1)
    
        }
        
        if(count === 6){
            alert("fazer ficar vermelho")
        }
        if(!underLined.includes("_")){
            alert("fazer ficar verde")
        }
    }


    
    

    function Letter(props) {
        return (

            <button onClick={() => verifyLetter(props.l)} disabled={letterList.includes(props.l) ? true : isLetterDisabled} className="bt_letter" >{props.l}</button>

        )
    }

    

}

