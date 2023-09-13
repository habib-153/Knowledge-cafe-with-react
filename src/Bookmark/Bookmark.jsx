/* eslint-disable react/prop-types */

import Book from "../Book/book";

const Bookmark = ({bookmarks, addTime}) => {
    return (
        <div className="w-1/3 space-y-4">
            <div className="text-center font-medium text-xl p-4 bg-[rgba(96,71,236,0.11)] rounded-xl border-2 border-[#6047EC]">
                <h2>Spent time on read : {addTime}</h2>
            </div>
            <div className="p-4 space-y-4 rounded-xl bg-[rgba(19,19,19,0.08)]">
                <h2 className="text-xl pb-2 border-b-2 border-black font-semibold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Book
                key={idx}
                bookmark={bookmark}
                ></Book>)
            }
            </div>
            
        </div>
    );
};

export default Bookmark;