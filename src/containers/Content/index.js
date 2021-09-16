import React from 'react';

import './styles.scss';

const Content = ({ children }) => {
  console.log('aaa');
  return (
    <div className="contentWrapper">
      {children}
    </div>
  )
}

export default Content;