import styled from 'styled-components'
import { FaShoppingBasket } from "react-icons/fa";

export const HeaderMain = styled.div`

    background: #185DFC;
    background: linear-gradient(90deg, rgba(24, 93, 252, 1) 0%, rgba(79, 59, 247, 1) 50%);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 30px;
    width: 40vw;

    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

`

export const ContainerHeader = styled.div`

    display: flex;
    flex-direction: column;
    gap: 3px;

`

export const Shopping = styled(FaShoppingBasket)`
    color: #fff;
    font-size: 30px;
`

export const Title = styled.h1`
    
    color: #fff;
    font-size: 24px;

`

export const SubTitle = styled.p`

    color: #fff;
    font-size: 16px;
    font-weight: 300;

`