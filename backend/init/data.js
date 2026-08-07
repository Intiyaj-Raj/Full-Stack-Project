const sampleProducts = [
    {
        "productName": "Coffee cup",
        "productPrice": 17,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/coffee-cup"
    },
    {
        "productName": "Tea cup",
        "productPrice": 19,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/tea-cup"
    },
    {
        "productName": "Cappuccino",
        "productPrice": 8,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/cappuccino"
    },
    {
        "productName": "Coffee beans",
        "productPrice": 18,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/coffee-beans"
    },
    {
        "productName": "Donuts",
        "productPrice": 16,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/donuts"
    },
    {
        "productName": "Muffin",
        "productPrice": 4,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/muffin"
    },
    {
        "productName": "Croissant",
        "productPrice": 8,
        "productCategory": "Cafe",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/croissant"
    },
    {
        "productName": "Table lamp",
        "productPrice": 72,
        "productCategory": "Home",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/table-lamp"
    },
    {
        "productName": "Wall clock",
        "productPrice": 34,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/wall-clock"
    },
    {
        "productName": "Cushion",
        "productPrice": 99,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/cushion"
    },
    {
        "productName": "Flower vase",
        "productPrice": 93,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/flower-vase"
    },
    {
        "productName": "Bedsheet",
        "productPrice": 87,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/bedsheet"
    },
    {
        "productName": "Storage basket",
        "productPrice": 41,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/storage-basket"
    },
    {
        "productName": "Indoor plant",
        "productPrice": 115,
        "productCategory": "Home",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/indoor-plant"
    },
    {
        "productName": "Teddy bear",
        "productPrice": 13,
        "productCategory": "Toys",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/teddy-bear"
    },
    {
        "productName": "Toy car",
        "productPrice": 13,
        "productCategory": "Toys",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/toy-car"
    },
    {
        "productName": "Building blocks",
        "productPrice": 39,
        "productCategory": "Toys",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/building-blocks"
    },
    {
        "productName": "Toy train",
        "productPrice": 46,
        "productCategory": "Toys",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/toy-train"
    },
    {
        "productName": "Remote control car",
        "productPrice": 59,
        "productCategory": "Toys",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/remote-control-car"
    },
    {
        "productName": "Doll",
        "productPrice": 12,
        "productCategory": "Toys",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/doll"
    },
    {
        "productName": "Toy robot",
        "productPrice": 51,
        "productCategory": "Toys",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/toy-robot"
    },
    {
        "productName": "Red apples",
        "productPrice": 5,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/red-apples"
    },
    {
        "productName": "Bananas",
        "productPrice": 1,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/bananas"
    },
    {
        "productName": "Oranges",
        "productPrice": 6,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/oranges"
    },
    {
        "productName": "Tomatoes",
        "productPrice": 7,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/tomatoes"
    },
    {
        "productName": "Potatoes",
        "productPrice": 4,
        "productCategory": "Fresh",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/potatoes"
    },
    {
        "productName": "Carrots",
        "productPrice": 5,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/carrots"
    },
    {
        "productName": "Broccoli",
        "productPrice": 2,
        "productCategory": "Fresh",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/broccoli"
    },
    {
        "productName": "Laptop",
        "productPrice": 179,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/laptop"
    },
    {
        "productName": "Bluetooth speaker",
        "productPrice": 566,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/bluetooth-speaker"
    },
    {
        "productName": "Headphones",
        "productPrice": 493,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/headphones"
    },
    {
        "productName": "Smartwatch",
        "productPrice": 434,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/smartwatch"
    },
    {
        "productName": "Wireless keyboard",
        "productPrice": 143,
        "productCategory": "Electronics",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/wireless-keyboard"
    },
    {
        "productName": "Computer mouse",
        "productPrice": 227,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/computer-mouse"
    },
    {
        "productName": "Power bank",
        "productPrice": 552,
        "productCategory": "Electronics",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/power-bank"
    },
    {
        "productName": "Modern smartphone",
        "productPrice": 420,
        "productCategory": "Mobile",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/modern-smartphone"
    },
    {
        "productName": "Smartphone with camera",
        "productPrice": 1227,
        "productCategory": "Mobile",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/smartphone-with-camera"
    },
    {
        "productName": "Smartphone with colorful screen",
        "productPrice": 474,
        "productCategory": "Mobile",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/smartphone-with-colorful-screen"
    },
    {
        "productName": "Foldable smartphone",
        "productPrice": 1378,
        "productCategory": "Mobile",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/foldable-smartphone"
    },
    {
        "productName": "Budget smartphone",
        "productPrice": 397,
        "productCategory": "Mobile",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/budget-smartphone"
    },
    {
        "productName": "Premium smartphone",
        "productPrice": 653,
        "productCategory": "Mobile",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/premium-smartphone"
    },
    {
        "productName": "Smartphone with charging cable",
        "productPrice": 299,
        "productCategory": "Mobile",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/smartphone-with-charging-cable"
    },
    {
        "productName": "Perfume bottle",
        "productPrice": 26,
        "productCategory": "Beauty",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/perfume-bottle"
    },
    {
        "productName": "Face cream",
        "productPrice": 68,
        "productCategory": "Beauty",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/face-cream"
    },
    {
        "productName": "Lipstick",
        "productPrice": 81,
        "productCategory": "Beauty",
        "productStatus": "Out-Of-Stock",
        "productImage": "https://loremflickr.com/600/600/lipstick"
    },
    {
        "productName": "Shampoo bottle",
        "productPrice": 36,
        "productCategory": "Beauty",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/shampoo-bottle"
    },
    {
        "productName": "Face serum",
        "productPrice": 48,
        "productCategory": "Beauty",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/face-serum"
    },
    {
        "productName": "Makeup brush",
        "productPrice": 69,
        "productCategory": "Beauty",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/makeup-brush"
    },
    {
        "productName": "Moisturizer",
        "productPrice": 18,
        "productCategory": "Beauty",
        "productStatus": "In-Stock",
        "productImage": "https://loremflickr.com/600/600/moisturizer"
    }
];

module.exports = { data: sampleProducts };