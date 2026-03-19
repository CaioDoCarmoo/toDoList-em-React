import styled from 'styled-components'
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";




export const MainContainer = styled.div`
    background-color: #F9FAFB;
`

export const ContainerInputs = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    border-bottom: solid 1px #cccccc;
    padding: 25px;


    input.nameItem {
        background-color: #F3F3F5;
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 85%;
        flex: 4;
    }

    input.quantity {
        background-color: #F3F3F5;
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 15%;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        font-weight: 600;
        padding: 10px;
        border-radius: 7px;
        width: 100%;
        border: none;

        background-color: #7D7E87;
        color: #fff;
        cursor: pointer;
        margin-top: 10px;

    }

`

export const Plus = styled(FaPlus)`

    color: #f7f7f7d0;  
    font-size: 14px;
    margin-right: 15px;

`

export const Trash = styled(FaRegTrashAlt)`

    color: red;
    font-size: 14px;
    color: red;
    margin-left: auto;
    display: none;

    transition: transform 0.9s ease;

    &:hover {
        transform: scale(1.60);
        background-color: none;
    }
`

export const ContainerList = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;        
    background-color: white;
    max-height: 450px;
    overflow-y: auto;

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    li {
        display: flex;
        gap: 20px;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px 16px;
        width: 100%;
        transition: box-shadow 0.2s ease;
        cursor: pointer;
        
        &:hover { 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        &:hover ${Trash} {
            display: block;
        }
    }


    input[type="checkbox"] {

    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ccc;
    border-radius: 4px;
    position: relative;
    cursor: pointer;

    }

    input[type="checkbox"]:checked {

    background-color: #000000;
    border-color: #000000;

    }

    input[type="checkbox"]:checked::after {

    content: "✓";
    color: white;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    }

    .text {
        color: black;
        font-size: 16px;
        font-weight: 600;
    }
    .qtd {
        font-size: 14px;  
        color: #7D7E87;
        font-weight: 600;
    } 

`

export const ContainerPurchase = styled.div`

`

export const TrashPurchasedItem = styled(Trash)`

    color: red;
    font-size: 14px;
    cursor: pointer;
    display: block;

`

export const Row = styled.hr`

    border: none;
    border-bottom: solid 1px #cccccc;

`

export const CountPurchasedItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: white;

    .productsPurchased {
        color: #7D7E87;
        font-size: 14px;
        font-weight: 600;
    }

    .clearPurchased {
        color: red;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }
`

export const Button = styled.button`

    background-color: ${({ disabled }) => disabled ? "#000000" : "#0b90dd"};
    color: ${({ disabled }) => disabled ? "#666" : "#fff"};
    cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};

    transition: 0.2s;

    &:hover {
        background-color: ${({ disabled }) => disabled ? "#ccc" : "#0b90dd"};
    }

`