import React, {useEffect, useState} from 'react';
import './App.css';
import {ListItem} from "./ListItem";
import type {User} from "./type/user";

export const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers([
            {
                "id": 1,
                "name": "Brian Tanaka",
                "age": 38,
                "personalColor": "blue",
            }, {
                "id": 2,
                "name": "Mark Kato",
                "age": 49,
                "personalColor": "brown",
            }, {
                "id": 3,
                "name": "Syuji CarboP",
                "age": 32,
                "hobbies": ["racing", "game"]
            },
        ]);
    }, []);

    return (
        <div>
            {users.map(user => (
                <ListItem key={user.id} id={user.id} name={user.name} age={user.age}
                          personalColor={user.personalColor} hobbies={user.hobbies}/>
            ))}
        </div>
    );
}

export default App;
