import { IPhones } from "../typings";

//遇到对象不是定义type就是定义接口 interface
// 推荐用interface定义，原因是interface可以继承

export const PHONES: IPhones[] = [
    {
        id: 1,
        name: 'IPhone 12',
        limit: 3,
        color: [
            {
                cid: 1,
                mark: 'black',
                title: '黑色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 2,
                mark: 'white',
                title: '白色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 3,
                mark: 'blue',
                title: '海蓝色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            }
        ],
        version: [
            {
                vid: 1,
                mark: '64',
                title: '64GB',
                price: 6299
            },
            {
                vid: 2,
                mark: '12',
                title: '128GB',
                price: 6799
            }
        ]
    },
    {
        id: 2,
        name: 'IPhone 12 mini',
        limit: 3,
        color: [
            {
                cid: 1,
                mark: 'black',
                title: '黑色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 2,
                mark: 'white',
                title: '白色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 3,
                mark: 'blue',
                title: '海蓝色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            }
        ],
        version: [
            {
                vid: 1,
                mark: '64',
                title: '64GB',
                price: 6299
            },
            {
                vid: 2,
                mark: '12',
                title: '128GB',
                price: 6799
            }
        ]
    },
    {
        id: 3,
        name: 'IPhone 12 pro max',
        limit: 3,
        color: [
            {
                cid: 1,
                mark: 'black',
                title: '黑色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 2,
                mark: 'white',
                title: '白色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 3,
                mark: 'blue',
                title: '海蓝色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            }
        ],
        version: [
            {
                vid: 1,
                mark: '64',
                title: '64GB',
                price: 6299
            },
            {
                vid: 2,
                mark: '12',
                title: '128GB',
                price: 6799
            }
        ]
    },
    {
        id: 4,
        name: 'IPhone 12 pro max',
        limit: 3,
        color: [
            {
                cid: 1,
                mark: 'black',
                title: '黑色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 2,
                mark: 'white',
                title: '白色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            },
            {
                cid: 3,
                mark: 'blue',
                title: '海蓝色',
                img: 'https://res.ycoffee.net/Upd/joova920CY7.jpg'
            }
        ],
        version: [
            {
                vid: 1,
                mark: '64',
                title: '64GB',
                price: 6299
            },
            {
                vid: 2,
                mark: '12',
                title: '128GB',
                price: 6799
            }
        ]
    }
]