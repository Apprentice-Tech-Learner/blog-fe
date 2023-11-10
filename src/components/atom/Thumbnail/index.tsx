import classNames from "classnames";

type TThumbnail = {
    src: string,
    className?: string,
}

const Thumbnail = ({ src, className }: TThumbnail) => {
    return (
        <>
            {src ? <img alt='thumbnail' src={src} className='jdu-thumbnail' /> :
                <img alt='thumbnail' src='https://static.velog.io/static/media/empty-thumbnail.78a8eb1e.svg' className={classNames('jdu-thumbnail', className)} />}
        </>
    );
};

export default Thumbnail;
