import Header from './Header/Header'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmark from './Bookmark/Bookmark'
import { useState } from 'react'

function App() {
  
  const [bookmarks, setBookmark] = useState([])
  const [addTime, setAddTime] = useState(0)

  const handleAddTime = (id, time) => {
    const readTime = time + addTime;
    setAddTime(readTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookmarks)
  }

  const handleAddToBookmark = blog => {
      const isExist = bookmarks.find((item) => item.id == blog.id)
      if(isExist){
        return alert("Already Added");
      }
      setBookmark([...bookmarks, blog]);
  }
  return (
    <div className='max-w-6xl mx-auto mt-4'>
      <Header></Header>
      <div className='md:flex mt-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
        handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} addTime={addTime}></Bookmark>
      </div>
      
    </div>
  )
}

export default App
