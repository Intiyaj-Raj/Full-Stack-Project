import React, { useEffect, useState } from "react";
import { FaTimesCircle, FaSearch } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";
import LogoShopping from "../assets/logo.png";

const SearchData = ({ onClose }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const dispatch = useDispatch();

  // Add to Cart
  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      }),
    );

    toast.success(`${item.productName} added to cart!`, {
      duration: 2000,
      position: "top-right",
    });
  };

  // Debounce Search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetch(
          `https://full-stack-project-cw6d.onrender.com/api/search?q=${search}`,
        )
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            console.log(result);
            setSearchResult(result.data || []);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong!");
          });
      } else {
        setSearchResult([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  // Prevent Background Scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-[999] overflow-y-auto">
      {/* ================= HEADER ================= */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-200 via-purple-200 to-white shadow-xl border-2 border-b-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative gap-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={LogoShopping} alt="Logo" className="h-28 w-auto" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-2 sm:mx-4">
              <div className="relative">
                {/* <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-lg z-10" /> */}

                <input
                  type="text"
                  placeholder="Search products here..."
                  autoFocus
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="
                    w-full
                    bg-gray-300
                    rounded-full
                    pl-5
                    pr-12
                    py-2
                    shadow-sm
                    text-sm
                    text-gray-800
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-500
                    transition-all
                  "
                />

                {/* Clear Search */}
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                      hover:text-red-500
                      transition-colors
                    "
                  >
                    <FaTimesCircle className="text-lg" />
                  </button>
                )}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => onClose(false)}
              className="
                flex
                flex-shrink-0
                w-10
                h-10
                items-center
                justify-center
                rounded-full
                text-gray-700
                hover:bg-red-500
                hover:text-white
                active:scale-95
                transition-all
              "
            >
              <FaTimesCircle className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Search Heading */}
        {search.trim() && (
          <div className="mb-6">
            <p className="text-sm text-gray-500">Search results for</p>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              "{search}"
            </h1>
          </div>
        )}

        {/* Product Results */}
        {searchResult.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {searchResult.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-2xl
                  border
                  border-gray-200
                  overflow-hidden
                  hover:border-gray-300
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* Product Image */}
                <div
                  className="
                    relative
                    h-56
                    bg-gray-50
                    overflow-hidden
                  "
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-6
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />

                  {/* Category */}
                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      px-3
                      py-1
                      rounded-full
                      bg-white/90
                      backdrop-blur
                      text-xs
                      font-semibold
                      text-gray-700
                      shadow-sm
                    "
                  >
                    {item.productCategory}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h2
                    className="
                      font-bold
                      text-lg
                      text-gray-900
                      line-clamp-1
                      group-hover:text-gray-600
                      transition-colors
                    "
                  >
                    {item.productName}
                  </h2>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      mt-4
                    "
                  >
                    {/* Price */}
                    <p
                      className="
                        text-2xl
                        font-bold
                        text-green-600
                      "
                    >
                      ₹{item.productPrice}
                    </p>

                    {/* Add To Cart */}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="
                        px-4
                        py-2.5
                        rounded-full
                        bg-black
                        text-white
                        text-sm
                        font-semibold
                        whitespace-nowrap
                        hover:bg-gray-800
                        active:scale-95
                        transition-all
                        duration-300
                      "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div
            className="
              min-h-[60vh]
              flex
              items-center
              justify-center
            "
          >
            <div className="text-center">
              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  mb-5
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                "
              >
                <FaSearch
                  className="
                    text-2xl
                    text-gray-400
                  "
                />
              </div>

              {search.trim() ? (
                <>
                  <h2
                    className="
                      text-xl
                      font-bold
                      text-gray-800
                    "
                  >
                    No products found
                  </h2>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >
                    Try searching with a different keyword.
                  </p>
                </>
              ) : (
                <>
                  <h2
                    className="
                      text-xl
                      font-bold
                      text-gray-800
                    "
                  >
                    Search for products
                  </h2>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >
                    Find your favorite products quickly.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchData;
