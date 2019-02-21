import React, { Component } from 'react';
import {Table} from 'reactstrap';
import RowComponent from './Row';

class TableComponent extends Component {

  render() {

    const columns = this.props.view.columns || [];
    const dataMap = this.props.dataMap || new Map();

    return(
      <Table>
        <thead>
        <tr>
          {columns.map((column, i) =>
            <th data-id={column.id} key={i}>{column.title}</th>
          )}
        </tr>
        </thead>
        <tbody>
        {dataMap.size > 0 && dataMap.get('id').map((id, i) =>
            <RowComponent key={i} index={i} dataMap={dataMap} columns={columns} />
        )}
        </tbody>
      </Table>
    );
  }

}

export default TableComponent;