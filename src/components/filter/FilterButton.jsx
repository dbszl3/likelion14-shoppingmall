import styled from "styled-components";
import vector from "../../assets/icons/Vector.png";

const Button = styled.button`
    width: ${(props) => (props.$wide ? "72px" : "58px")};
    height: 33px;
    border-radius: 20px;
    border: none;
    background-color: #F2F2F2;
    color: #616161;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

function FilterButton({ name, wide, onClick }) {
  return (
    <Button $wide={wide} onClick={onClick}>{name}<img src={vector} /></Button>
  );
}

export default FilterButton;