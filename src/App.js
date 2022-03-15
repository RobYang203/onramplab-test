import { CssBaseline } from '@material-ui/core';
import LoadingMask from 'components/LoadingMask';
import MainLayout from 'layouts/MainLayout';
import MainPage from 'pages/MainPage';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCityListAction } from 'actions/creators/city';



function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getCityListAction());
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div className='App'>
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
