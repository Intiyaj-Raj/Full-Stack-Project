import React, { useEffect, useState } from 'react';
import { FaTimesCircle } from "react-icons/fa";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const SearchData = ({ onClose }) => {

  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])


  // Debounce 
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetch(`/api/search?q=${search}`).then((res) => {
          return res.json()
        }).then((result) => {
          console.log(result)
          setSearchResult(result.data)
        }).catch((err) => {
          toast.error("Something went wrong!")
        })
      }
    }, 300);
    return () => clearTimeout(delayDebounce)
  }, [search])

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // const navigate = useNavigate();


  return (
    <div className='fixed inset-0 bg-white z-[999] p-4 overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <input
          type="text"
          placeholder='Search here......'
          autoFocus
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}

          className='flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600'
        />
        <button className='ml-3 text-gray-700 hover:text-red-600 text-xl' onClick={() => { onClose(false) }}>
          <FaTimesCircle />
        </button>
      </div>

      {/* Result  */}

      <div className='mt-4 space-y-4'>


        {
          searchResult.length > 0 ?
            searchResult.map((item, index) => (
              <div
                // onClick={() => navigate(`/product/${item._id}`)}
                className='flex justify-between items-center shadow-sm rounded-lg border p-3 border-2 border-gray-300'
                key={index}
              >
                <div>
                  <img src={`/uploads/${item.productImage}`} alt={item.productName} className='w-full h-32 object-contain rounded' />
                  <h2 className='font-semibold
               '>{item.productName}</h2>
                  <p className='text-sm text-gray-500'>{item.productCategory}</p>
                </div>
                <p className='font-bold text-lg text-green-600'>₹{item.productPrice}</p>
              </div>
            )) : <p className='text-center text-red-600 text-lg'>No Results Found</p>
        }
      </div>
    </div>
  );
}

export default SearchData;
