import React from 'react'

type Props = {
  date: number,
  selected: boolean
}

const DayBox = ({date, selected}: Props) => {
  const handleClick = () => {
    alert(`clicked at day ${date}`)
  }

  return (
    <div 
      style={{
              width: '13%', 
              minHeight: '130px',
              border: '1px solid',
              marginTop: '-1px',
              marginLeft: '-1px',
          }}
      onClick={handleClick}
    >
      <p style={{ textAlign: 'right',
                  margin: '0', 
                  padding: '0 10px 0 0'
                }}
      >{date}</p>
    </div>
  );
}

export default DayBox;