import React from 'react';
import { Link } from 'react-router';
import {IDEAS, HOME} from '../constants/Routes';
import {IDEAS_TITLE, HOME_TITLE} from '../constants/Content';

export default ({children}) => {
  return (
    <div>
      <header>
        <Link to={HOME}>{HOME_TITLE}</Link>
        <Link to={IDEAS}>{IDEAS_TITLE}</Link>
      </header>
      <main>
        {children}
      </main>
      <footer>
        a nice footer
      </footer>
    </div>
  );
};
