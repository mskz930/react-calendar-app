import React from 'react'

type Props = {
  date: number,
  selected: boolean,
  textColor?: string,
  onClick?: React.MouseEventHandler
}

type Event = {
  id: number,
  title: string,
}

const DayBox = ({date, selected, textColor, onClick}: Props) => {
  const [events, setEvents] = React.useState<Event[]>([])

  // const addEvents = () => {
  //   const event = {id: events.length, title: 'untitled'}
  //   const newEvents = [...events, event]
  //   setEvents(newEvents)
  // }


  return (
    <div 
      style={{
              width: '13%', 
              maxHeight: '180px',
              border: '1px solid',
              marginTop: '-1px',
              marginLeft: '-1px',
          }}
      onClick={onClick}
    >
      <p style={{ textAlign: 'right',
                  margin: '0', 
                  padding: '0 10px 0 0',
                  color: textColor
                }}
      >{date}</p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        {events.slice(0,3).map((event, index) => (
          <div key={index}
            style={{
              fontSize: '16px',
              padding: '0 10px',
              width: '100%',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
          >
            {`${event.title} ${event.id}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayBox;