import defaultProfile from 'asset/images/profile.png';

const UserProfileImage = ({ source }) => {
    return (
        <img
            className='user-profile-image-container'
            alt='profile'
            src={source ? source : defaultProfile}
        />
    );
};

export default UserProfileImage;
