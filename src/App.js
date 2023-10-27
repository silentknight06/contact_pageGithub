import react from 'react'
// import Navigation from './component/Navigation';
import Navigation from './component/Navigation/Navigation';
import ContactHeader from './component/Navigation/ContactHeader/ContactHeader';
import ContactForm from './component/ContactForm/ContactForm';

import './App.css'
const App =  () =>{
    return (
        <>
           <Navigation/>
           <ContactHeader/>
           <ContactForm/>
        </>
    );
};
export default App;