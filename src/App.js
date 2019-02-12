import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import OrderButton from './components/OrderButton/OrderButton'
import Button from "./components/UI/Button/Button";


class App extends Component {
        constructor(props) {
        super(props);

        this.state = {
            able: true,
            showModal: true,
            title: 'Some kinda modal title',
            modalText: 'Текст модалки',
            buttonConfig: [
              {type: 'primary', label: 'Continue', clicked: this.continued},
              {type: 'danger', label: 'Close', clicked: this.cancelHandler}
            ]
    }};

    buttonHandler = () => {
        this.setState({showModal: true})
    };

    cancelHandler = () => {
        this.setState({showModal: false})
    };

    continued = () => {
        alert('Continue')
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
                    buttonconfig={this.state.buttonConfig}
                >
                    {this.state.buttonConfig.map((item) => {
                        return <Button
                                    type={item.type}
                                    label={item.label}
                                    clicked={item.clicked}
                                >
                                </Button>
                        })}
                </Modal>
            </div>
        );
    }
}

export default App;
