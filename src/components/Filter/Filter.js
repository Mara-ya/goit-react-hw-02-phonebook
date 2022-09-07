import { FilterInput } from "./Filter.styled";

export const Filter = ({inputValue, onChange}) => {
    return (
        <label>
            Find contact by name
            <FilterInput type="text" value={inputValue} onChange={onChange} />
        </label>
    )
}