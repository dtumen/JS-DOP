import React from 'react';
import { MoneyType } from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
  money: MoneyType
}

export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
  // с деструктуризацией пожалуйста
  const { money } = props;
  return (
    <div>
      <Banknote color={money.banknote === 'USD' ? 'aquamarine' : 'lightskyblue'}>
        <Name>{money.banknote}</Name>
        <Nominal>{money.nominal}</Nominal>
      </Banknote >
    </div >
  );
};

type ColorsType = {
  color: 'aquamarine' | 'lightskyblue';
}

const Banknote = styled.div<ColorsType>`
  background-color: ${props => props.color};
  width: 400px;
  height: 200px;
  margin: 5px;
`


const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
