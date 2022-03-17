import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../services";
import { IPhones, IFlatPhones, IPhoneColor, IState } from "../typings";
import { Dispatch } from 'redux';
import { SET_PHONE_LIST } from "../store/actionTypes";
import { COUNT_TYPE } from "../components/Selector";

function usePhoneList(): IPhones[] {
    const [phoneList, setPhoneList] = useState<IPhones[]>([]);
    const dispatch: Dispatch = useDispatch();

    useEffect(() => {
        try {
            getPhones<IPhones[]>().then((data) => {
                dispatch({
                    type: SET_PHONE_LIST,
                    payload: data
                })
                setPhoneList(data);
            })
        } catch (e) {
            console.log('Error' + e);
        }
    }, [dispatch]);

    return phoneList;
}

function useFlatPhoneList(phoneList: IPhones[]): IFlatPhones[] {
    let flatPhoneList: IFlatPhones[] = [];

    phoneList.map((phone: IPhones) => {
        phone.color.map((c: IPhoneColor) => {
            flatPhoneList.push({ ...phone, currentColor: c });
            return c;
        })
        return phone;
    })

    return flatPhoneList;
}

function usePhoneDetail(id: string): IPhones | undefined {

    const phoneList = useSelector((state: IState) => state.phoneList)

    return phoneList?.find((phone: IPhones) => phone.id === parseInt(id));
}

function useCount(defaultCount: number, limit: number): [number, (type: COUNT_TYPE) => void] {
    const [count, setCount] = useState<number>(defaultCount);

    const setCurrentCount = function (type: COUNT_TYPE) {
        setCount((count: number) => {
            switch (type) {
                case COUNT_TYPE.MINUS:
                    if (count <= 1) {
                        return count
                    }
                    return count - 1;
                case COUNT_TYPE.PLUS:
                    if (count >= limit) {
                        return count
                    }
                    return count + 1;
                default:
                    return count;
            }
        })
    }

    return [count, setCurrentCount];
}

export {
    usePhoneList,
    useFlatPhoneList,
    usePhoneDetail,
    useCount
}