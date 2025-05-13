import moment from 'moment-timezone';

import '../styles/components/List.scss';

function List(props: any) {
    const data = moment.tz.names().map((item) => {
        return {
            label: item,
            value: item
        }
    })

    const filteredData = data.filter((element) => {
        if (props.input === '') {
            return element;
        }
        else {
            return element.label.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className='list' onChange={props.country}>
            {
                filteredData.map((item) => (
                    <div className='option' key={item.value}>
                        <input type="radio" id={item.value} name="country" value={item.value} checked={props.selectedCountry === item.value} onChange={props.country} />
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default List