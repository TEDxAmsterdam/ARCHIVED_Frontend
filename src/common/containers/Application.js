import React from 'react';

export default ({children}) => {
  return (
    <div>
      <header>
        TedXAmsterdam
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
