import { useState } from 'react';
import {users} from '../../static.json';

const UserList = () => {
    const [userIndex, setUserIndex] = useState(2);
    return (
        <ul className="users items-list-nav">
            {users.map((u, i) => (
                <li
                    key={u.id}
                    className={i === userIndex ? 'selected':null}>
                    <button 
                        className='btn'
                        onClick={() => setUserIndex(i)}>
                        {u.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default UserList;