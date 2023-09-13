/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleAddTime}) => {
    const {id, title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (

        <div className="space-y-3 mb-10 mt-4 w-[90%]">
            <img className="w-full rounded-xl" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center">
               <div className="flex gap-4">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold text-xl">{author}</h3>
                        <p className="text-[rgba(16,16,16,0.58)]">{posted_date}</p>
                    </div>
               </div>
               <div className='flex items-center'>
                    <span className="text-[rgba(16,16,16,0.58)]">{reading_time} minute read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                    className='ml-2 text-lg'><FaBookmark></FaBookmark></button>
               </div> 
            </div>
            
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-[rgba(16,16,16,0.58)]">
                {
                    hashtags.map((hash,idx) => <span className="ml-3" key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=> handleAddTime(id, reading_time)}
            className='text-[#6047EC] underline' 
            >Mark As Read</button>

        </div>
    );
};

export default Blog;