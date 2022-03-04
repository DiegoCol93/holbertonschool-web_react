import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils'

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button onClick={() => console.log('Close button has been clicked')} aria-label="Close">X</button>
    </div>
  );
}

export default Notifications;
