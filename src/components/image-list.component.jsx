import React from 'react';
import { List, Image, Divider } from 'semantic-ui-react';

export const ImageList = props => (
    <div>
        {props.monsters.map(monster => (
            <List key={monster.id} monster={monster}>
                <List.Item>
                    <Image
                        avatar
                        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                    />
                    <List.Content>
                        <List.Header>{monster.name}</List.Header>
                        {monster.company.name}
                    </List.Content>
                    <Divider hidden />
                </List.Item>
            </List>
        ))}
    </div>
);
