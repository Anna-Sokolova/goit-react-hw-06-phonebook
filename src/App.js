//Libs
import { Component } from 'react';

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
