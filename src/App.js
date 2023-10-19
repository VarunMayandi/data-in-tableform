import React, { useEffect, useId, useState } from "react";
import "./styles.css";
import data from  "../src/utils/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        
        

export default function App() {
  var currentYear = 2021;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  const columns = [
    {field: 'id', header: 'Id'},
    {field: 'firstName', header: 'Fiest Name'},
    {field: 'lastName', header: 'Last Name'},
    {field: 'gender', header: 'Gender'},
    {field: 'age', header: 'Age'}
];

  function clickHandler() {
    var theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    setbirthYear(e);
  }

  useEffect(() => {
  	console.log("data : ",data)
  },);

  return (
    <div className="App">
      <DataTable value={data?.users} tableStyle={{ minWidth: '50rem' }}>
    {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</DataTable>
      {/* <h1>Age Calculator</h1>
      
      <input onChange={(e) => inputChangeHandler(e.target.value)} />
      <div>
        {" "}
        <button onClick={clickHandler}>Submit</button>
      </div>

      <div>The age is: {age}</div> */}
    </div>
  );
}
