import User from "./User";

export type TUserBox = {
    userInfo: Object,
    className: string,
};

const UserBox = ({ userInfo }: TUserBox) => {
    return (
        <div className='user-box-container'>
            {
                userInfo && (
                    <>
                        <User userInfo={userInfo} />
                    </>
                )
            }
        </div>
    );
};

export default UserBox;
