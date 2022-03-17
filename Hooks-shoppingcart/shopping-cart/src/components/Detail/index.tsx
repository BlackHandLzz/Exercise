import React, { FC, ReactElement, useCallback, useState } from 'react';
import { IPhones } from '../../typings';
import Banner from './Banner';
import Price from './Price';
import Title from './Title';
import Selector from '../Selector';
import ColorGroup from './ColorGroup';
import VersionGroup from './VersionGroup';
import Bottom from './Bottom';
import { useColor, usePrice } from './hooks';
import { useCount } from '../../hooks';
import './index.scss';

interface IProps {
    phoneDetail: IPhones;
    cid: number;
    vid: number;
    totalCount: number;
};

const DetailPage: FC<IProps> = ({
    phoneDetail,
    cid,
    vid,
    totalCount
}): ReactElement => {

    const { name, limit, color, version } = phoneDetail;
    const [colorId, setColorId] = useState<number>(cid);
    const [versionId, setVersionId] = useState<number>(vid);
    const currentColor = useColor(color, colorId);
    const currentPrice = usePrice(version, versionId);
    const [count, setCurrentCount] = useCount(totalCount, limit);

    const addToCart = useCallback((total: number) => {
        console.log(total);
    }, [])

    return (
        <div className='detail-wrapper'>
            <Banner img={currentColor.img} name={name} />
            <div className='info-wrap'>
                <Title name={name} color={currentColor.title} version={currentPrice.title} />
                <Price limit={limit} price={currentPrice.price} />
                <Selector count={count} setCount={setCurrentCount} />
                <ColorGroup colorId={colorId} colors={color} setColorId={setColorId} />
                <VersionGroup versionId={versionId} versions={version} setVersionId={setVersionId} />
            </div>
            <Bottom count={count} price={currentPrice.price} addToCart={addToCart} />
        </div>
    )
}

export default DetailPage;