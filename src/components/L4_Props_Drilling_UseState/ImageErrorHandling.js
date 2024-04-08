import './ImageErrorHandling.css'
import img1 from '../../Images/images/img1.jpg'
import img2 from '../../Images/images/img2.jpg'
import img3 from '../../Images/images/img3.jpg'


const blogs = [
    {
        id: '01',
        title: 'How to learn Javascript',
        cover: img1,
    },
    {
        id: '02',
        title: 'ReactJS beginners guide',
        cover:
            'https://images.unsplash.com/photo-6f2b6890edc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
        id: '03',
        title: 'HTML semantic tags',
        cover: img2
    },
    {
        id: '04',
        title: 'Customize Radio Button',
    },
]

function ImageErrorHandling() {
    // const [imgCount, setImgCount] = useState();

    const placeholderImage = img3;
    const onImageError = (e) => {
        alert("Image Src not valid Fixing the Error....");
        e.target.src = placeholderImage
    }


    return (
        <div className="container blogs-page">
            <h2 className="page-title">Popular Blogs</h2>
            <div className="blog-section">
                {blogs.map(({ id, title, cover }) => (
                    <div className="blogs" key={id}>
                        <img
                            src={cover ? cover : placeholderImage}
                            alt="coverImage"
                            onError={onImageError}
                        />
                        <h3>{title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageErrorHandling