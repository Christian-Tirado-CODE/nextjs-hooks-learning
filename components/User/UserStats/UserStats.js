import React from 'react';
import userStyles from '../../../styles/User.module.css';
import UserStat from '../UserStat/UserStat';
const userStats = () => {
    return (
        <div className={userStyles.User__Stats}>
            <UserStat>
            <div className={userStyles.User__StatIcon}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14"
             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                 <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 
                 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 
                 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                </path>
                </svg>
                </div>
                <div className={userStyles.User__StatText}>
                    100,000 seguidores 
                </div>
            </UserStat>



            <UserStat>
            <div className={userStyles.User__StatIcon}>
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
                </div>
                <div className={userStyles.User__StatText}>
                    5 events
                </div>
            </UserStat>
           


            <UserStat>
            <div className={userStyles.User__StatIcon}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" 
            class="svg-inline--fa fa-trophy fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 
            0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 
            41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 
            12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 
            39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 
            144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 
            36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z">

            </path>
            </svg>
                </div>
                <div className={userStyles.User__StatText}>
                    5 logros 
                </div>

            </UserStat>



            <UserStat>

            </UserStat>
            
        </div>
    );
};

export default userStats;