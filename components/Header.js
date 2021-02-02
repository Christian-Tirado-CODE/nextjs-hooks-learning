import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className="title">
                 Learning  <span>Next.js</span>
            </h1>
            <style jsx>
              {`
                .title {
                    font-size: 80px;
                    text-align: center;
                }
                  span {
                      color: lightgrey;
                  }
                  `
              }
            </style>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
        </div>
    );
};

export default Header;