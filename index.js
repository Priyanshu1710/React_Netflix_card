// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Hello World!!!</h1>,

//   document.getElementById('root'));




// import React from 'react';     // Use div for show only 1 items
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// <div><h1>Hello World!!!</h1>
//   <p>Tis is my first Program</p>
//   <h2>In React..</h2>.</div>
//   ,document.getElementById("root"));




// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render([<h1>Hello</h1>,    //use Array element method ( arrr['hello','rohan','sohan'])
//  <h2>This Is My first</h2>,
//   <h3>React Program</h3>] ,
//   document.getElementById('root'));



// import React from 'react';              // Use React Fragment (its only work in version 16 x.x.x )+
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// <React.Fragment><h1>Hello World!!!</h1>
//   <p>Tis is my first Program</p>
//   <h2>In React..</h2>.</React.Fragment>
//   ,document.getElementById("root"));

//   OR 


// import React from 'react';              // Use React Fragment
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// <><h1>Hello World!!!</h1>
//   <p>Tis is my first Program</p>
//   <h2>In React..</h2>.</>
//   ,document.getElementById("root"));




// // javaScript Expression in JSX


// import React from 'react';              
// import ReactDOM from 'react-dom';
// const myName='Priyanshu Gupta';    //Use any expression in jsx then we use {} currly braces...

// ReactDOM.render(
// <>
// <h1>Hello, My name is {myName},</h1> 
// <h2>And the sum of 3+5 is {3+5}   &   multiple of 4*8 is {4*8}. </h2>   
// </>
// ,document.getElementById("root"));


// Challenge-1
// Create an Web App on Top-5 Netflix Shows

// import React from 'react';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Netflix top 5 Shows</h1>
//     <p>Here r shows in detail :-</p>
//     <ol>
//       <li>Dark</li>
//       <li>Mr.Robot</li>
//       <li>The Witcher</li>
//       <li>Bridgerton</li>
//       <li>Tiger king</li>
//     </ol>
//   </React.Fragment>
//   , document.getElementById("root"));


// E6 Template letrals  (`    ${} `)

// import React from 'react';
// import ReactDOM from 'react-dom';
// var fname = 'Priynshu';
// var lname = 'Gupta';

// ReactDOM.render(
//   <>
//     <h1>Hello this is React templates literals </h1>
//     <h2>{`My name is ${fname} ${lname} `}</h2>
//     <h3>{`The sum of 5+8 is ${5 + 8}`} </h3>
//   </>
//   , document.getElementById('root'));




// Challenge-2
// Create Real Time nd Date Updater

// import react from 'react';
// import ReactDOM from 'react-dom';
// var CurrentDate= new Date().toDateString();
// // var CurrentDate= new Date().toLocaleDateString();//For Your local desktop Time.
// var CurrentTime= new Date().toTimeString(); 
// // var CurrentTime= new Date().toLocaleTimeString(); //For Your local desktop Date.
// ReactDOM.render(
//   <>
//   <h1>My Name is Priyanshu Gupta</h1>
//   <p>{`Today date is :${CurrentDate} `}</p>
//   <p>{`Today time is :${CurrentTime} `}</p>
//   </>
//   ,document.getElementById('root'));


// // JSX Attributes

//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  const name='Priyanshu Gupta';                   //contentEditable means we can edit our text.
// const images_1 ='https://picsum.photos/200/300';
// const images_2 ='https://picsum.photos/250/350';
// const images_3 ='https://picsum.photos/300/400';
// var links= 'https://pastebin.com';

//  ReactDOM.render(
//   <>                         
//    <h1 contentEditable='true'>{`Hello My name is ${name}`}</h1>  
//    <img src={images_1} alt='@ramdom-images' />
//    <img src={images_2} alt='@ramdom-images' />
//    <a href={links} target='_blank'>
//       <img src={images_3} alt='@ramdom-images' />
//    </a>
//    </>
//   ,document.getElementById('root'));



// // CSS Styling and Importing CSS File 

// import React from 'react';
// import  ReactDOM from 'react-dom';
// import './index.css';
// const images_1 ='https://picsum.photos/200/300';
// const images_2 ='https://picsum.photos/250/350';
// const images_3 ='https://picsum.photos/300/400';

// var name='Priyanshu Gupta';
// ReactDOM.render(
//     <>
//     <h1 className='heading' > {`My Name is ${name}`}</h1>
//     <div className='gallery'>
//     <img src={images_1} alt='@ramdom-images' className='images'/>
//     <img src={images_2} alt='@ramdom-images' className='images'/>
//     <img src={images_3} alt='@ramdom-images' className='images'/>
//     </div>

//     </>
//     ,document.getElementById('root'));


// // Importing Google Fonts 

// import React from 'react';
// import  ReactDOM from 'react-dom';
// import './index.css';
// const images_1 ='https://picsum.photos/200/300';
// const images_2 ='https://picsum.photos/250/350';
// const images_3 ='https://picsum.photos/300/400';

// var name='Priyanshu Gupta';
// ReactDOM.render(
//     <>
//     <h1 className='heading' > {`My Name is ${name}`}</h1>
//     <div className='gallery'>
//     <img src={images_1} alt='@ramdom-images' className='images'/>
//     <img src={images_2} alt='@ramdom-images' className='images'/>
//     <img src={images_3} alt='@ramdom-images' className='images'/>
//     </div>

//     </>
//     ,document.getElementById('root'));




// // Internal CSS Styling

// import React from 'react';
// import ReactDOM from 'react-dom';
// var name = 'Priyanshu Gupta';

// var heading = {
//     fontSize: '50px',
//     textTransform: 'capitalize',
//     color: '#fa9191',
//     textAlign: 'centre',
// };

// var paira = {
//     fontSize: '40px',
//     width: '800px',
//     color: 'violet',
// }

// ReactDOM.render(
//     <>
//         <h1 style={heading}>Hello, My name is {name}</h1>
//         <p style={paira}>Welcome, How to use Internal CSS and  Inline CSS Styling In React JS. </p>
//     </>
//     , document.getElementById('root'));



// challenge-3
// Change Message According to Time

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './challenge_#3.css';
// var date = new Date(2020, 5, 5, 1);
// date = date.getHours();
// var spanStyle={
// color:'red'
// };

// var greeting;
// if (date >= 1 && date <= 12) {
//     greeting = 'Good Morning';
//     spanStyle.color='red';

// }
// else if (date >= 12 && date <= 17) {
//     greeting = 'Good Afternoon';
//     spanStyle.color='rgb(51, 199, 209)'

// }
// else if (date >= 17 && date <= 20) {
//     greeting = 'Good Evening';
//     spanStyle.color='yellow';
// }
// else if (date >= 20 && date <= 24) {
//     greeting = 'Good Night';
//     spanStyle.color='rgb(200, 32, 223)'
// }

// ReactDOM.render(
//     <>

//     <div className='main-container'>
//     <div className='main'>

//         <h1>Hello friends <span style={spanStyle}> {greeting}</span> </h1>
//     </div>
//     </div>
//     </>
//     , document.getElementById('root')
// );



// Component in JSX
// (Remember creating JSX file , 1st Letter is always capotal and extension is .jsx)

// import React from 'react';
// import ReactDOM from 'react-dom'
// import A_app from './A_app';

// var name = 'Priyashu Gupta'
// var design = {
//     color: 'blue',
//     fontSize: '40px',
// }
// ReactDOM.render(
//     <>
//         <h1 style={design}>Hello Guys My name is {name} </h1>
//         <A_app />;
//     </>
//     , document.getElementById('root'));




// Module Import Export

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Import from './Import';
// import Value from './File';
// import A_app from './A_app';

// ReactDOM.render(
//     <>
//       <h1>Hello My name is {<Import/>}  </h1> 
//       <li> Hello Ji</li>
//       <li><Import/></li>
//       <li>{Value}</li>
//       <li><A_app/></li>

//     </>, document.getElementById('root')
// );


// Return Many Import in jsx file 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Value, { myname ,sirName} from './File';
// ReactDOM.render(
//   <>
//   {Value},<br/>
//   {myname()}<br/>
//   {sirName()}


//   </>
//   ,document.getElementById('root')
// );


// Challenge -5
// Simple Calculator

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Cal';
// import { div, mul, sub, sum } from './Calculator_chall_5';

// ReactDOM.render(
//     <>
//     <ul>
//         <li>The Sum Of Two Num is : {sum(40,4)}</li>
//         <li>The Sub Of Two Num is :{sub(40,4)} </li>
//         <li>The Mul Of Two Num is :{mul(40,4)} </li>
//         <li>The Div Of Two Num is : {div(40,4)}</li>
//     </ul>

//     <App/>
//     </>
//     ,document.getElementById('root')
// );


// Props in React Js 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card_netflix_01'

// ReactDOM.render(
//     <>
//         <Card 
//         imgsrc='https://wallpapercave.com/uwp/uwp374924.jpeg'
//         title='A Netflix Original Series '
//         sname="DARK"
//         link='https://www.netflix.com/in/title/80100172'
//         />
//         <Card 
//         imgsrc='https://wallpapercave.com/wp/wp7418539.jpg'
//         title='A Netflix Original Series '
//         sname='Extra Curricular'
//         link='https://www.netflix.com/in/title/80990668'
//         />
//         <Card 
//         imgsrc='https://wallpapercave.com/wp/wp4431942.jpg'
//         title='A Netflix Original Series '
//         sname='Stranger Things'
//         link='https://www.netflix.com/in/title/80057281'
//         />

//     </>
//     , document.getElementById('root')
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Jsx file/Card_netflix_01';
// import c_data from './Card_netflix_02'

// ReactDOM.render(
//     <>
//     <Card
//     imgsrc={c_data[0].imgsrc}
//     title={c_data[0].title}
//     sname={c_data[0].sname}
//     link={c_data[0].link}
//     />
//     <Card
//     imgsrc={c_data[1].imgsrc}
//     title={c_data[1].title}
//     sname={c_data[1].sname}
//     link={c_data[1].link}
//     />
//     <Card
//     imgsrc={c_data[2].imgsrc}
//     title={c_data[2].title}
//     sname={c_data[2].sname}
//     link={c_data[2].link}
//     />
//     </>
//     ,document.getElementById('root')
// );


// Cpmpleting React JS Netflix App ||
//  Array Map and Fat Function

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './Jsx file/netflix.css'
// import Card from './Jsx file/Card_netflix_01';
// import c_data from './Card_netflix_02'

// function ncard(value){
// return (
//     <Card
//     imgsrc={value.imgsrc}
//     title={value.title}
//     sname={value.sname}
//     link={value.link}
//     />
// );
// }

// ReactDOM.render(
//     <>
// <h1>List of Top 5 Netflix Series in 2020. </h1>
// {c_data.map(ncard)}
// OR

// <h1>List of Top 5 Netflix Series in 2020. </h1>
// {c_data.map(function(value){
//     return(
//     <Card
//     imgsrc={value.imgsrc}
//     title={value.title}
//     sname={value.sname}
//     link={value.link}
//     />
//     )
// })}

// OR

// <h1><u>List of Top 5 Netflix Series in 2020.</u>  </h1>
// {c_data.map((value) =>{
//     return(
//     <Card
//     imgsrc={value.imgsrc}
//     title={value.title}
//     sname={value.sname}
//     link={value.link}
//     />
//     )
// })}
//     </>
//     ,document.getElementById('root')
// );