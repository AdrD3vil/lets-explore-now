import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStore } from './appStore';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Box } from '@mui/material';

const componentMap = {
  Home,
  Contact,
};

const App = () => {
  const [ pages, loaded ] = useStore((s) => [s.pages, s.loaded]);
  if(!loaded) return null;
  return (
    <div className="page">
      <Switch>
        {Object.keys(pages).map((key) => {
          const page = pages[key]
          return <Route key={page.path} path={page.path} component={componentMap[page.component]} />
        })}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;