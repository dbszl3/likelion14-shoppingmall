import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: 296px;
  height: 136px;
  border-radius: 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31px;
`;

const ModalText = styled.p`
  color: #000;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
`;

const ButtonBox = styled.div`
  margin-bottom: 34px;
  display: flex;
  gap: 7px;
`;

const Button = styled.button`
  width: 102px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: ${(props) => (props.$cancel ? "#d0d0d0" : "#f2f2f2")};
  cursor: pointer;
  color: #333;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

export default function ProductDelete() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <ProductDetail />
      <Overlay>
        <ModalBox>
          <ModalText>상품을 삭제하시겠습니까?</ModalText>
          <ButtonBox>
            <Button onClick={() => navigate("/")}>확인</Button>
            <Button $cancel onClick={() => navigate(`/product/${id}`)}>취소</Button>
          </ButtonBox>
        </ModalBox>
      </Overlay>
    </>
  );
}