import React from 'react';
import BottomNav from '../../components/BottomNav/BottomNav';
import FollowBtn from '../../components/Organization/FollowBtn/FollowBtn';
import OrganizationStats from '../../components/Organization/OrganizationStats/OrganizationStats';
import OrganizationDesc from '../../components/Organization/OrganizationDesc/OrganizationDesc';
import organizationStyles from '../../styles/Organization.module.css';
import Head from 'next/head';

const organization = () => {
    return (
        <>
        <Head>
        <title>Sembrando Sentido - Organization</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="web development, programming" />
      </Head>
            <div className={organizationStyles.Organization}>
                <div className={organizationStyles.Organization__LogoContainer}>
                    <img src="./logo.png" className={organizationStyles.Organization__Logo}/>
                </div>
                <h1>Sembrando Sentido</h1> 
               <OrganizationStats />
                <FollowBtn />
                <OrganizationDesc />
            </div>
            <BottomNav />
        </>
    );
};

export default organization;