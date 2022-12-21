import React from 'react';
import ReactDOM from 'react-dom';
import TemplateName from './TemplateName';

it('TemplateName should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TemplateName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
