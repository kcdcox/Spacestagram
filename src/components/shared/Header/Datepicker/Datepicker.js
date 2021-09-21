import React from 'react';
import { useDispatch } from 'react-redux'
import { DatePicker } from 'antd';
import moment from 'moment';

import { jumpToDate  } from '../../../../app/MainSlice';
import "antd/dist/antd.css";
import './Datepicker.scss';

const Datepicker = props => {
    const dispatch = useDispatch(); 

    // Jumps to new date or today if datepicker date is cleared
    const handleJumpToDate = (date) => {
        dispatch(jumpToDate(date === null ? moment().format("YYYY-MM-DD") : moment(date).format("YYYY-MM-DD")))
    }

    return (
        <div className="datepicker__container" data-testid="datepicker">
            <div className="datepicker__start-date-container">
                <DatePicker 
                    placeholder="JUMP TO DATE"
                    disabledDate={(e) => moment(e).isAfter(moment())}
                    onChange={(date) => handleJumpToDate(date)} />
            </div>
        </div>
    )
}

export default Datepicker;