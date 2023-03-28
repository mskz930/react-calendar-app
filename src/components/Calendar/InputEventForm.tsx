import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  div {
    display: flex;
    flex-direction: column;
    color: #000;
    margin: 20px;
  }

  .flex-item {
    display: flex;
    flex-direction: row;
    margin: 0 10px 10px 10px;
  }
  div label {
    display: inline-block;
    text-align: right;
    width: 100px;
    font-size: 16px;
    margin-right: 10px;
  }
  div input {
    flex: 1 1 auto;
  }
`


const InputEventForm: React.FC = () => {

  return (
      <div>
        <FormWrapper>
          <div>
            <div className="flex-item">
              <label htmlFor="event-datetime">タイトル:&nbsp;</label>
              <input type="text" id="event-datetime" name="datetime" /><br/>
            </div>
            {/* <div className="flex-item">
              <label htmlFor="event-datetime">日時:&nbsp;</label>
              <input type="text" id="event-title" name="title" /><br/>
            </div> */}
            <div className="flex-item">
                <button>決定</button>
                <button>キャンセル</button>
            </div>
          </div>
        </FormWrapper>
      </div>      
    )
}

export default InputEventForm