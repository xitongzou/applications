import React, { Component } from 'react';

class RowComponent extends Component {

  render() {

    const index = this.props.index || 0;
    const columns = this.props.columns || [];
    const dataMap = this.props.dataMap || new Map();

    return(
      <tr>
        {columns.length > 0 && columns.map((col, i) =>
            <td key={i}>{dataMap.get(col.id)[index]}</td>
        )}
      </tr>
    );
  }

}

export default RowComponent;