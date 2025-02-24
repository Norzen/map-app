import React from "react";

import * as style from "./Dropdown.module.css";

export default function Dropdown() {
 return (
  <div className={style.container}>
     <button type="button" className={style.button}>
       Click me!
     </button>
    <div className={style.dropdown}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
       </ul>
     </div>
   </div>
 );
}