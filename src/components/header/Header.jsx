import styled from "styled-components";
import logoUrl from "../../assets/images/kream_image.png"
import homeUrl from "../../assets/icons/home_icon.png"
import { useLocation, useNavigate } from "react-router-dom";

const HeadContainer = styled.div`
    padding-right: 160px;
    padding-left: 160px;
    display: flex;
    justify-content: space-between;
`;

const LogoImage = styled.img`
    width: 166px;
    height: 141px;
`;

const HomeIcon = styled.img`
    width: 61px;
    height: 24px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 36px;
`;

const Button = styled.div`
    color: #6C6C6C;
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 400;
    margin-top: 9px;
`;

export default function Header() {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const buttonName = "상품등록";

    return (
        <div>
            <HeadContainer>
                <LogoImage src={logoUrl} />
                <Div>
                    {pathname === "/" && (
                    <Button onClick={()=>navigate("/add")}>{buttonName}</Button>
                    )}
                    <HomeIcon src={homeUrl} />
                </Div>
            </HeadContainer>
        </div>
    );
}