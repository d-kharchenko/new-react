import React from 'react';
import './callback.css'

class CallBackForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            subject: '',
            text: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onButton = this.onButton.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)

    }
    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    onButton(){
        console.log(this.state)

    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="contacts-form">
                <h2 className="contacts-form__title">Зворотній зв'язок</h2>
                <div className="contacts-form__name">
                    <label className="contacts-form__label">Ваше ім'я</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                    />
                </div>
                <div className="contacts-form__mail">
                    <label className="contacts-form__label">E-mail</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        name="email"
                    />
                </div>
                <div className="contacts-form__subject">
                    <label className="contacts-form__label">Тема</label>
                    <input
                        value={this.state.subject}
                        onChange={this.onChange}
                        type="text"
                        name="subject"
                    />
                </div>
                <div className="contacts-form__text">
                    <label className="contacts-form__label">Ваше повідомлення</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.onChange}
                        name="text"
                        rows="5"
                    />
                </div>
                <div>
                    <button className="contacts-form__submit">Надіслати</button>
                </div>
            </form>
        )
    }
};
export default CallBackForm;