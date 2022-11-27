import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";


function App() {
  const [count , setCount] = useState(0)
  const [randWord,setRandWord] = useState("")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [letterList,setLetterList] = useState([])
  const [arrayWord,setArrayWord] = useState([])
  const [isLetterDisabled ,setIsLetterDisabled] = useState(true)
  const [underLined,setUnderLined] = useState([])
  const [changeColor,setChangeColor] = useState("")
  let rand = ""

  

  function showWord(){
    rand = palavras[Math.floor(Math.random()*palavras.length)]
    console.log(rand)
    const randArray = Array.from(rand)
    setArrayWord(Array.from(rand))
    const randArrayMap = randArray.map(()=> "_")
    setUnderLined(randArrayMap)
    setRandWord(randArrayMap)
    setIsLetterDisabled(false)
    setChangeColor("")
    setCount(0)
    setLetterList([])
   
    

    
}


function endGame(undL,ct){

  if (ct === 6 ){
    setChangeColor("lostRed")
    setIsLetterDisabled(true)
    setLetterList([])
    

    
  }
  else if(!undL.includes("_") && ct !== 6){
    
    setChangeColor("winGreen")
    setIsLetterDisabled(true)
    setLetterList([])

  }

}


  
  return (
    <main>

      <Jogo 
      count={count}
      randWord={randWord}
      showWord={showWord}
      setRandWord={setRandWord}
      underLined={underLined}
      changeColor={changeColor}
      arrayWord={arrayWord}
      rand={rand}
      
      
      
      />
      <Letras 
      alfabeto={alfabeto}
      letterList={letterList}
      setLetterList={setLetterList}
      arrayWord={arrayWord}
      setRandWord={setRandWord}
      isLetterDisabled={isLetterDisabled}
      setUnderLined={setUnderLined}
      underLined={underLined}
      count={count}
      setCount={setCount}
      setChangeColor={setChangeColor}
      endGame={endGame}
      
      
      


      />
      <Chute />
    </main>
   
  );
}

export default App;

