import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';

const SubmitPost = ({ }) => {
    return (
        <div>
        <button>Submit Post </button>
        </div>
    );
};

SubmitPost.propTypes = {};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default SubmitPost;
