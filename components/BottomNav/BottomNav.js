import React from 'react';
import BottomNavStyles from '../../styles/BottomNav.module.css';
import BottomNavItem from './BottomNavItem/BottomNavItem';
const BottomNav = () => {
    return (
        <ul className={BottomNavStyles.BottomNav}>
            <BottomNavItem >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 
            343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 
            208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 
            0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 
            0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
            </BottomNavItem>
            
            
            <BottomNavItem >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" 
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 
            158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 
            56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 
            42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 
            448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 
            64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 
            224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z">
                </path>
                </svg>

                
            
            </BottomNavItem>

            <BottomNavItem>
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14"
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 
            12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 
            26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 
            0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z">
            </path>
            </svg>
            </BottomNavItem>
           
            <BottomNavItem >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14"
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                 <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 
                 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 
                 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                </path>
                </svg>

            </BottomNavItem>

            
        </ul>
    );
};

export default BottomNav;