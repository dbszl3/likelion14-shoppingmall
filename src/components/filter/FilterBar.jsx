import styled from "styled-components";
import FilterButton from "./FilterButton";

const FilterContainer = styled.div`
    display: inline-flex;
    align-items: cetner;
    gap: 13px;
    margin-left: 153px;
`;

export default function FilterBar() {
    return (
        <FilterContainer>
            <FilterButton name="성별" />
            <FilterButton name="색상" />
            <FilterButton name="사이즈" wide/>
            <FilterButton name="가격대" wide />
            <FilterButton name="종류" />
        </FilterContainer>
    );
}