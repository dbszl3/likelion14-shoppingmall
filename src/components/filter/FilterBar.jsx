import { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import FilterModal from "./FilterModal";

const FilterContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-left: 158px;
  margin-top: 77px;
`;

const filterOptions = {
  성별: {
    rows: [["남성", "여성", "남녀공용"]],
    width: "296px",
  },
  색상: {
    rows: [
      ["red", "pink", "blue"],
      ["black", "gray", "denim"],
      ["multi", "rainbow", "holographic"],
    ],
    width: "384px",
  },
  사이즈: {
    rows: [
      ["9", "10"],
      ["S", "M", "L", "XL"],
    ],
    width: "344px",
  },
  가격대: {
    rows: [["0~30", "31~60", "60~90"]],
    width: "296px",
  },
  종류: {
    rows: [["의류", "신발"]],
    width: "296px",
  },
};

export default function FilterBar() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <>
      <FilterContainer>
        <FilterButton name="성별" onClick={() => setSelectedFilter("성별")} />
        <FilterButton name="색상" onClick={() => setSelectedFilter("색상")} />
        <FilterButton name="사이즈" wide onClick={() => setSelectedFilter("사이즈")} />
        <FilterButton name="가격대" wide onClick={() => setSelectedFilter("가격대")} />
        <FilterButton name="종류" onClick={() => setSelectedFilter("종류")} />
      </FilterContainer>

      {selectedFilter && (
        <FilterModal
          title={selectedFilter}
          rows={filterOptions[selectedFilter].rows}
          width={filterOptions[selectedFilter].width}
          onClose={() => setSelectedFilter(null)}
        />
      )}
    </>
  );
}