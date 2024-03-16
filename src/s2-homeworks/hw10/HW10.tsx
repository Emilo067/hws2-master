import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {InitStateType, loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const stateLoading = useSelector<AppStoreType, InitStateType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        let timeId: ReturnType<typeof setTimeout> | null = null; // Типизировать переменную timeId

        // Очистка предыдущего таймера (если есть)
        if (timeId) {
            clearTimeout(timeId);
        }

        // dispatch
        dispatch(loadingAC(!stateLoading.isLoading));

        // setTimeout
        timeId = setTimeout(() => {
            dispatch(loadingAC(false));
        }, 1500);
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {stateLoading.isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
