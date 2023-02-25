import React from "react";

// function Greet(){
//     return <h1> Hello Himanshu!! </h1>
// }
const Greet = (props) => {
  console.log(props);

  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
// other methid to export is
// :- export const Greet =()=> <h1> hello Himanhshu!! </h1>
// but we can't change name of component in app.js by using upper export method
