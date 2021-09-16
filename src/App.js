import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";

import Footer from './containers/Footer';
import Header from './containers/Header';
import Content from './containers/Content';
import { secRoutes } from './routes';

import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="appWrapper">
      <Header />
      <Content>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            {
              secRoutes.map(({ path, component: Component }) => (
                <Route exact path={`${path}`} key={path}>
                  <motion.div
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.2
                    }}
                  >
                    <Component />
                  </motion.div>
                </Route>
              ))
            }
          </Switch>
        </AnimatePresence>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
