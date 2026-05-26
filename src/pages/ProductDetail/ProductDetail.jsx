import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import star from "../../assets/icons/Star.png";
import { getItem } from "../../api/shop";


const DetailContainer = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  width: 459px;
  height: 602px;
  aspect-ratio: 61/80;
  margin-left: 204px;
  margin-top: 70px;
  object-fit: contain;
`;

const Line = styled.div`
  width: 1.5px;
  height: 760px;
  background: #EBEBEB;
  justify-content: center;
  align-items: center;
  margin-left: 146.01px;
`;

const InfoSection = styled.div`
  display: flex;
  width: 247px;
  height: 107px;
  justify-content: center;
  align-items: center;
  margin-left: 62.99px;
  margin-top: 124px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const Price = styled.p`
  color: #000;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProductName = styled.p`
  color: #333;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Star = styled.img`
  width: 13px;
  height: 12px;
  aspect-ratio: 13/12;
`;

const Rate = styled.p`
  color: #333;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Review = styled.p`
  color: #949494;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getItem(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다.</div>;
  }

  return (
    <DetailContainer>
      
        <ProductImage src={product.image} alt={product.name} />
        
        <Line />

        <InfoSection>
          <InfoBox>
            <Price>{Number(product.price).toLocaleString()}원</Price>

            <div>
              <ProductName>{product.name}</ProductName>

              <ReviewRow>
                <Rating>
                  <Star src={star} />
                  <Rate>{product.rating}</Rate>
                </Rating>
                <Review>리뷰 {Number(product.reviews).toLocaleString()}</Review>
              </ReviewRow>
            </div>
          </InfoBox>
        </InfoSection>
    </DetailContainer>
  );
}