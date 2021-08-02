import React from 'react';
import ReactDom  from 'react-dom';


export default class Supplier extends React.Component {
   render(){
       return (
           <dev> Hello World !!!!! hahaha dadada</dev>
       )
   }
}

ReactDom.render(<Supplier/>,document.getElementById("app1"));
