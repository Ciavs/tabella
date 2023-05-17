import { useState } from "react";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
]

function Tabella(){
  const[person, setPerson] = useState(data);
  const[showForm, setShowForm] = useState(false);
  const[nome, setNome] = useState("");
  const[anno, setAnno] = useState("");
  const[genere, setGenere] = useState("");
 
  function elimina(s : String){
    setPerson(person.filter(obj => obj.name != s))
  }
  function inserisci(){
    person.push({name : nome, age : parseInt(anno), gender : genere});
    setPerson(person);
    setShowForm(false);
  }
    return(
        <>
        <div className="App">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
            {person.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td><button onClick = { () => elimina(val.name)}>elimina</button></td>
                  <td><button>modifica persona</button></td>
                </tr>
              )
            })}
          </table>
          <button onClick = {() => setShowForm(true)}>inserisci persona</button>
            <div>           
                 {showForm && (
                            <form onSubmit = { () => inserisci() }>
                                <input type="text" name="nome" onChange = {(e) => setNome(e.target.value)}/> <br />
                                <input type="number" name="anni" onChange = {(e) => setAnno(e.target.value)}/> <br />
                                <select name="genere" onChange = {(e) => setGenere(e.target.value)}>
                                    <option value="maschio">maschio</option>
                                    <option value="femmina">femmina</option>
                                </select>
                                <br />
                                <button type="submit"> aggiungi </button>
                            </form>
                            )
             }</div>
        </div>
        </>
    );  
}



export default Tabella;