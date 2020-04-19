import React from "react";
class List extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div>
        <h1>List render</h1>
        {(() => {
          let list = numbers.map((number, index) => (
            <p key={number}>{"This is a list render:" + number}</p>
          ));
          console.log('list',list);
          return list;
        })()}
      </div>
    );
  }
}
export default List;
