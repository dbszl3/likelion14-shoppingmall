import { useEffect, useState } from "react";
import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";
import ProductCard from "../../components/product/ProductCard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { getItems } from "../../api/shop";

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

const mixProducts = (clothesItems, shoesItems) => {
  const mixedItems = [];
  const maxLength = Math.max(clothesItems.length, shoesItems.length);

  for (let i = 0; i < maxLength; i += 4) {
    mixedItems.push(...clothesItems.slice(i, i + 4));

    const shoeIndex = Math.floor(i / 4);
    if (shoesItems[shoeIndex]) {
      mixedItems.push(shoesItems[shoeIndex]);
    }
  }

  if (shoesItems.length > Math.ceil(clothesItems.length / 4)) {
    mixedItems.push(...shoesItems.slice(Math.ceil(clothesItems.length / 4)));
  }

  return mixedItems;
};

export default function Main() {
  const location = useLocation();

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({ name: "", value: "" });
  const [selectedSort, setSelectedSort] = useState("기본 정렬순");

  const getSortParam = (sort) => {
    if (sort === "평점 높은순") return "rating";
    if (sort === "리뷰 많은순") return "review";
    return "oldest";
  };

  const getFilterParams = () => {
    const params = {
      sort: getSortParam(selectedSort),
    };

    if (!filter.value) return params;

    if (filter.name === "성별") params.gender = filter.value;
    if (filter.name === "색상") params.color = filter.value;
    if (filter.name === "사이즈") params.size = filter.value;
    if (filter.name === "종류") params.type = filter.value;

    if (filter.name === "가격대") {
      const [minPrice, maxPrice] = filter.value.split("-");
      params.minPrice = minPrice;
      params.maxPrice = maxPrice;
    }

    return params;
  };

  const applyClientFilter = (products) => {
    if (!filter.value) return products;

    if (filter.name === "가격대") {
      const [minPrice, maxPrice] = filter.value.split("-").map(Number);

      return products.filter((product) => {
        const price = Number(product.price);
        return price >= minPrice && price <= maxPrice;
      });
    }

    return products;
  };

  const applyClientSort = (products) => {
    const sortedItems = [...products];

    if (selectedSort === "평점 높은순") {
      return sortedItems.sort((a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0));
    }

    if (selectedSort === "리뷰 많은순") {
      return sortedItems.sort(
        (a, b) => Number(b.reviewCount ?? b.reviews ?? 0) - Number(a.reviewCount ?? a.reviews ?? 0)
      );
    }

    return sortedItems;
  };

  useEffect(() => {
    let cancelled = false;

    const fetchItems = async () => {
      try {
        const params = getFilterParams();

        if (filter.name === "종류" && filter.value === "clothes") {
          const clothes = await getItems("clothes", params);
          const clothesItems = Array.isArray(clothes) ? clothes : [];

          if (!cancelled) setItems(applyClientSort(applyClientFilter(clothesItems)));
          return;
        }

        if (filter.name === "종류" && filter.value === "shoes") {
          const shoes = await getItems("shoes", params);
          const shoesItems = Array.isArray(shoes) ? shoes : [];

          if (!cancelled) setItems(applyClientSort(applyClientFilter(shoesItems)));
          return;
        }

        const [clothes, shoes] = await Promise.all([
          getItems("clothes", params),
          getItems("shoes", params),
        ]);

        if (!cancelled) {
          const clothesItems = Array.isArray(clothes) ? clothes : [];
          const shoesItems = Array.isArray(shoes) ? shoes : [];

          const mixedItems = mixProducts(clothesItems, shoesItems);

          setItems(applyClientSort(applyClientFilter(mixedItems)));
        }
      } catch {
        if (!cancelled) setItems([]);
      }
    };

    fetchItems();

    return () => {
      cancelled = true;
    };
  }, [filter, selectedSort]);
  
  useEffect(() => {
    setFilter({ name: "", value: "" });
    setSelectedSort("기본 정렬순");
  }, [location.state?.resetFilter]);

  const handleFilterChange = (name, value) => {
    setFilter((prev) =>
      prev.name === name && prev.value === value
        ? { name: "", value: "" }
        : { name, value }
    );
  };

  const sortedProducts = items;

  return (
    <MainContainer>
      <FilterBar onFilterChange={handleFilterChange} />
      <SortRow><SortButton selectedSort={selectedSort} onSelect={setSelectedSort} /></SortRow>
      {Array.from({ length: Math.ceil(sortedProducts.length / 5) }).map((_, rowIndex) => (
        <ProductRow key={rowIndex}>
          {sortedProducts.slice(rowIndex * 5, rowIndex * 5 + 5).map((item) => (
            <ProductCard
              key={`${item.type}-${item.id}`}
              id={item.id}
              imageUrl={item.imageUrl}
              image={item.image}
              name={item.name}
              price={item.price}
              reviewCount={item.reviewCount}
              reviews={item.reviews}
            />
          ))}
        </ProductRow>
      ))}
    </MainContainer>
  );
}