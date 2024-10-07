import React from 'react'
import "./services.css"
import Navbar from '@/Components/Navbar/Navbar'

const services = () => {
      return (
            <>
                  <Navbar />
                  <div className='services'>
                        <h1>Our Services</h1>
                        <div className="services-container">
                              <div className="services-left-section">
                                    <img src="/Aurora/Aurora (6).jpg" alt="banner" />
                              </div>
                              <div className="services-right-section">
                                    <h2>Vehicle Sales</h2>
                                    <p>At CRYSTAN, we offer a wide selection of new and used vehicles to suit your every need. Whether you're looking for a reliable daily driver, a luxurious sedan, or a powerful SUV, our knowledgeable sales team is here to assist you in finding the perfect vehicle. We provide detailed information on each vehicle, including specifications, features, and pricing. Additionally, we offer flexible financing options and lease agreements to make your purchase as easy as possible.</p>
                              </div>
                        </div>
                        <div className="services-container">
                              <div className="services-right-section">
                                    <h2>Service and Repairs</h2>
                                    <p>Keep your vehicle running smoothly with our comprehensive service and repair offerings. Our skilled technicians are equipped to handle a wide range of maintenance tasks, from routine oil changes and tire rotations to major engine repairs. We use state-of-the-art diagnostic tools to identify and address any issues promptly. Additionally, we offer brake and suspension services, bodywork and paint, and more.</p>
                              </div>
                              <div className="services-left-section">
                                    <img src="/service-and-repaire.jpg" alt="banner" />
                              </div>
                        </div>
                        <div className="services-container">
                              <div className="services-left-section">
                                    <img src="/parts-and-accessories.jpg" alt="banner" />
                              </div>
                              <div className="services-right-section">
                                    <h2>Parts and Accessories</h2>
                                    <p>Upgrade your vehicle with genuine OEM parts and a variety of aftermarket accessories. Our extensive inventory includes everything from filters and spark plugs to performance enhancements and cosmetic upgrades. Visit our online parts catalog to browse our selection and order the parts you need.</p>
                              </div>
                        </div>
                        <div className="services-container">
                              <div className="services-right-section">
                                    <h2>Towing and Roadside Assistance</h2>
                                    <p>At CRYSTAN, we understand that unexpected car troubles can be stressful. That's why we offer reliable towing and roadside assistance services to get you back on the road quickly and safely. Our experienced towing professionals are equipped with the latest equipment to handle any situation, from minor breakdowns to major accidents.</p>
                              </div>
                              <div className="services-left-section">
                                    <img src="/Towing-and-Roadside-Assistance.jpg" alt="banner" />
                              </div>
                        </div>
                        <div className="services-container">
                              <div className="services-left-section">
                                    <img src="/Insurance-Claims-Assistance.jpg" alt="banner" />
                              </div>
                              <div className="services-right-section">
                                    <h2>Insurance Claims Assistance</h2>
                                    <p>Dealing with insurance claims after an accident can be a hassle. At CRYSTAN, we are here to help. Our knowledgeable staff can assist you with the entire claims process, from filing the necessary paperwork to negotiating with your insurance company. We will work diligently to ensure you receive fair compensation for any damages or losses.</p>
                              </div>
                        </div>


                  </div>
            </>
      )
}

export default services
