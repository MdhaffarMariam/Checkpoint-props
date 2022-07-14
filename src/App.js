import FullName from "./Components/FullName/FullName"
import Bio from "./Components/bio/Bio"
import Profession from "./Components/profession/Profession"
import './App.css';
import propTypes from 'prop-types';

function App() {
  const tennis = {
    FullName : 'Ons Jabeur' ,
    bio: 'Ons Jabeur (arabe : أنس جابر), née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2012, classée numéro 2 mondiale par la WTA en juin 2022.',
    profession : 'Joueuse de tennis' 
  }
  const handleName=(name)=>alert(`my name is ${name}`)
  return (
    <div className="App">
    <FullName ons = {tennis} jabeur ={handleName}/>
    <Bio biblio={tennis}/>
    <Profession prof = {tennis}/>
    </div>
  );

  }
 App.defaultProps= {
    Profession : 'tennis'
  } ;
  App.propTypes={
 Bio: propTypes.String
  };
export default App;
