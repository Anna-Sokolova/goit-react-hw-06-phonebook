//Libs
import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

//Components
import Title from './components/Title';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  // componentDidMount() {
  //   //получаем данные с LS при создании компонента
  //   const savedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(savedContacts);

  //   // делаем проверку на null и перезаписываем state
  //   if (parsedContacts) {
  //     this.setState({
  //       contacts: parsedContacts,
  //     });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   // console.log('Текущее состояние ', prevState);
  //   // console.log('Начальное состояние ', this.state);

  //   //делаем проверку на неравенство данных перед сохранением в LS
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  //метод для добавления данных в разметку при получении данных с component ContactForm в Арр
  // addContact = data => {
  //   // console.log(data.name);
  //   const findName = this.state.contacts.find(
  //     contact => contact.name === data.name,
  //   );

  //   if (findName) {
  //     alert(`${data.name} is already in contacts!`);
  //     return;
  //   }

  //   const newContactDate = {
  //     id: shortid.generate(),
  //     name: data.name,
  //     number: data.number,
  //   };
  //   // console.log(newContactDate);

  //   this.setState(prevState => ({
  //     contacts: [newContactDate, ...prevState.contacts],
  //   }));
  // };

  render() {
    return (
      <div className="container">
        <Title title="Phonebook" />
        <ContactForm />

        <div className="container">
          <div>
            <Title title="Contacts" />
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
