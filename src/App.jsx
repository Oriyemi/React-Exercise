import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

// import Counter from "./Components/Counter";
// import Toggle from "./Components/Toggle";
// import Clock from "./Components/Clock";
// import CharCounter from "./Components/CharCounter";
// import Todo from "./Components/Todo";
// import Tip from "./Components/Tip";
// import Bmi from "./Components/Bmi";
// import Faq from "./Components/Faq";
// import Tabcom from "./Components/Tabcom";
// import StarRating from "./Components/StarRating";
// import Carousel from "./Components/Carousel";
// import Modal from "./Components/Modal";
// import PasswordMeter from "./Components/PasswordMeter";
// import QuoteGen from "./Components/QuoteGen";
// import Stopwatch from "./Components/Stopwatch";
// import CountDownTimer from "./Components/CountDownTimer";
// import WeatherApp from "./Components/WeatherApp";
// import Profiler from "./Components/Profiler";
// import RecipeSearch from "./Components/RecipeSearch";
// import MovieDb from "./Components/MovieDb";
// import Converter from "./Components/Converter";
// import Scroll from "./Components/Scroll";
// import AutoCom from "./Components/AutoCom";
// import NewsReader from "./Components/NewsReader";
// import Crypto from "./Components/Crypto";
// import ImageGallery from "./Components/ImageGallery";
// import CountryExp from "./Components/CountryExp";
// import FormWizard from "./Components/FormWizard";
// import Blog from "./Components/Blog";
import ShoppingCart32 from "./Components/ShoppingCart32.jsx"
import DebounceSearch from "./Components/DebounceSearch.jsx.jsx";
import FetchUsers from "./Components/FetchUsers.jsx";
import Responsive from "./Components/Responsive.jsx";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <Clock /> */}
      {/* <CharCounter/> */}
      {/* <Todo /> */}
      {/* <Tip /> */}
      {/* <Bmi /> */}
      {/* <Faq /> */}
      {/* <Tabcom/> */}
      {/* <StarRating /> */}
      {/* <Carousel /> */}
      {/* <Modal /> */}
      {/* <PasswordMeter /> */}
      {/* <QuoteGen /> */}
      {/* <Stopwatch /> */}
      {/* <CountDownTimer /> */}
      {/* <WeatherApp /> */}
      {/* <Profiler />   */}
      {/* <RecipeSearch /> */}
      {/* <MovieDb /> */}
      {/* <Converter/> */}
      {/* <Scroll /> */}
      {/* <AutoCom /> */}
      {/* <NewsReader /> */}
      {/* <Crypto /> */}
      {/* <ImageGallery/> */}
      {/* <CountryExp/> */}
      {/* <FormWizard /> */}
      {/* <ShoopingCart/> */}
      {/* <Question-31 />
      <ShoppingCart32 /> */}
      {/* <DebounceSearch /> */}
      <FetchUsers />
      <Responsive/>
    </>
  );
}

export default App;


// Dynamic route
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Blog from "./Components/Blog";
// import BlogPost from "./Components/BlogPost";

// function App() {
//   return (
//     <Routes>
//       <Route>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/:id" element={<BlogPost />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

// Nested routes
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Pages/Dashboard";
// import Homepage from "./Components/Pages/Homepage";
// import Profile from "./Components/Pages/Profile";
// import Setting from "./Components/Pages/Setting";
// import AboutPage from "./Components/Pages/AboutPage";
// import Contact from "./Components/Pages/Contact";
// import Address from "./Components/Pages/Address";
// import HomePageNavigation from "./Components/Pages/HomePageNavigation";

// function App() {
//   return (

//     <Routes>
//       <Route index element={<Homepage />} />
//       <Route path="/homenavigate" element={ <HomePageNavigation/>} />
//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route path='profile' element={<Profile />} />
//         <Route path='setting' element={ <Setting/>} />
//       </Route>
//       <Route path='/aboutpage' element={<AboutPage/>}>
//          <Route path='contact' element={<Contact />} />
//         <Route path='address' element={ <Address/>} />
//       </Route>
      
     
//     </Routes>
//   )
// }

// export default App