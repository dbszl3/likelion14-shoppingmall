import styled from "styled-components";
import closeIcon from "../../assets/icons/CloseIcon.png";

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
  width: ${(props) => props.$width};
  padding: 30px 33px 48px 35px;
  border-radius: 25px;
  background: #fff;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CloseButton = styled.button`
  width: 13px;
  height: 13px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled.img`
  width: 13px;
  height: 13px;
`;

const OptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 26px;
`;

const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const OptionButton = styled.button`
  min-width: 58px;
  height: 33px;
  padding: 8px 17px 9px 17px;
  border: none;
  border-radius: 20px;
  background: #f2f2f2;
  color: #616161;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`;

export default function FilterModal({ title, rows, width, onClose }) {
  return (
    <Overlay>
      <ModalBox $width={width}>
        <TopRow>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <CloseIcon src={closeIcon} alt="닫기" />
          </CloseButton>
        </TopRow>

        <OptionWrap>
          {rows.map((row, rowIndex) => (
            <OptionRow key={rowIndex}>
              {row.map((option) => (
                <OptionButton key={option}>{option}</OptionButton>
              ))}
            </OptionRow>
          ))}
        </OptionWrap>
      </ModalBox>
    </Overlay>
  );
}