import React, { useState } from 'react';
import * as style from './style';
import { Table } from './components/table';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

const parseHtml = htmlParser({
  isValidNode: node => {
  
  console.log(node);
  return node.type !== 'script';
  },
  processingInstructions: [{
    // Custom <h1> processing
    shouldProcessNode: function (node) {
      return node.parent && node.parent.name && node.parent.name === 'h1';
    },
    processNode: function (node, children) {
      console.log(node);
      return node.data.toUpperCase();
    }
  },]
})

const App = (props) => {
  const [markdown, setMarkdown] = useState('Please write an essay about your favorite DOM element.');

  const handleChange = ({target}) => {
    setMarkdown(target.value);
  };

  return (
    <body className="App">
      <div className="container">
        <div className="col-markdown">
          <textarea className="markdown-textarea" data-testid="textarea" type="text" name="input" value={markdown} onChange={handleChange}></textarea>
        </div>
        <div className="col-preview">
          {/* <Table style={style.outerTableStyle}>
          <tbody>
            <tr>
                <td data-testid="child">hello</td>
            </tr>
          </tbody>
          </Table> */}
          <div data-testid="preview">
            <ReactMarkdown
              source={markdown}
              astPlugins={[parseHtml]}
              escapeHtml={false}/>
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
