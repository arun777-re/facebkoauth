import React, {Suspense} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginButton from './components/LoginButton';
import PageAnalytics from './components/PageAnalytics';
import PageInsights from './components/PageInsights';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginButton/>}/>
      <Route path='/user/analytics' element={<PageAnalytics/>}/>
      <Route path='/page/:id' element={<PageInsights/>}/>
    </Routes>

   </BrowserRouter>

  )
}

export default App