const app = require('express')()
const port = 3000
const cors = require('cors')

app.use(cors())

app.listen(process.env.PORT || port, () => console.log(`listening on ${port}`))

const data = [
    {
        id: '0',
        title: '8 Close road',
        desc: 'This elegant home boasts a timeless architectural design, featuring a blend of modern sophistication and classic allure.',
        image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
        tags: ['sold', '433,000'],
        rooms: [
            {
                room: 'Kitchen',
                desc: 'Modern kitchen located at the back of the property, which gives beautiful views of the garden.',
                image: 'https://images.squarespace-cdn.com/content/v1/5852dd32b8a79b821f127929/1491399134561-1USYBM33QVB2CA15511R/360-demo-kitchen-banner-sm.jpg?format=2500w'
            }, 
            {
                room: 'Master bedroom',
                desc: 'Spacious yet cozy master bed acompanied by an en suite.',
                image: 'https://i0.wp.com/www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg?fit=1200%2C600'
            },
            {
                room: 'Spare bedroom',
                desc: 'Marble floor along side a window which grants views to the backgarden.',
                image: 'https://media.istockphoto.com/photos/modern-studio-apartment-360-equirectangular-panoramic-interior-picture-id1096104636?k=6&m=1096104636&w=0&h=h1ERexObDBLvSKFvWs_6qI8viLrfPapfgwGwwIgpZ6U='
            }
        ]
    },
    {id: '1',
    title: '123 Maple Street',
    desc: 'Cozy suburban home with a garden, perfect for families seeking a peaceful neighborhood.',
        image: 'https://www.build-review.com/wp-content/uploads/2021/05/House.jpg',
        tags: ['listed', '234,560'],
        rooms: [
            {
                room: 'Master bedroom',
                desc: 'Mirrors strategically placed throughout the room not only enhance the natural light but also create a sense of openness, reflecting the rooms soothing color palette.',
                image: 'https://cdn.myportfolio.com/5a4599b2fb32555ba8fdf24bdeba363c/f59c1f7f-2685-494c-bd9b-18e984903f9a_rw_1200.jpg?h=94fd7a850326bdb3b82ddac25bca2b85'
            }, 
            {
                room: 'Kitchen diner',
                desc: 'The kitchens ample size allows for a seamless layout, featuring sleek stainless steel appliances and a spacious granite countertop for both style and functionality.',
                image: 'https://t3.ftcdn.net/jpg/03/72/17/20/360_F_372172035_rtlhHVky4cdnlNfGx0H75hDryeDYMZj3.jpg'
            }
        ]
    },
    {
        id: '2',
        title: '456 Oak Avenue',
        desc: 'Modern apartment complex offering amenities like a pool and fitness center for active lifestyles.',
        image: 'https://mywallworks.com/wp-content/uploads/2019/08/architectural-design-architecture-country-home-2287310-min-e1569791982979.jpg',
        tags: ['sold', '654,500'],
        rooms: [
            {
                room: 'Living space',
                desc: 'Cozy, joint living room and kitchen, accompanied by a large patio door ',
                image: 'https://cdnb.artstation.com/p/assets/panos/images/025/189/167/large/mohammx-shirbeigi-shirbeigi-kitchen-and-interior-design-360-vr-render-2-lowres.jpg?1584961186'
            }, 
            {
                room: 'Master bedroom',
                desc: 'Cozy up with the soft textures of the bedding and rugs, inviting you to relax and unwind in this inviting space.',
                image: 'https://cf.bstatic.com/xdata/images/xphoto/2560x1280/133646765.jpg?k=9ffadee60f2ceb3ad53bbbe8ec5825d0c3ec0faa775f25e66377ef455ff982c0&o='
            }
        ]
    },
    {id: '3',
    title: '789 Pine Lane',
    desc: 'Quaint cottage nestled in a forested area, ideal for nature lovers and quiet retreats.',
        image: 'https://www.devonselectdecorators.co.uk/wp-content/uploads/2021/09/dulux-exterior-house.jpg',
        tags: ['sold', '534,200'],
        rooms: [
            {
                room: 'Master bedroom',
                desc: 'Storage is a breeze with the spacious layout, incorporating a walk-in wardrobe and built-in closets without sacrificing the rooms comfortable feel.',
                image: 'https://cf.bstatic.com/xdata/images/xphoto/2560x1280/116692824.jpg?k=fac0585bb40b07a532493c2ccf2c1505a116014e9b3f7c0164c695fdd98227a8&o='
            }, 
            {
                room: 'Living room',
                desc: 'Unique living space carried by its floor to roof windows which allow great views into the sky day or night.',
                image: 'https://production-cdn.momento360.com/e/u/80781f8ce3984d86bfdf50bbe531e348/sphere/preview'
            }
        ]
    },
    {
        id: '4',
        title: '101 Elm Court',
        desc: 'Spacious ranch-style house with a large backyard, great for hosting gatherings and outdoor activities.',
        image: 'https://s42814.pcdn.co/wp-content/uploads/2002/03/iStock_1223022367-1-scaled-1.jpg.optimal.jpg',
        tags: ['listed', '645,000'],
        rooms: [
            {
                room: 'Living space',
                desc: 'Open-plan, spacious layout designed with ease of navigation and lighting.',
                image: 'https://az.360-data.com/tours/AaGzqFmkzgFcetCsYglb11JPGjpg'
            }, 
            {
                room: 'Master bedroom',
                desc: 'Humble, bright master with a walk-in wardrobe and plenty of space for a king-size bed.',
                image: 'https://az.360-data.com/tours/8xVSGW3XT0VSnWHQqjCFSj6R0010447jpgjpg'
            }
        ]
    },
    {id: '5',
    title: '234 Cedar Road',
    desc: 'Charming townhouse near downtown, convenient for those wanting a vibrant city experience.',
        image: 'https://i.pinimg.com/originals/e9/20/78/e92078c80e4ff899f6c35c55f8dadbe5.jpg',
        tags: ['listed', '325,900'],
        rooms: [
            {
                room: 'Living room',
                desc: 'Tucked into the corner of the house, this room is the corner stone of the house.',
                image: 'https://gc.360-data.com/tours/XZYCMbGIP/XZYCMbGIP-9xlWGs9UacmI-scene.jpg'
            }, 
            {
                room: 'Living space',
                desc: 'Open-plan living space with as much natural light entering in as possible.',
                image: 'https://az.360-data.com/tours/M2dO2hSJTyAprnHLAEBpLivingRoom3jpgjpg'
            }
        ]
    }
]

app.get('/:filter', (req, res) => {
    const filter = req.params.filter

    if (filter !== 'all') {
        const returnData = data.filter(item => item.tags.includes(filter))
        res.status(200).json(returnData)
    } else {
        const basicInfomation = data.map(({ rooms, ...other }) => other)
        res.status(200).json(basicInfomation)
    }  
})

app.get('/property/:id', (req, res) => {
    const id = req.params.id

    const returnProperty = data.filter(property => property.id === id)

    if (returnProperty) {
        res.status(200).json(returnProperty)
    } else {
        res.status(400).json('no data found')
    }

})