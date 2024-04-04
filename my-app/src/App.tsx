import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'ALL' // создадим типы для banknotes -он может быть 'DOLLARS', 'RUBLS' или 'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

let defaultMoney: MoneyType[] = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType [] => {
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
    if (filter === 'ALL') {
        return money;
    } else {
        return money.filter(el => el.banknote === filter);
    }
}


function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        // Добавление денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
        setMoney([...money, { banknote: banknote, nominal: 100, id: v1() }])
    }

    const removeMoney = (banknote: BanknotsType) => {
        // Снятие денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
       // const index = money.findIndex
       //  if (index !== -1) {
       //      setMoney(money.filter((el, i) => ...));
       //  }
        const indexElement = money.findIndex(el => el.banknote === banknote);
        if (indexElement === -1) {
            setMoney(money);
        } else {
            let newMoney = money.filter((_, i) => i !== indexElement);
            setMoney(newMoney)
        }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

export default App;
