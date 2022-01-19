export const ITEMS = [
    {
        barcode: 5411068681288,
        brand: 'Royal Flush',
        name: 'Playing Cards',
        description: 'Superior Linen Finish premium quality playing cards, official bridge size',
        prices: [
            {
                store: 'Asda',
                data: [
                    {
                        date: 1640525696490,// get date using Date.now()
                        price: 1.49,
                        link: 'https://groceries.asda.com/product/board-games-puzzles/waddingtons-number-1-playing-cards-4-years/1000002783937',
                    }
                ]
            },
            {
                store: 'Home Bargains',
                data: [
                    {
                        date: 1640525699736,// get date using Date.now()
                        price: 1.89,
                        link: 'https://www.homebargains.co.uk/products/14491-jumbo-playing-cards.aspx',
                    }
                ]
            },
            {
                store: 'General',
                data: [
                    {
                        date: 1640525699836,// get date using Date.now()
                        price: 1.79
                    }
                ]
            }
        ],
        image: require("../assets/images/itemImages/5411068681288.png"),
        tags: ['games', 'playing cards', 'bridge',]
    },
    {
        barcode: 6970817350060,
        brand: 'iGPSPORT',
        name: 'Dual Module Cadence Sensor',
        description: 'Easy-to-install wireless sensors that transmit cadence data using ANT+ technology.',
        prices: [
            {
                store: 'Amazon',
                data: [
                    {
                        date: 1636987276000,// get date using Date.now(), which gives epoch UTC now
                        price: 29.49,
                        link: 'https://www.amazon.co.uk/iGPSPORT-Cadence-Sensor-Module-Bluetooth/dp/B06XC1NNTD/ref=sr_1_3?keywords=igpsport+c61&qid=1640530058&sprefix=igpsport%2Caps%2C57&sr=8-3'
                    }
                ]
            },
            {
                store: 'Asda',
                data: [
                    {
                        date: 1636987376000,// get date using Date.now(), which gives epoch UTC now
                        price: 32.99,
                    }
                ]
            }
        ],
        image: require("../assets/images/itemImages/6970817350060.jpg"),
        tags: ['sports', 'cycling',]
    },
    {
        barcode: 8715700118789,
        brand: 'Heinz',
        name: 'Vegan Mayo',
        description: 'We only use quality ingredients with our new [Seriously] Good Vegan Mayo, to make a rich, creamy and irresistibly smooth difference you can taste in every spoonful. With absolutely no artificial colours or flavours, our new plant-based mayo pairs perfectly with everyday foods like sandwiches, salads and chips.',
        prices: [
            {
                store: 'Tesco',
                data: [
                    {
                        date: 1636987386000,
                        price: 2.90,
                        link: "https://www.tesco.com/groceries/en-GB/products/307734756",
                    }

                ]
            },
            {
                store: 'Asda',
                data: [
                    {
                        date: 1636987386985,
                        price: 2.00,
                        link: "https://groceries.asda.com/product/mayonnaise/heinz-seriously-good-vegan-mayo/1000279996070",
                    }

                ]
            }
        ],
        image: require("../assets/images/itemImages/8715700118789.jpg"),
        tags: ['mayo', 'salad',]
    },
    {
        barcode: 4088600104645,
        brand: 'Inspired Cuisine',
        name: 'BBQ Chicken Pizza',
        description: 'Inspired Cuisine Stonebaked Thin & Crispy BBQ Chicken Pizza 325g.',
        prices: [
            {
                store: 'Aldi',
                data: [
                    {
                        date: 1642120833836,
                        price: 1.85,
                        link: 'https://groceries.aldi.co.uk/en-GB/p-inspired-cuisine-stonebaked-thin-crispy-bbq-chicken-pizza-325g/4088600104645'
                    }

                ]
            }
        ],
        image: require("../assets/images/itemImages/4088600104645.jpg"),
        tags: ['ready meal', 'pizza',]
    }
]