import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import classes from './Layout.module.css';

const Layout = () => {
    return (
        <div className={classes.layoutContainer}>
            <div className={classes.layoutContent}>
            <div className={classes.layoutHeader}>
            <Header />
            </div>
            <Main />
                <div className={classes.layoutFooter}>
            <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;