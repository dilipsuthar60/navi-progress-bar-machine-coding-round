import React, { useEffect,useRef,useState} from 'react'

const Bar = () => {
    const state=useRef(null);
    const [first, setfirst] = useState(null);
        const create=()=>{
            let element=document.createElement("div");
            first.appendChild(element);
            element.classList.add("bar");
            setTimeout(()=>{
                element.classList.add("fullwidth");
            },50);
        }
        useEffect(()=>{
            setfirst(state.current); 
        },[]);
  return (
    <>
    <div className='button-center'>
    <button onClick={()=>{create()}}>button</button>
    </div>
    <div className='main' ref={state}>
    </div>
     </>
  );
}

export default Bar