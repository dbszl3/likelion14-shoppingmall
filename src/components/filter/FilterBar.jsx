import { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import FilterModal from "./FilterModal";

const FilterContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-left: 158px;
`;

const filterOptions = {
  성별: {
    rows: [[
      { label: "남성", value: "male" },
      { label: "여성", value: "female" },
      { label: "남녀공용", value: "unisex" },
    ]],
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
    rows: [[
      { label: "의류", value: "clothes" },
      { label: "신발", value: "shoes" },
    ]],
    width: "296px",
  },
};

export default function FilterBar({ onFilterChange }) {
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
        <FilterModal title={selectedFilter} rows={filterOptions[selectedFilter].rows} width={filterOptions[selectedFilter].width} onSelect={(value) => { onFilterChange(selectedFilter, value); setSelectedFilter(null); }} onClose={() => setSelectedFilter(null)} />
      )}
    </>
  );
}