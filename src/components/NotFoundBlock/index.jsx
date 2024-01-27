import React from 'react';
import s from './NotFoundBlock.module.scss'

export default function NotFoundBlock() {
  return (
    <div className= {s.root}>
        <span>(ᴗ_ ᴗ。)</span>
        <br/>
        <h1 >Ничего не найдено</h1>
        <p className={s.description}>К сожалению данной странице нет в нашем интернет-магазине.</p>
    </div>
  )
}
