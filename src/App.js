import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import OrderButton from './components/OrderButton/OrderButton'
import Button from "./components/UI/Button/Button";
import Alert from './components/UI/Alert/Alert'


class App extends Component {
        constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showAlert: false,
            clickDismissable: true,
            title: 'Some kinda modal title',
            modalText: 'Модалка',
            alertText: 'Алерт',
            danger: ' alert-danger',
            success: ' alert-success',
            primary: ' alert-primary',
            warning: ' alert-warning',
            buttonConfig: [
              {type: 'primary', label: 'Continue', clicked: this.continued},
              {type: 'danger', label: 'Close', clicked: this.cancelModal}
            ]
    }};

    showModal = () => {
        this.setState({showModal: true})
    };

    cancelModal = () => {
        this.setState({showModal: false})
    };

    showAlert = () => {
        this.setState({showAlert: true})
    };
    cancelAlert = () => {
        this.setState({showAlert: false})
    };

    continued = () => {
        alert('Continue')
    };

    render() {
        return (
            <div className="App">
                <OrderButton click={this.showModal} text={this.state.modalText}/>
                <Modal
                    show={this.state.showModal}
                    cancel={this.cancelModal}
                    title={this.state.title}
                    modaltext={this.state.modalText}
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
                <OrderButton click={this.showAlert} text={this.state.alertText}/>
                 <Alert
                    show={this.state.showAlert}
                    type={this.state.danger}
                    dismiss={undefined}
                    // dismiss={this.cancelAlert}
                    clickDismissable={this.state.clickDismissable}
                    alerttext={this.state.alertText}
                >

                </Alert>

            </div>
        );
    }
}

export default App;
