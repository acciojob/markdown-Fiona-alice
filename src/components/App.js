import React,{useState,useEffect} from 'react';
//import marked from 'marked';
import ReactMarkdown from 'react-markdown';

function App()
{
    const[write,setWrite] = useState('');
{/* const[html,setHtml] = useState('');
useEffect(()=>{
    const output = marked(write);
    setHtml(output)
}) */}
  

return(
    <>
    <div className='writedown'>
        <textarea onChange={(e)=>setWrite(e.target.value)} type='text'  value={write} >
            </textarea> 
    </div>
    <ReactMarkdown className='output' source={write} />
   {/*<div className='output' dangerouslySetInnerHTML={{ __html: html }}></div> */} 
    </>
)

}
export default App;