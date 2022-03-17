import React, { FC, ReactElement, useEffect } from 'react';
import Header from '../components/Header';
import PhoneList from '../components/PhoneList';
import { useFlatPhoneList, usePhoneList } from '../hooks';

interface IProps { };

const Home: FC<IProps> = (): ReactElement => {

    const phoneList = usePhoneList();
    const flatPhoneList = useFlatPhoneList(phoneList);
    console.log(phoneList, 222, flatPhoneList);

    return (
        <div className='container' style={{ width: '100%' }}>
            <Header headerTitle='主页' iconShow={true}></Header>
            {
                phoneList && <PhoneList phoneList={flatPhoneList} />
            }
        </div >
    )
}

export default Home;