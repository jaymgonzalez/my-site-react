import React from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './Header'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'
import TutorialsPage from './TutorialsPage'
import NotFoundPage from './NotFoundPage'
import Footer from './Footer'
import CVPage from './CVPage'
import ScrollToTop from './bin/ScrollToTop'


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">

      <Header />
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" component={TutorialsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={() => {
            window.open('https://theselive.com', '_blank')
            return null
          }} />
          <Route path="/cv" component={CVPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
      <Footer />
      
    </div>
  )
}

export default App;
