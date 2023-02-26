import React,{ lazy, Suspense } from 'react'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'


const Home = lazy(async () => import('./pages/Home'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}