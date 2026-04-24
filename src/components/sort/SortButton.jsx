import { useState } from "react";
import styled from "styled-components";
import sortIcon from "../../assets/icons/SortIcon.png";
import SortModal from "./SortModal";

const SortWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FilterContainer = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
`;

const Sort = styled.p`
  color: #616161;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  margin: 0;
`;

const SortIcon = styled.img`
  width: 10px;
  height: 11px;
  display: block;
`;

export default function SortButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("기본 정렬순");

  return (
    <SortWrapper>
      <FilterContainer onClick={() => setIsOpen((prev) => !prev)}>
        <Sort>정렬순</Sort><SortIcon src={sortIcon} />
      </FilterContainer>

      {isOpen && (
        <SortModal
          selectedSort={selectedSort}
          onSelect={(option) => {
            setSelectedSort(option);
            setIsOpen(false);
          }}
        />
      )}
    </SortWrapper>
  );
}