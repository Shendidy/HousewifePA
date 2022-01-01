export const ITEMS = [
    {
        barcode = 5411068681288,
        brand = 'Royal Flush',
        name = 'Playing Cards',
        description = 'Superior Linen Finish premium quality playing cards, official bridge size',
        price = [
            {
                store = 'Asda',
                data = [
                    {
                        date = 1640525696490,// get date using Date.now()
                        price = '£1.49'
                    }
                ]
            },
            {
                store = 'Home Bargains',
                data = [
                    {
                        date = 1640525699736,// get date using Date.now()
                        price = '£1.69'
                    }
                ]
            }
        ],
        image = require("../assets/images/itemImages/5411068681288.png")
    },
    {
        barcode = 6970817350060,
        brand = 'iGPSPORT',
        name = 'Dual Module Cadence Sensor',
        description = 'Easy-to-install wireless sensors that transmit cadence data using ANT+ technology.',
        price = [
            {
                store = 'Amazon',
                data = [
                    {
                        date = 1636987276000,// get date using Date.now(), which gives epoch UTC now
                        price = '£1.49',
                        link = 'https://www.amazon.co.uk/iGPSPORT-Cadence-Sensor-Module-Bluetooth/dp/B06XC1NNTD/ref=sr_1_3?keywords=igpsport+c61&qid=1640530058&sprefix=igpsport%2Caps%2C57&sr=8-3'
                    }
                ]
            }
        ],
        image = require("../assets/images/itemImages/5411068681288.png")
    }
]