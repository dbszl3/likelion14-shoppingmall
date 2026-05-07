import { useEffect, useState } from "react";
import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";
import ProductCard from "../../components/product/ProductCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import productDummy from "./productDummy";

const displayProducts = [...productDummy, ...productDummy].map((item, index) => ({
  ...item,
  id: index + 1,
}));

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  margin-right: 166px;
`;

const ProductRow = styled.div`
  display: flex;
  gap: 57px;
  margin-top: 34px;
  margin-left: 158px;
`;

export default function Main() {
  const location = useLocation();
  const [filter, setFilter] = useState({ name: "", value: "" });
  const [selectedSort, setSelectedSort] = useState("기본 정렬순");
  useEffect(() => { setFilter({ name: "", value: "" }); setSelectedSort("기본 정렬순"); }, [location.state?.resetFilter]);
  const handleFilterChange = (name, value) => setFilter((prev) => (prev.name === name && prev.value === value ? { name: "", value: "" } : { name, value }));
  const sortedProducts = displayProducts.filter((item) => {
    if (!filter.value) return true;
    if (filter.name === "성별") return item.gender === filter.value;
    if (filter.name === "색상") return item.color === filter.value;
    if (filter.name === "사이즈") return item.size === filter.value;
    if (filter.name === "종류") return item.type === filter.value;
    if (filter.name === "가격대") {
      const price = item.price / 10000;
      if (filter.value === "0~30") return price >= 0 && price <= 30;
      if (filter.value === "31~60") return price >= 31 && price <= 60;
      if (filter.value === "60~90") return price >= 60 && price <= 90;
    }
    return true;
  }).sort((a, b) => {
    if (selectedSort === "평점 높은순") return b.rating - a.rating;
    if (selectedSort === "리뷰 많은순") return b.reviewCount - a.reviewCount;
    return a.id - b.id;
  });

  return (
    <MainContainer>
      <FilterBar onFilterChange={handleFilterChange} />
      <SortRow><SortButton selectedSort={selectedSort} onSelect={setSelectedSort} /></SortRow>
      <ProductRow>
        {sortedProducts.slice(0, 5).map((item) => <ProductCard key={item.id} {...item} />)}
      </ProductRow>
      <ProductRow>
        {sortedProducts.slice(5, 10).map((item) => <ProductCard key={item.id} {...item} />)}
      </ProductRow>
    </MainContainer>
  );
}