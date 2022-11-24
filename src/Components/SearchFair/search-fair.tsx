import './search.css';
import React, { useState } from "react";

 interface SearchFairProps {
  onWeekdayChange?: (weekday: string) => void
  weekday?: string
  setWeekday?: (weekday: string) => void
}

export const SearchFair: React.FC<SearchFairProps> = (props: SearchFairProps) => {

  
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
  

    const handleMenuItemtest = (element) => {
      //document.getElementById('item').textContent
      console.log(element.target.id)
      //console.log(document.getElementById())
      setOpen(false);
    };
  
    // const handleMenuTwo = () => {
    //   // do something
    //   console.log("Domingo")

    //   setOpen(false);
    // };
  
    return (
      <div className="dropdown">
        <h2>Filtros</h2>
        <label>Pesquisar feiras: </label>
        <button onClick={handleOpen}>Pesquise feiras por dia da semana</button>
        {open ? (
          <ul className="menu">
            <li className="menu-item" onClick={handleMenuItemtest} value = "sexta" id="sexta">
              Sexta feira
            </li>
            <li className="menu-item" onClick={handleMenuItemtest} value = "domingo" id="domingo">
              Domingo
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
  
  export default SearchFair;
  