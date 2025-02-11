// @ts-nocheck
import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    //=> Component boshlang'ich sozlamalarini o'rnatadi(class lar o'zini constructoriga ega)
    super(props); // super sysntxsis orqali inhereint parent (Component)classga propsni path qilyapmiz
    this.state = {  //=> state property
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {    //=> class methodi
    this.setState({       //=> state ichidagi ma'lumotlarni o'zgartiryapti
      color: "blue",
      brand: "Tesla",
      model: "Model S",
      year: 2023,
    });
  };

  componentDidMount() {  // birinchi qurib olinayotganda ishga tushadi
    console.log("componentDidMount");
    // runs after first render => RETRIEVE DATA FROM BACKEND SERVER
  }

  componentWillUnmount() {   
    console.log("componentWillUnmount");
    // runs before component unmount. page yashirlishidan oldin ishga tushadi
  }

  componentDidUpdate() {} // qiymat update bo'ladi virtual domdan real domga ko'chadi

  render() { //=> render(){} orqali viewni hosil qilib qaytaryapmiz(return)
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change Detail
        </button>
      </div>
    );
  }
}

export default Test;
