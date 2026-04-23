import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";
import ProductCard from "../../components/product/ProductCard";
import styled from "styled-components";

import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";

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
  const products = [
    {
      imageUrl: product1,
      name: "아이앱 스튜디오 25 후드 라이트 그레이",
      price: 145000,
      reviewCount: 1561,
    },
    {
      imageUrl: product2,
      name: "아이앱 스튜디오 25 후드 라이트 블루",
      price: 145000,
      reviewCount: 1732,
    },
    {
      imageUrl: product3,
      name: "아디다스 블랙 저지 2016",
      price: 255000,
      reviewCount: 781,
    },
    {
      imageUrl: product4,
      name: "슈프림 후드집업 30 딥블루",
      price: 458000,
      reviewCount: 2567,
    },
    {
      imageUrl: product5,
      name: "나이키 에어 그레이 하운드 25",
      price: 235000,
      reviewCount: 231,
    },
  ];

  return (
    <MainContainer>
      <FilterBar />
      <SortRow><SortButton /></SortRow>
      <ProductRow>
        {products.map((item, index) => (
          <ProductCard key={`first-${index}`} {...item} />
        ))}
      </ProductRow>
      <ProductRow>
        {products.map((item, index) => (
          <ProductCard key={`second-${index}`} {...item} />
        ))}
      </ProductRow>
    </MainContainer>
  );
}