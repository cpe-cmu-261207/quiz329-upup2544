import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [persons, setPerson] = useState([]);
  const [inputData, setInputData] = useState({ name: "", gender: "", age: "" });
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if (items != null) {
      setPerson(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(persons));
  }, [persons]);

  function addPerson(event) {
    event.preventDefault();
    const per = [...persons, inputData];
    setPerson(per);
  }
  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <form onSubmit={(e) => addPerson(e)}>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q John Smith"
              //update related state based on event
              onChange={(e) =>
                setInputData({ ...inputData, name: e.currentTarget.value })
              }
            ></input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
              onChange={(e) =>
                setInputData({ ...inputData, gender: e.currentTarget.value })
              }
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input
              className="input"
              type="number"
              placeholder="e.q 30"
              onChange={(e) =>
                setInputData({ ...inputData, age: e.currentTarget.value })
              }
            ></input>
          </div>

          <button className="button is-primary is-fullwidth" type="submit">
            Submit
          </button>

          <div className="mb-4"></div>
        </form>
        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        {persons.map((item) => {
          return (
            <ItemTable name={item.name} gender={item.gender} age={item.age} />
          );
        })}
        <p>Thanachok Wirotsasithon 620610791</p>
      </div>
    </div>
  );
}

export default App;
