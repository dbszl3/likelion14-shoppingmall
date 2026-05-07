import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 181px;
    align-items: flex-start;
    gap: 5px;
`;

const ProductImage = styled.img`
    width: 181px;
    height: 237px;
`;

const ProductName = styled.p`
    color: #333;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ProductPrice = styled.p`
    color: #000;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const ReviewCount = styled.p`
    color: #A7A7A7;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

function ProductCard({ id, productId, imageUrl, name, price, reviewCount }) {

    const navigate = useNavigate();
    const detailId = productId ?? id;

    return (
        <ProductContainer onClick={() => navigate(`/product/${detailId}`)}>
            <ProductImage src={imageUrl} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>{price.toLocaleString()}원</ProductPrice>
            <ReviewCount>리뷰 {reviewCount.toLocaleString()}</ReviewCount>
        </ProductContainer>
    )
}

export default ProductCard;