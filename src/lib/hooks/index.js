import React, { useContext } from 'react';

export const useNotifications = (NotificationContext) => {
    const { addNotification } = useContext(NotificationContext)
    return addNotification
}
