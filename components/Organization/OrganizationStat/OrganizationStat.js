import React from 'react';
import organizationStyles from '../../../styles/Organization.module.css';

const OrganizationStat = ({children}) => {
    return (
        <div className={organizationStyles.Organization__Stat}>
            {children}
        </div>
    );
};

export default OrganizationStat;