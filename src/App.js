import './App.css';
import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
const  App =()=> {
  const pageSize=5;
 
  const[progress,setProgress]=useState(0)
  
    return (


      <div>
          <LoadingBar
          height={5}
          color='blue'
          progress={progress}
          />
          <Navbar />
         
       
          <News setProgress={setProgress} category="science"  pageSize={pageSize} country="us" />
         
          
        
          
    </div>
      
    )
  }

export default App