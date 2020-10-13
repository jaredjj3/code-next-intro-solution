import { useState, useEffect } from 'react';

export const useFriendStatus = () => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, []);


  return isOnline;
};