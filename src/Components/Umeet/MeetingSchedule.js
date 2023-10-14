import React from 'react';
import './MeetingSchedule.css'; // Import your CSS file

const meetings = [
  
    
    {  place: 'Toronto' ,date: '5th August 2023'},
    { place: 'California' ,date: '12th August 2023'},
    {  place: 'Patiala' ,date: '12th August 2023'},
    {  place: 'Washington' ,date: '26th August 2023'},
    {  place: 'Detroit' ,date: '2nd September 2023'},
    {  place: 'Jalandhar' ,date: '9th September 2023'},
    {  place: 'Chandigarh' ,date: '16th September 2023'},
    {  place: 'Dehradun' ,date: '30th September 2023'},
    {  place: 'LMTSM Campus ' ,date: '4th November 2023'},
 

];

const MeetingSchedule = () => {
  return (
    <div className="meeting-schedule">
      <h2 className='Meeting_heading'>Meeting Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.place}</td>
              <td>{meeting.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingSchedule;
