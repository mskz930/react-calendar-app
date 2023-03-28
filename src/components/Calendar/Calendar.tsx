import React from "react";
import DayBox from './DayBox';
import Modal from "../Common/Modal";
import InputEventForm from './InputEventForm'

type MyDate = {
  year: number,
  month: number,
  day: number
}

type Event = {
  title: string
}

type Day = {
  date: MyDate,
  events: Event[],
}

const totalDisplayDays = 42 // 表示する日数

// すべてのイベントデータ
const eventData: Map<number, Map<number, Event[]>> = new Map<number, Map<number, Event[]>>();

const monthlyHeader: string[] = ["日", "月", "火", "水", "木", "金", "土"];

/**
 * 現在時刻の日付を取得
 * @returns MyDate
 */
const initDate = (): MyDate => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return {year, month, day}
}

/**
 * 表示する日付を更新する
 * @param now 
 * @returns 
 */
const initDays = (now: MyDate): number[] => {
  const date = new Date(now.year, now.month-1, 1);
  const dayOfWeek = date.getDay(); // 曜日index
  const prevLastDayOfMonth = new Date(now.year, now.month+1, 0).getDate(); // 先月の末日
  const heads = [...Array(dayOfWeek)].map((_, index) => prevLastDayOfMonth - index).reverse();
  const lastDayOfMonth = new Date(now.year, now.month+2, 0).getDate(); // 今月の末日
  const numOfTails = totalDisplayDays - lastDayOfMonth - heads.length;
  // console.log(numOfTails, lastDayOfMonth, heads.length)
  const tails = [...Array(numOfTails)].map((_, index) => index + 1);
  const days = [...Array(lastDayOfMonth)].map((_, index) => index + 1);
  
  const listOfDay = [...heads, ...days, ...tails]
  return listOfDay
}


/**
 * カレンダーコンポーネント
 * @returns 
 */
const Calender = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const [date, setDate]= React.useState<MyDate>(initDate())
  const [days, setDays] = React.useState<number[]>(initDays(date))
  
  /**
   * 月が変わったときに表示を変更する
   */
  React.useEffect(() => {
    setDays(initDays(date))
  }, [date])
  
  // 先月
  const prevMonth = () => {
    let newDate;
    if (date.month === 1) {
      newDate = {...date, year: date.year-1, month: 12}
    } else {
      newDate = {...date, month: date.month - 1}
    }
    setDate(newDate)
  }

  // 次月
  const nextMonth = () => {
    let newDate;
    if (date.month === 12) {
      newDate = {...date, year: date.year + 1, month: 1}
    } else {
      newDate = {...date, month: date.month + 1}
    }
    setDate(newDate)
  }

  // モーダル表示
  const modalOpen = () => {
    setShowModal(true);
  }

  // 土曜は青、日曜は赤を表示するためのカラーピッカー
  const pickColor = (index: number) :string => {
    if ((index+1) % 7 === 0) {
      return "#3399ff"
    } else if ((index) % 7 === 0) {
      return "#ff0000"
    } else {
      return "inherit"
    }
  }

  return (
      <div style={{ }}>
        <div 
          className="content-wrapper"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            alignItems: 'center',
          }}
        >
          <div 
            className="header"
            style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80px',
            }}
          >
            <button style={{margin: '0 20px'}} onClick={prevMonth}>prev</button>
            {`${date.year}年  ${date.month}月`}
            <button style={{margin: '0 20px'}} onClick={nextMonth}>next</button>
          </div>
          <div 
            className="content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              marginBottom: '5px'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                maxWidth: '1100px',
              }}
            >
                {monthlyHeader.map((desc, index) => (
                  <div key={index} style={{ 
                    width: '14%', 
                    marginTop: '-1px',
                    marginLeft: '-1px'
                  }}>
                    {desc}
                  </div>
                ))}
            </div>
            <div 
                className="container" 
                style={{
                  flex: '1', // 縦方向に伸ばす
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  maxWidth: '1100px',
                }}
            >
              {days.map((day, index) => (
                <DayBox 
                  key={index}
                  date={day} 
                  selected={day === date.day} 
                  textColor={pickColor(index)}
                  onClick={modalOpen}
                />
              ))}
            </div>
          </div>
        </div>
        <Modal show={showModal} setShow={setShowModal}>
          <InputEventForm />
        </Modal>
      </div>
  );
}

export default Calender;
