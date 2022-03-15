import { CssBaseline } from '@material-ui/core';
import LoadingMask from 'components/LoadingMask';
import MessageCenter from 'components/MessageCenter';
import MainLayout from 'layouts/MainLayout';
import MainPage from 'pages/MainPage';
import { Switch, Route } from 'react-router-dom';
import { fetchCitiesResult } from 'apis/cities';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    fetchCitiesResult().then((res)=>{
      console.log("🚀 ~ file: index.js ~ line 15 ~ fetchCitiesResult ~ res", res)
      
      })
  },[])
  return (
    <div className='App'>
      <MessageCenter />
      <CssBaseline />
      <MainLayout>
        <Switch>
          <Route path='/' component={MainPage} />
        </Switch>
      </MainLayout>
      <LoadingMask />
    </div>
  );
}

export default App;
