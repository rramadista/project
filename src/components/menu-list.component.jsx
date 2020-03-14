import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

export const MenuList = props => (
    <div>
        <Menu>
            {props.menus.map(menu => (
                <Menu.Item
                    name={menu.name}
                    active={props.activeItem === menu.name}
                    onClick={props.handleItemClick}
                />
            ))}
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input
                        icon='search'
                        placeholder='Search'
                        onChange={props.handleChange}
                    />
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    active={props.activeItem === 'logout'}
                    onClick={props.handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    </div>
);
