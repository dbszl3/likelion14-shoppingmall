import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import upload from "../../assets/icons/upload.png";
import productDummy from "../Main/productDummy";

const displayProducts = [...productDummy, ...productDummy].map((item, index) => ({
    ...item,
    id: index + 1,
}));

const Container = styled.div`
    display: flex;
`;

const Upload = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 459px;
    height: 602px;
    border-radius: 15px;
    border: 1px solid #DBDBDB;
    background: #FFF;
    margin-left: 194px;
    margin-top: 60px;
    overflow: hidden;
    cursor: pointer;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const UploadIcon = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    stroke: #4A4A4A;
    opacity: 1;
`;

const FileInput = styled.input`
    display: none;
`;

const Line = styled.div`
    width: 1.5px;
    height: 760px;
    background: #EBEBEB;
    margin-left: 159px;
`;

const Title = styled.p`
    color: #1A1A1A;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #1A1A1A;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`;

const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`;

const DetailTitle = styled.p`
    align-self: stretch;
    color: #6C6C6C;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const Input = styled.input`
    width: 211px;
    height: 30px;
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #6C6C6C;
    color: #333;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const OptionGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 285px;
`;

const OptionButton = styled.button`
    width: ${(props) => props.$wide ? "102px" : "67px"};
    height: 30px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 5px;
    border: none;
    background: ${(props) => props.$selected ? "#DFDFDF" : "#F2F2F2"};
    color: #333;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    width: 222px;
    height: 30px;
    display: flex;
    box-sizing: border-box;
    padding: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: stretch;
    border-radius: 5px;
    border: 1px solid #F2F2F2;
    background: #F2F2F2;
    color: #333;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Add = styled.div`
    width: 285px;
    padding: 27px 33px 43px;
    align-items: center;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.25);
    border: none;
    margin-left: 169px;
`;

export default function ProductEdit() {
    const { id } = useParams();
    const product = displayProducts.find((item) => item.id === Number(id));
    const [previewImage, setPreviewImage] = useState(product?.imageUrl || "");
    const [name, setName] = useState(product?.name || "");
    const [rating, setRating] = useState(product?.rating || product?.rate || "");
    const [reviewCount, setReviewCount] = useState(
        (product?.reviewCount || product?.review || "").toLocaleString()
    );
    const [price, setPrice] = useState(
        (product?.price || "").toLocaleString()
    );
    const [size, setSize] = useState(product?.size || "");
    const [selectedType, setSelectedType] = useState(product?.type || "");
    const [selectedGender, setSelectedGender] = useState(product?.gender || "");
    const [selectedColor, setSelectedColor] = useState(product?.color || "");

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setPreviewImage(URL.createObjectURL(file));
    };

    return (
        <Container>
            <Upload as="label" htmlFor="product-image">
                {previewImage && <ProductImage src={previewImage} alt="Product" />}
                <UploadIcon src={upload} alt="Upload" />
                <FileInput
                    id="product-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </Upload>
            <Line />
            <AddContainer>
                <Add>
                    <Title>상품 정보 수정</Title>
                    <Content>
                        <Detail>
                            <DetailTitle>상품명</DetailTitle>
                            <Input type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)}></Input>
                        </Detail>
                        <Detail>
                            <DetailTitle>평점</DetailTitle>
                            <Input type="text" placeholder="" value={rating} onChange={(e) => setRating(e.target.value)}></Input>
                        </Detail>
                        <Detail>
                            <DetailTitle>리뷰수</DetailTitle>
                            <Input type="text" placeholder="" value={reviewCount} onChange={(e) => setReviewCount(e.target.value)}></Input>
                        </Detail>
                        <Detail>
                            <DetailTitle>가격</DetailTitle>
                            <Input type="text" placeholder="" value={price} onChange={(e) => setPrice(e.target.value)}></Input>
                        </Detail>
                        <Detail>
                            <DetailTitle>사이즈</DetailTitle>
                            <Input type="text" placeholder="" value={size} onChange={(e) => setSize(e.target.value)}></Input>
                        </Detail>
                        <Detail>
                            <DetailTitle>종류</DetailTitle>
                            <OptionGroup>
                                {['의류', '신발'].map((type) => (
                                    <OptionButton
                                        key={type}
                                        type="button"
                                        $wide
                                        $selected={selectedType === type}
                                        onClick={() => setSelectedType(type)}
                                    >
                                        {type}
                                    </OptionButton>
                                ))}
                            </OptionGroup>
                        </Detail>
                        <Detail>
                            <DetailTitle>성별</DetailTitle>
                            <OptionGroup>
                                {['남성', '여성', '남녀공용'].map((gender) => (
                                    <OptionButton
                                        key={gender}
                                        type="button"
                                        $selected={selectedGender === gender}
                                        onClick={() => setSelectedGender(gender)}
                                    >
                                        {gender}
                                    </OptionButton>
                                ))}
                            </OptionGroup>
                        </Detail>
                        <Detail>
                            <DetailTitle>색상</DetailTitle>
                            <OptionGroup>
                                {['red', 'pink', 'blue', 'gray', 'black', 'denim', 'multi', 'rainbow', 'holographic'].map((color) => (
                                    <OptionButton
                                        key={color}
                                        type="button"
                                        $selected={selectedColor === color}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </OptionButton>
                                ))}
                            </OptionGroup>
                        </Detail>
                        <SubmitButton>상품 수정 완료</SubmitButton>
                    </Content>
                </Add>
            </AddContainer>
        </Container>
    )
}