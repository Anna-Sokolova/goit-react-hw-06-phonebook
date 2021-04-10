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
  state = {
    contacts: [],
    filter: '',
  };

  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
  };

  componentDidMount() {
    //получаем данные с LS при создании компонента
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    // делаем проверку на null и перезаписываем state
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevState) {
    // console.log('Текущее состояние ', prevState);
    // console.log('Начальное состояние ', this.state);

    //делаем проверку на неравенство данных перед сохранением в LS
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  //метод для добавления данных в разметку при получении данных с component ContactForm в Арр
  addContact = data => {
    // console.log(data.name);
    const findName = this.state.contacts.find(
      contact => contact.name === data.name,
    );

    if (findName) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    const newContactDate = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };
    // console.log(newContactDate);

    this.setState(prevState => ({
      contacts: [newContactDate, ...prevState.contacts],
    }));
  };

  //метод для изменения данных в state по вводу в фильтр
  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  //метод для фильтрации массива по имени
  getFilteredByName = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  //метод для удаления контакта по кнопке Удалить
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state; // деструкт свойств обекта state

    const filteredContactByName = this.getFilteredByName();

    return (
      <div className="container">
        <Title title={'Phonebook'} />
        <ContactForm onSubmit={this.addContact} />

        <div className="container">
          {contacts.length > 0 && (
            <>
              <Title title={'Contacts'} />
              <Filter valueFilter={filter} onChangeFilter={this.changeFilter} />
              <ContactList
                contacts={filteredContactByName}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
