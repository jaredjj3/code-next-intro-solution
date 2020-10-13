import React, { useState, useEffect } from 'react';
import { useFriendStatus } from './hooks/useFriendStatus';

const FriendListItem = (props) => {
  const isOnline = useFriendStatus();

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}