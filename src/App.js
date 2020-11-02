import React, {useState} from "react";
import "./styles.css";
import Modal from "./components/Modal";


export default function App() {
    
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                img='./Capture1.PNG'
                title='Iphone 12 Pro' 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod."
                        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
                        
            />
       

            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='Samsung S20 Ultra'
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod."
                        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
            />

            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Cual es mejor?' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.'
                fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur."
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Joaquín Vallejos
            </span>
            <br/>
            <span className="header-text">
                El blog de Tecnologia.
            </span>
        </div>
    );
   
    
}






const Card = (props) =>{

    const [show, setShow] = useState(false)

    return(
        <>
        <Modal fullDescription={props.fullDescription} show={show} close={() =>setShow(false)} ></Modal>
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
            <button onClick={() =>setShow(true)}>Ver mas</button>
        </div>
        </>
    )
}
 



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contacto</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contactanos</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Joaquin Vallejos
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        +569 6776 8058
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        joaquin.vallejos04@inacapmail.cl
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Contacto
                    </span>

                    <input type="text" placeholder="Email" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button className="contact-btn">Enviar</button>
                </div>
            </div>
        </div>
    );
   
     
     
}

