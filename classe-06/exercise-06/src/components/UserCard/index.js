import './styles.css';

export default function UserCard({
    imageProfile,
    name,
    instagramAddress,
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
            <span>{instagramAddress}</span>
            <p>{numberFollowers + ' seguidores'}</p>
            <p>{numberFollowing + ' seguindo'}</p>
        </div>
    )
}