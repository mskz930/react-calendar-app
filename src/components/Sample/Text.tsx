import React from 'react';

type Props = {
    text?: string
}

const Text = ({text}: Props) => {

    return (
      <div>
          {text}
      </div>
    )
}

