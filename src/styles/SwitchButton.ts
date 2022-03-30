import styled from "styled-components";
import React from 'react'

export const SwitchButton = styled.button<{ mode: string | React.MouseEventHandler<HTMLButtonElement> }>`
    background: 0;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    height: 40px;
    width: 100px;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0);
    margin-top: 20px;

    span:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        background-color: #d6d7db;
        box-shadow: inset 1px 1px 3px 0 rgb(0 0 0 / 40%);
        transition: 0.3s;
    }
    span:nth-child(2) {
        position: absolute;
        top: 5px;
        left: ${({ mode }) => mode === 'light' ? '5px' : '65px'};
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 40%);
        transition: 0.3s;
    }
`