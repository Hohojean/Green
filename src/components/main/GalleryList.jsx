import GalleryItem from "./GalleryItem";

const GalleryList = ({ datas, currItem, onView }) => {
    const { bannerImage, bannerTitle, bannerDesc } = currItem;

    return (
        <article className="left">
            <h1>{bannerTitle}</h1>
            <p>{bannerDesc}</p>
            <img src={bannerImage} alt={bannerTitle} />
            <ul>
                {
                    datas.map(item =>
                        <GalleryItem key={item.bannerID} item={item} onView={onView} />)
                }
            </ul>
        </article>
    );
};

export default GalleryList;