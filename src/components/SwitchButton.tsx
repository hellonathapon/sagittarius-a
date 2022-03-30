import React from 'react'
import * as S from '../styles'

export default function SwitchButton(mode: string | React.MouseEventHandler<HTMLButtonElement> ) {
  return (
    <S.SwitchButton mode={mode}>
        <span></span>
        <span></span>
    </S.SwitchButton>
  )
}
