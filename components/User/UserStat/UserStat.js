import React from 'react';
import userStyles from '../../../styles/User.module.css';

const userStat = ({children}) => {
    return (
        <div className={userStyles.User__Stat}>
            {children}
        </div>
    );
};

export default userStat;