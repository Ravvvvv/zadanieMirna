import './Select.css'



const Select = ({ values, onValueChange, selectedValue, ...rest }) => {
    return (
        <select value={selectedValue}
            onChange={onValueChange}
            {...rest} >
            {values.map(([value, text]) =>
                <option ket={value} value={value}>
                    {text}
                </option>
            )}
        </select>
    )

}

export default Select