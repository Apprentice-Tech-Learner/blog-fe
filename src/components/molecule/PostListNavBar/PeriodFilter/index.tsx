import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { resetPageNum, setQuery } from "store/navbar";

const PeriodFilter = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [filter, setFilter] = useState('이번 주');
    const dispatch = useDispatch();
    const [filterList, setFilterList] = useState([
        {
            name: '오늘',
            query: 'today',
            view: false,
        },
        {
            name: '이번 주',
            query: 'week',
            view: true,
        },
        {
            name: '이번 달',
            query: 'month',
            view: false,
        },
        {
            name: '올 해',
            query: 'year',
            view: false,
        },
    ]);
    const toggleBtnRef = useRef();
    const toggleBoxRef = useRef();

    return (
        <div className='post-list-nav-bar-period-filter'>
            <div className='trending-category' ref={toggleBtnRef} onClick={() => setIsToggle(!isToggle)}>
                {filter} <MdOutlineArrowDropDown className='arrow' />
            </div>
            <div className={classNames('filter-container', isToggle ? 'toggle' : '')}>
                <ul ref={toggleBoxRef}>
                    {
                        filterList.map((filter, i) => (
                            <li
                                key={filter.name}
                                className={filter.view ? 'active' : ''}
                                onClick={() => {
                                    let arr = [...filterList];
                                    arr.forEach(filter => (filter.view = false));
                                    arr[i].view = true;
                                    setFilterList(arr);
                                    setFilter(filter.name);
                                    dispatch(resetPageNum());
                                    dispatch(setQuery(filter.query));
                                    setIsToggle(false);
                                }}
                            >
                                {filter.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PeriodFilter;
