import React from 'react';
import * as style from './style';
import { Table } from './components/table'

function App() {
  return (
    <body className="App" style={style.bodyStyle}>
      <Table style={style.outerTableStyle}>
        <tbody>
          <tr>
              <td data-testid="child">hello</td>
          </tr>
        </tbody>
      </Table>
    </body>
  );
}

export default App;
