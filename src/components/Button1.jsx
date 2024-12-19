
import React from "react";

const Button1 = ({ styles }) => (
  <button
  type="button"
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  onClick={() => { window.location.href = "http://localhost:3002"; }}
>
  Automatic Call Alert
</button>
);

export default Button1;