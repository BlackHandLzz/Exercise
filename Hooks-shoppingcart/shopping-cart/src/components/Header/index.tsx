import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
interface IProps {
    headerTitle: string;
    iconShow: boolean;
}

const Header: FC<IProps> = ({
    headerTitle,
    iconShow
}): ReactElement => {
    return (
        <div className='header'>
            <div className='back-icon'>
                {
                    iconShow &&
                    <Link to='/' className='iconfont'>
                        &lt;
                    </Link>
                }
            </div>
            <h3>{headerTitle}</h3>
        </div>
    )
}

export default Header;