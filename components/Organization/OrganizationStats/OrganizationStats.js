import React from 'react';
import organizationStyles from '../../../styles/Organization.module.css';
import OrganizationStat from '../OrganizationStat/OrganizationStat';
const OrganizationStats = () => {
    return (
        <div className={organizationStyles.Organization__Stats}>
            <OrganizationStat />
            <OrganizationStat />
            <OrganizationStat />
            <OrganizationStat />
        </div>
    );
};

export default OrganizationStats;