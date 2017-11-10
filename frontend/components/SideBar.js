import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SubmitPost from '../components/SubmitPost';
import Modal from '../Modal';
import {toggleLoginModal, handleRegister, handleLogin} from '../actions/index';
import {Modal, Button, Form} from 'react-bootstrap';

// import { connect } from 'react-redux';

const SideBar = ({isModalOpen, login, register, toggleModal}) => {
    register()=>{
      axios.post('/register',{
        username: this.refs.username,
        password: this.refs.password
      })
      .then((user)=>{

      })
    }

    handleLogin((username, password)=>{
      axios.post('/login',{
        username: username,
        password: password
      })
      .then((user)=>{

      })
    })

    return (
        <div>
          <SubmitPost />
          <Button className = "btn btn-primary" onClick ={()=>toggleModal()} >Login </Button>
          {/* <Description /> */}
          {isModalOpen ? <Modal/> : <div/>}
          
        </div>
    );
};

SideBar.propTypes = {
    toggleModal: PropTypes.func,
    isModalOpen: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.modalReducer.isModalOpen,
        username: state.modalReducer.username,
        password: state.modalReducer.password
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: ()=>dispatch(toggleLoginModal()),
        // onChange: (e, attr) => dispatch(updateState(e, attr))
        login: ()=>dispatch(handleLogin()),
        register: ()=>dispatch(handleRegister())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar);
