import React from "react";
import DayBox from './DayBox';

type MyDate = {
  year: number,
  month: number,
  day: number
}

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

const initDays = (now: MyDate): number[] => {
  const date = new Date(now.year, now.month-1, 1);
  const dayOfWeek = date.getDay(); // 曜日index
  const prevLastDayOfMonth = new Date(now.year, now.month+1, 0).getDate(); // 先月の末日
  const heads = [...Array(dayOfWeek)].map((_, index) => prevLastDayOfMonth - index).reverse();
  const lastDayOfMonth = new Date(now.year, now.month+2, 0).getDate(); // 今月の末日
  const numOfTails = 35 - lastDayOfMonth - heads.length;
  const tails = [...Array(numOfTails)].map((_, index) => index + 1);
  const days = [...Array(lastDayOfMonth)].map((_, index) => index + 1);
  
  const dayOfList = [...heads, ...days, ...tails]
  return dayOfList
}


const Calender = () => {
  const [date, setDate]= React.useState<MyDate>(initDate())
  const [days, setDays] = React.useState<number[]>(initDays(date))
  


  return (
      <div>
        <div style={{margin: '30px 0'}}>{`${date.year}年  ${date.month}月`}</div>
        <div 
            className="container" 
            style={{display: 'flex', 
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '50px'
                  }}
        >
          {days.map((day, index) => (
            <DayBox date={day} selected={day === date.day} key={index} />
          ))}
        </div>
      </div>
  );
}

export default Calender;
