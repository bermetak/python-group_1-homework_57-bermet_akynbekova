import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import OrderButton from './components/OrderButton/OrderButton'


class App extends Component {
    state = {
        able: true,
        showModal: true,
        title: 'Some kinda modal title',
        modalText: 'Текст модалки'
    };

    buttonHandler = () => {
        this.setState({showModal: true})
    };

    cancelHandler = () => {
        this.setState({showModal: false})
    };



    render() {
        return (
            <div className="App">
                <OrderButton disabled={!this.state.able} click={this.buttonHandler}/>
                <Modal
                    show={this.state.showModal}
                    cancel={this.cancelHandler}
                    title={this.state.title}
                    modaltext={this.state.modalText}
                >

                </Modal>
            </div>
        );
    }
}

export default App;
