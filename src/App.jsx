import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './pages/Dashboard'
import CreateBrief from './pages/CreateBrief'
import BriefDetail from './pages/BriefDetail'
import Research from './pages/Research'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={
          <Layout currentPageName="Dashboard">
            <Dashboard />
          </Layout>
        } />
        <Route path="/create-brief" element={
          <Layout currentPageName="CreateBrief">
            <CreateBrief />
          </Layout>
        } />
        <Route path="/brief-detail" element={
          <Layout currentPageName="BriefDetail">
            <BriefDetail />
          </Layout>
        } />
        <Route path="/research" element={
          <Layout currentPageName="Research">
            <Research />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App