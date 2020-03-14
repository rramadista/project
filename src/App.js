import React, { Component } from 'react';
import { Container, Divider, Header, Message } from 'semantic-ui-react';
import { ImageList } from './components/image-list.component';
import { MenuList } from './components/menu-list.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
            activeItem: 'home',
            menus: [{ name: 'home' }, { name: 'messages' }, { name: 'friends' }]
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value });
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { monsters, searchField, activeItem, menus } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div>
                <Container textAlign='center'>
                    <Divider hidden />
                    <Header as='h1' dividing>
                        Hello World!
                    </Header>
                    <Message>Lorem ipsum dolor sit amet</Message>
                    <MenuList
                        menus={menus}
                        activeItem={activeItem}
                        handleItemClick={this.handleItemClick}
                        handleChange={this.handleChange}
                    />
                    <Divider hidden />
                    <ImageList monsters={filteredMonsters} />
                </Container>
            </div>
        );
    }
}

export default App;
