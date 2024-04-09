import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './SuperButton.module.css';

type PropsType = {
  name?: string
  onClick: () => void
  children?: ReactNode
  color?: string
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SuperButton: React.FC<PropsType> = (props) => {

  const { name, onClick, children, color, disabled, ...restProps } = props;

  const onClickHandler = () => {
    onClick();
  }

  const finalClassNames = `
  ${s.button} ${color === 'red' ? s.red : color === 'blue' ? s.secondary : s.default} 
  ${disabled ? s.disabled : ''}
  `

  return (
    <button onClick={onClickHandler} className={finalClassNames} >
      {children}
    </button>
  )
}

export default SuperButton;