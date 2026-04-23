import styled from "styled-components";
import sortIcon from "../../assets/icons/SortIcon.png";

const FilterContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 7px;
`;

const Sort = styled.p`
    color: #616161;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SortIcon = styled.img`
    width: 10px;
    height: 11px;
    stroke-width: 1px;
    stroke: #909090;
    display: block;
`;

export default function SortButton() {
  return (
    <FilterContainer>
      <Sort>정렬순</Sort><SortIcon src={sortIcon} alt="정렬 아이콘" />
    </FilterContainer>
  );
}