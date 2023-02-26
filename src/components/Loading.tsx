import React from 'react'
import type { ReactElement } from 'react'
import './loading.css'

interface Properties {
  error?: Error
}
export default function Loading({ error }: Properties): ReactElement {
  return (
    <div className="banter-loader">
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
      <div className="banter-loader__box"></div>
    </div>
  )
}