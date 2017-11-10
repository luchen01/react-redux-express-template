import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';

const Header = ({ }) => {
    return (
        <div>
          <img src = "http://i.imgur.com/sdO8tAw.png" style = {{height: '50px', width: '50px'}}/>
          <h1> This is the Reddit Page </h1>
        </div>
    );
};

// Header.propTypes = {};

// const mapStateToProps = () => {
//     return {
//
//     };
// };
//
// const mapDispatchToProps = (/* dispatch */) => {
//     return {
//     };
// };

export default Header;
