import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png";
import homeUrl from "../../assets/icons/home_icon.png";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const HeadContainer = styled.div`
  padding-right: 160px;
  padding-left: 160px;
  display: flex;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 166px;
  height: 141px;
  cursor: pointer;
`;

const HomeIcon = styled.img`
  width: 61px;
  height: 24px;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 36px;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 9px;
`;

const Button = styled.div`
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 400;
  margin-top: 9px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#000" : "#6C6C6C")};
`;

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const isMainPage = pathname === "/";
  const goHome = () => navigate("/", { state: { resetFilter: Date.now() } });

  return (
    <HeadContainer>
      <LogoImage src={logoUrl} onClick={goHome} />

      <Div>
        <MenuBox>
          <Button $active={pathname === "/add"} onClick={() => navigate("/add")}>상품등록</Button>

          {!isMainPage && (
          <>
            <Button $active={pathname.includes("/delete")} onClick={() => navigate(`/product/${id}/delete`)}>상품삭제</Button>
            <Button $active={pathname.includes("/edit")} onClick={() => navigate(`/product/${id}/edit`)}>상품수정</Button>
          </>
          )}
        </MenuBox>

        <HomeIcon src={homeUrl} onClick={goHome} />
      </Div>
    </HeadContainer>
  );
}