import { useState } from 'react';
import {bookables} from '../../static.json';

const BookablesList = () => {
    const [bookableIndex, setBookableIndex] = useState(1);
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);


    const changeBookable = (selectedIndex) => {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }; 

    return (
        <ul className="bookables items-list-nav">
            {bookablesInGroup.map((b, i) => (
                <li
                    key={b.id}
                    className={i === bookableIndex ? 'selected':null}>
                    <button 
                        className='btn'
                        onClick={() => changeBookable(i)}>
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default BookablesList;