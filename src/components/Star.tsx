import React from 'react'
import * as S from '../styles'

type AppProps = {
    theme: string
}

export default function Star({ theme }: AppProps) {
  return (
    <S.Star theme={ theme } >Star</S.Star>
  )
}
