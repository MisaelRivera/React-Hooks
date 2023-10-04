import { users } from '../../static.json'

const UserPicker = () => {
    return (
        <select>
            {users.map(user => (
                <option key={user.name}>
                    {user.name}
                </option>
            ))}
        </select>
    );
};

export default UserPicker;