import React, { FC, ReactElement } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router';
import { IPhones } from '../typings';
import { usePhoneDetail } from '../hooks';
import DetailPage from '../components/Detail';
/**
 * id: 一个手机的id
 * cid: color id 每一个手机产品对应的颜色的ID
 * vid: version id 每一个手机产品对应的容量邦本的ID
 * count: 用户选择加入该款手机到购物车多少台
 */

interface IProps { };

interface IUrlParams {
    id: string | undefined;
    cid: string | undefined;
    vid: string | undefined;
    count: string | undefined;
}

const Detail: FC<IProps> = (): ReactElement => {

    const { id, cid, vid, count } = useParams();

    if (!id || !cid || !vid) {
        window.location.href = '/';
    }

    const phoneDetail: IPhones | undefined = usePhoneDetail(id!);

    if (!phoneDetail) {
        window.location.href = '/';
    }

    return (
        <div className='container'>
            <Header headerTitle='详情' iconShow={true}></Header>
            {
                phoneDetail && <DetailPage phoneDetail={phoneDetail} cid={parseInt(cid as string)} vid={parseInt(vid as string)} totalCount={parseInt(count as string)} />
            }
        </div>
    )
}

export default Detail;