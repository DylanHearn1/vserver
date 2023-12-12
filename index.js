const app = require('express')()
const port = 3000
const cors = require('cors')

app.use(cors())

// app.listen(
//     PORT,
//     () => console.log(`testing ${PORT}`)
// )

app.listen(process.env.PORT || port, () => console.log(`listening on ${port}`))

app.get('/', (req, res) => {
    res.status(200).send([
        {
            id: '0',
            title: '8 Close road',
            desc: 'This elegant home boasts a timeless architectural design, featuring a blend of modern sophistication and classic allure.',
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
            tags: ['sold', '433,000']
        },
        {id: '1',
        title: '123 Maple Street',
        desc: 'Cozy suburban home with a garden, perfect for families seeking a peaceful neighborhood.',
            image: 'https://www.build-review.com/wp-content/uploads/2021/05/House.jpg',
            tags: ['listed', '234,560']
        },
        {
            id: '2',
            title: '456 Oak Avenue',
            desc: 'Modern apartment complex offering amenities like a pool and fitness center for active lifestyles.',
            image: 'https://mywallworks.com/wp-content/uploads/2019/08/architectural-design-architecture-country-home-2287310-min-e1569791982979.jpg',
            tags: ['sold', '654,500']
        },
        {id: '3',
        title: '789 Pine Lane',
        desc: 'Quaint cottage nestled in a forested area, ideal for nature lovers and quiet retreats.',
            image: 'https://www.devonselectdecorators.co.uk/wp-content/uploads/2021/09/dulux-exterior-house.jpg',
            tags: ['sold', '534,200']
        },
        {
            id: '4',
            title: '101 Elm Court',
            desc: 'Spacious ranch-style house with a large backyard, great for hosting gatherings and outdoor activities.',
            image: 'https://s42814.pcdn.co/wp-content/uploads/2002/03/iStock_1223022367-1-scaled-1.jpg.optimal.jpg',
            tags: ['listed', '645,000']
        },
        {id: '5',
        title: '234 Cedar Road',
        desc: 'Charming townhouse near downtown, convenient for those wanting a vibrant city experience.',
            image: 'https://i.pinimg.com/originals/e9/20/78/e92078c80e4ff899f6c35c55f8dadbe5.jpg',
            tags: ['listed', '325,900']}
    ]
    )
})

app.post('/message', (req, res) => {
 res.send(req.body)
})