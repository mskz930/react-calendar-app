import React from 'react';

const InputEventForm = () => {

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        flex: '1',
        color: '#000'
        }}>
          <div>
            <label htmlFor="event-title">title:</label>
            <input type="text" id="event-title" name="title" />
          </div>
          <div>
            <label htmlFor="event-datetime">datetime:</label>
            <input type="text" id="event-datetime" name="datetime" />
          </div>
      </div>      
    )
}

export default InputEventForm