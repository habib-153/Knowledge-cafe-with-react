/* eslint-disable react/prop-types */

const Book = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-[#FFF] ml-2 my-2 p-2 rounded-xl">
           <h3 className="text-2xl font-semibold">{title}</h3> 
        </div>
    );
};

export default Book;