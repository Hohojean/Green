
const GalleryItem = ({ item, onView }) => {
    const { bannerImage, bannerTitle, bannerID } = item
    return (
        <li onClick={() => onView(bannerID)}>
            <img src={bannerImage} alt={bannerTitle} />
        </li>
    );
};

export default GalleryItem;