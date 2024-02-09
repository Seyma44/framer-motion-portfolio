import React from "react";
import  Heading from "../components/common/Heading";
import { contact } from "../data/dummydata";

const Contact: React.FC = () => {
  return (
    <>
      <div className='contact'  id="contact">
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form>
                <div className='flex'>
                  <input type='text' placeholder='Name' data-aos='flip-left' />
                  <input type='email' placeholder='Email' data-aos='flip-right' />
                </div>
                <input type='email' placeholder='Subject' data-aos='flip-up' />
                {/* Change cols='30' to cols={30} */}
                <textarea name='' id='' cols={30} rows={10} data-aos='flip-down'></textarea>
                <button  className='secondaryBtn' data-aos='zoom-in-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item, index) => (
                <div className='box' data-aos='zoom-in' key={index}>
                  {/* <i>{item.icon}</i> */}
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
