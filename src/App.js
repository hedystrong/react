
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';

const logoItem = [
  {id:1, title: "PORTFOLIO"},
  {id:2, title: "BLOG"},
  {id:3, title: "CV"},
  {id:4, title: "STORE"},
  {id:5, title: "FREELANCE"},
  {id:6, title: "ABOUT ME"},
  {id:7, title: "CONTACT"},
];
const imgList = {
  img1: require("./images/Rectangle114.png")
};

 function App() {

  return (
    <div className='container'>
      <div className='logo'>
        <img src='./images/Rectangle114.png'/>
        
      </div>
      <div className='menu1'>
        {logoItem.map((e) => {
          return(
            <div>
              <a className='menu' href='#'>{e.title}</a>
            </div>
          );
        })}
      </div>
    </div>
    
  )
}


export default App;