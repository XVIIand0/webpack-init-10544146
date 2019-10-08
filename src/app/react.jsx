import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './components/counter'

const MainScreen = () => <div className='alert'>
    <h1>Counter</h1>
    <App />
</div>

const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)
// const Title = ({ text }) => <h5 className='text-bold'>{text}</h5>
// const cartList = [
//     'test1', 'test2'
// ]

// const Card = () => {
//     return(
//         <div>
//          {cartList.map((el,inx )=> {
//              return <Title key = {inx} text={el}/>
//          })
//          }
//          <Card2 />
//          </div>
//     )
// }
// const Card2 = () => {
//     return <div>
//         <Title text ={'TEEES'}/>
//         </div>
// }

// var Index = () => {
//     return React.createElement('div',{
//         className: 'helloworld'
//     }, 'Hello, It is me Mario')
// }

// ReactDOM.render(<Card />, document.querySelector("#root"));
