import React, { useState } from "react";
import "./App.css";
import AddStudent from "./AddStudent";
import TableStudent from "./TableStudent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listSV, setListSV] = useState([]);

  const addSinhVien = (sv) => {
    const tmpSinhVien = [...listSV, sv];
    setListSV(tmpSinhVien);
  };

  const removeSinhVien = (_sv) => {
    const tmpSinhVien = [...listSV];
    const svIndex = tmpSinhVien.indexOf(_sv);
    if (svIndex > -1) {
      tmpSinhVien.splice(svIndex, 1);
      setListSV(tmpSinhVien);
    }
  };

  return (
    <div className="App">
      <AddStudent addSinhVien={(e) => addSinhVien(e)} />
      <TableStudent listSV={listSV} removeSinhVien={removeSinhVien} />
    </div>
  );
}

export default App;
