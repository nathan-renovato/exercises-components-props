import './styles.css';

export default function UserCard({
    imageProfile,
    name,
    userName,
    numberFollowers,
    numberFollowing

}) {
    return (
        <div className='user-card'>
            <div
                className='profile-picture-card'
                style={{ backgroundImage: `url(${imageProfile})` }}
            >
            </div>
            <h1>{name}</h1>
            <span>{userName}</span>
            <div className='follow-card'>
                <p>{numberFollowers}</p>
                <p> seguidores</p>
            </div>
            <div className='follow-card'>
                <p>{numberFollowing}</p>
                <p> seguindo</p>
            </div>
        </div>
    )
}