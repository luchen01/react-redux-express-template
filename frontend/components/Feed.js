import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';

const Feed = ({ }) => {
    return (
        <div>
          Feed
        </div>
    );
};

Feed.propTypes = {};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default Feed;
