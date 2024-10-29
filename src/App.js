import React,{ useState } from 'react';
import './App.css'

export default function App() {
  const [value ,setValue] = useState('');

  const handleClick =(btnValue)=>{
    switch(btnValue){
      case 'AC':
        setValue('');
        break;

      case 'DE':
          setValue(value.slice(0,-1));
          break;

      case '=':
        try {
              setValue(eval(value).toString());
            } catch (error)
            {
              setValue('invalid! Try correctly');
             }
          break;

        default: 
              setValue(value + btnValue);
  }
}

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='inputBox'>
            <input type="text" value={value}/>
          </div>
          <div className='row-1'>
            <input type='button' value="AC" className='ac' onClick={()=>handleClick('AC')} />
            <input type='button' value="DE" className='de' onClick={()=>handleClick('DE')}/>
            <input type='button' value="." onClick={()=>handleClick('.')}/>
            <input type='button' value="/" className='hash' onClick={()=>handleClick('/')}/>
          </div>
          <div className='row-2'>
            <input type='button' value="7" onClick={()=>handleClick('7')}/>
            <input type='button' value="8" onClick={()=>handleClick('8')}/>
            <input type='button' value="9" onClick={()=>handleClick('9')}/>
            <input type='button' value="*" className='star' onClick={()=>handleClick('*')}/>
          </div>
          <div className='row-3'>
            <input type='button' value="4" onClick={()=>handleClick('4')}/>
            <input type='button' value="5" onClick={()=>handleClick('5')}/>
            <input type='button' value="6" onClick={()=>handleClick('6')}/>
            <input type='button' value="+" className='plus' onClick={()=>handleClick('+')}/>
          </div>
          <div className='row-4'>
            <input type='button' value="1" onClick={()=>handleClick('1')}/>
            <input type='button' value="2" onClick={()=>handleClick('2')}/>
            <input type='button' value="3" onClick={()=>handleClick('3')}/>
            <input type='button' value="-" className='minus' onClick={()=>handleClick('-')}/>
          </div>
          <div className='row-5'>
            <input type='button' value="00" onClick={()=>handleClick('00')}/>
            <input type='button' value="0" onClick={()=>handleClick('0')}/>
            <input type='button' value="="  className='equalSign' onClick={()=>handleClick('=')}/>
          </div>
        </form>
      </div>
    </div>
  )
}


