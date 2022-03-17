import React, { FC, ReactElement } from 'react';
import './index.scss';

interface IProps {
    count: number;
    setCount: (type: COUNT_TYPE) => void;
}

// 一个变量有多个确定的值的时候使用枚举，枚举既可以做值，也可以做类型

export enum COUNT_TYPE {
    PLUS = 'plus',
    MINUS = 'minus'
}

const Selector: FC<IProps> = ({
    count,
    setCount
}): ReactElement => {
    return (
        <div className='selector'>
            <h2>选择数量：</h2>
            <button onClick={() => setCount(COUNT_TYPE.MINUS)}>-</button>
            <input type="Number" readOnly value={count || 0} />
            <button onClick={() => setCount(COUNT_TYPE.PLUS)}>+</button>
        </div>
    )
}

export default Selector;