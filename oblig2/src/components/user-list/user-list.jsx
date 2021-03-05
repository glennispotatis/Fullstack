import UserPreview from '../user-preview/user-preview';
import './user-list.css';

function UserList({ users }) {
	return (
		<div className="UserList">
			{users.map((user) => (
				<UserPreview key={user.name} user={user} />
			))}
		</div>
	);
}

UserList.defaultProps = {
	users: [],
};
export default UserList;
