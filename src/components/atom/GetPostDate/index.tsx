type TGetPostDate = {
    postDate: string,
}

const GetPostDate = ({ postDate }: TGetPostDate) => {
    const getPostDate = (date: Date) => {
        const milliSeconds = new Date().getTime() - date.getTime();
        const seconds = milliSeconds / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;
        if (seconds < 360) return `방금 전`;
        else if (minutes < 60) return `${Math.floor(minutes)}분 전`;
        else if (hours < 24) return `${Math.floor(hours)}시간 전`;
        else if (days < 8) return `${Math.floor(days)}일 전`;
        else return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    };

    return (
        <span style={{ color: "inherit" }}>
            {getPostDate(new Date(postDate))}
        </span>
    );
}

export default GetPostDate;
