// @flow
import React from 'react';

type Props = {
  siteName: string
};

function Header(props: Props) {
  return (
    <div>
      <h1>{props.siteName}</h1>
    </div>
  );
}

export default Header;
