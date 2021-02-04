import React from 'react';
import BottomNav from '../BottomNav';
import BottomNavStyles from '../../../styles/BottomNav.module.css';
const BottomNavItem = ({children, isActive}) => {
    return (
        <li className={[BottomNavStyles.BottomNavItem, isActive ? BottomNavStyles.Active : ''].join(' ')}>
            {children}
        </li>
    );
};

export default BottomNavItem;