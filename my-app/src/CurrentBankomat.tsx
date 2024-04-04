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
    // ВНАЧАЛЕ НАПИШЕМ СОВСЕМ НЕКРАСИВО
    // props.money.banknote==='USD'
    //     ? ЗЕЛЕНАЯ
    //     : СИНЯЯ


    // А ТЕПЕРЬ КРАСИВО
    <div>
      <Banknote color={money.banknote === 'USD' ? 'green' : 'blue'}>
        <Name>{money.banknote}</Name>
        <Nominal>{money.nominal}</Nominal>
      </Banknote >
    </div >
  );
};


const BanknoteGreen = styled.div`
  background-color: aquamarine;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: lightskyblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

// tyoe BanknotePropsType = 

const Banknote = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 200px;
  height: 100px;
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
