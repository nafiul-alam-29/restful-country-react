import './App.css';
import Country from './component/Country/Country';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}

// function LoadCountries(){
//   const [countries,setCountries] = useState([])
//   useEffect(()=> {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1> Visiting Every Country Of the World:</h1>
//       <h3> Avaliable Country: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return(
//     <div>
//       <h3> {props.name}</h3>
//       <h4> {props.population}</h4>
//     </div>
//   )
// }

export default App;
