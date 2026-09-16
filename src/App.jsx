import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

import Counter from "./Components/Question1.jsx";
import Toggle from "./Components/Question2.jsx";
import Clock from "./Components/Question3.jsx";
import CharCounter from "./Components/Question4.jsx";
import Todo from "./Components/Question5.jsx";
import Tip from "./Components/Question6.jsx";
import Bmi from "./Components/Question7.jsx";
import Faq from "./Components/Question8.jsx";
import Tabcom from "./Components/Question9.jsx";
import StarRating from "./Components/Question10.jsx";
import Carousel from "./Components/Question11.jsx";
import Modal from "./Components/Question12.jsx";
import PasswordMeter from "./Components/Question13.jsx";
import QuoteGen from "./Components/Question14.jsx";
import Stopwatch from "./Components/Question15.jsx";
import CountDownTimer from "./Components/Question16.jsx";
import WeatherApp from "./Components/Question17.jsx";
import Profiler from "./Components/Question18.jsx";
import RecipeSearch from "./Components/Question19.jsx";
import MovieDb from "./Components/Question20.jsx";
import Converter from "./Components/Question22.jsx";
import Scroll from "./Components/Question23.jsx";
import AutoCom from "./Components/Question24.jsx";
import NewsReader from "./Components/Question25.jsx";
import Crypto from "./Components/Question26.jsx";
import ImageGallery from "./Components/Question27.jsx";
import CountryExp from "./Components/Question28.jsx";
import FormWizard from "./Components/Question29.jsx";
import Blog from "./Components/Blog.jsx";
import ShoppingCart32 from "./Components/Question32.jsx"
import DebounceSearch from "./Components/DebounceSearch.jsx.jsx";
import FetchUsers from "./Components/FetchUsers.jsx";
import Responsive from "./Components/Responsive.jsx";
import Pagination from "./Components/Question34B.jsx";
import UserPagination from "./Components/Question34A.jsx";
import FormTest from "./Components/Question35.jsx";
import Toast from "./Components/Toast.jsx";
import Kanban from "./Components/Question39.jsx";
import MarkdownEditor from "./Components/Question40.jsx";
import NotesApp from "./Components/Question41.jsx";
import ExpenseTracker from "./Components/Question42.jsx";
import HabitTracker from "./Components/Question43.jsx";
import QuizApp from "./Components/Question44.jsx";
import ChatApp from "./Components/Question45.jsx";
import DataTable from "./Components/Question47.jsx";
import CalendarApp from "./Components/Question48.jsx";
import AnalyticsDashboard from "./Components/Question49.jsx";

function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <Clock /> 
      <CharCounter/>
      <Todo />
      <Tip />
      <Bmi />
      <Faq />
       <Tabcom/>
      <StarRating />
      <Carousel />
      <Modal /> 
      <PasswordMeter />
      {/* <QuoteGen /> */}
      {/* <Stopwatch /> */}
      {/* <CountDownTimer /> */}
      {/* <WeatherApp /> */}
      {/* <Profiler />   */}
      {/* <RecipeSearch /> */}
      {/* <MovieDb /> */}
      {/* <Converter/>
      {/* <Scroll /> */}
      {/* <AutoCom /> */}
      {/* <NewsReader /> */}
      {/* <Crypto /> */}
      {/* <ImageGallery/> */}
      {/* <CountryExp/> */}
      {/* <FormWizard /> */}
      
      <Question-31 />
      <ShoppingCart32 />
      {/* <DebounceSearch /> */}
      {/* <FetchUsers /> */}
      {/* <Responsive /> */}
      <UserPagination />
      <FormTest />
      <Toast /> 
      <Kanban />
      <MarkdownEditor/>
      <NotesApp />
      <ExpenseTracker />
      <HabitTracker />
      <QuizApp />
      <ChatApp />
     <DataTable /> 
      <CalendarApp />
       <AnalyticsDashboard/>
    
    </>
  );
}

export default App;


// Dynamic route
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Blog from "./Components/Blog.jsx";
// import BlogPost from "./Components/BlogPost.jsx";

// function App() {
//   return (
//     <Routes>
//       <Route>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/:id" element={<BlogPost />} />
//        </Route>
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