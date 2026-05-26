import styled from "styled-components";
import checkIcon from "../../assets/icons/CheckIcon.png";

const ModalBox = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  width: 92.5px;
  padding: 15px 14.5px 15px 11px;
  border-radius: 10px;
  border: 0.3px solid rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.15);
  box-sizing: content-box;
  z-index: 10;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Option = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#333" : "#afafaf")};
  font-family: Pretendard;
  font-size: 14px;
  gap: 12px;
`;

const CheckIcon = styled.img`
  width: 13px;
  height: 13px;
`;

export default function SortModal({ selectedSort, onSelect }) {
  const options = ["기본 정렬순", "평점 높은순", "리뷰 많은순"];

  return (
    <ModalBox>
      <OptionList>
        {options.map((option) => (
          <Option
            key={option}
            $active={selectedSort === option}
            onClick={() => onSelect(option)}
          >
            {option}
            {selectedSort === option && <CheckIcon src={checkIcon} />}
          </Option>
        ))}
      </OptionList>
    </ModalBox>
  );
}