import React from 'react'
import './App.css'
import DemoForm from './components/Fomily/DemoForm'
import QueryForm from './components/Fomily/QueryForm'
import LinkForm from './components/Fomily/LinkForm'
import LayoutForm from './components/Fomily/LayoutForm'
import VerifyForm from './components/Fomily/VerifyForm'
import LifeCycleForm from './components/Fomily/LifeCycleForm'
import LifeCycleForm2 from './components/Fomily/LifeCycleForm2'
function App() {
    return (
        <div className="App">
            <LifeCycleForm2 />
            <LifeCycleForm />
            <VerifyForm />
            <LayoutForm />
            <LinkForm />
            <QueryForm></QueryForm>
            <DemoForm></DemoForm>
        </div>
    )
}
export default App
