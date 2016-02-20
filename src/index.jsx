import './main.css';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

const main = () => {
  // Adding main app to page
  const app = document.createElement('div');
  document.body.appendChild(app);

  // Adding css to page.
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css')
  document.getElementsByTagName('head')[0].appendChild(link)

  render(<App />, app);
}
main();
