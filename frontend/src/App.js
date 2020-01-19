import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHome, faInfo, faUser, faProcedures, faHospital, faHospitalSymbol, faStethoscope, faAmbulance, faAward } from '@fortawesome/free-solid-svg-icons';
import WOW from 'wow.js';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


const logo = <FontAwesomeIcon icon={faHeartbeat} />
const home = <FontAwesomeIcon icon={faHome} />
const about = <FontAwesomeIcon icon={faInfo} />
const user = <FontAwesomeIcon icon={faUser} />
const services = <FontAwesomeIcon icon={faProcedures} />
const service_1 = <FontAwesomeIcon icon={faHospital} size='5x' />
const service_2 = <FontAwesomeIcon icon={faHospitalSymbol} size='5x' />
const service_3 = <FontAwesomeIcon icon={faStethoscope} size='5x' />
const service_4 = <FontAwesomeIcon icon={faAmbulance} size='5x' />
const top = <FontAwesomeIcon icon={faAward} size='5x' />

function App() {

	new WOW().init();

	return (
		<div className="App">
			<section id="top">
				<Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
					<Navbar.Brand href="#home">{logo} HSRW Hospital</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home {home}</Nav.Link>
							<Nav.Link href="#about">About {about}</Nav.Link>
							<Nav.Link href="#services">Services {services}</Nav.Link>
							<Nav.Link><Link to="/login">Login {user}</Link></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</section>
			<section id="main">
				<div className="container-fluid">
					<h1>A National Leader in Healthcare Research</h1>
					{top}
					<h3>Women's Choice Award 2019 Winner</h3>
					<br></br>
					<br></br>
					<a href="#about"><button type="button" className="btn btn-lg btn-dark shadow-sm p-3 mb-5 rounded"> Know More</button></a>
				</div>
			</section>
			<section id="about">
				<div className="container">
					<h1 className="text-center wow zoomIn">About us</h1>
					<div className="aboutbg wow slideInLeft"></div>
					<p className="wow slideInRight">HSRW Hospital is committed to provide Quality Health Care Services to the community at large and to the needy for maximum patients satisfaction.  It will endeavor for the continuous professional development and skills of its employees and provide them training in the field of medicine, surgery, pediatric, obstetric & gynecology, nursing, medical laboratory technology, radiography, administration etc. </p>
					<p className="wow slideInRight">HSRW Hospital is a 345 bedded Hospital spread over a green campus. The hospital is equipped with modern infrastructure with 30 Emergency beds, 52 beds at ICU, 7 Operation Rooms, CCU, Dialysis, Maternity LR, IPCU, NICU and 37 Outpatient Department Clinics.

Apart from specialized services, the Hospital has strong support services such as In-House Blood Bank, Food Services, Medical Records, Pharmacy, Physiotherapy, Pastoral Care, Maintenance, IT, Laundry and Housekeeping.

The Hospital also has a well-furnished Medical Library comprising of more than 8,500 text books and over 100 National and International Journals and magazines for Staff, Doctors, DNB, Nursing, X-Ray and Lab Students.

More than 50 companies are empanelled with the Hospital for providing credit facility to the patients. </p>

					<p className="wow slideInRight">Our mission is to provide each patient with the world-class care, exceptional service and compassion we would want for our loved ones.</p>
                  

				</div>
			</section>
			<section id="services">
				<div className="container">
					<h1 className="wow zoomIn text-center" data-wow-delay="0.1s">Services</h1>
					<h5 className="wow zoomIn text-center" data-wow-delay="0.3s">Proin eu libero nunc. Quisque at orci posuere, vestibulum metus et, pharetra augue. Vestibulum est felis, pharetra bibendum nunc ac, iaculis tempor turpis. Vivamus sed mattis neque. Morbi interdum efficitur.</h5>
					<div className="row">
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.1s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">In hac</h5>
									<p className="card-text text-center">{service_1}</p>
									<ul>
										<li>Nam sollicitudin ex</li>
										<li>In fermentum, purus</li>
										<li>Donec bibendum</li>
										<li>Cras dolor dui</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Etiam vehicula</h5>
									<p className="card-text text-center">{service_2} </p>
									<ul>
										<li>Fusce in neque</li>
										<li>Pellentesque feugiat</li>
										<li>Luctus quam</li>
										<li>Donec malesuada</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.6s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Integer at</h5>
									<p className="card-text text-center">{service_3}</p>
									<ul>
										<li>Maecenas consectetur</li>
										<li>Mauris molestie</li>
										<li>Fusce non placerat</li>
										<li>Aenean a efficitur</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="wow bounceInUp col-lg-3 col-md-6 col-sm-12 col-xs-12" data-wow-delay="0.8s">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title text-center">Phasellus elementum</h5>
									<p className="card-text text-center">{service_4}</p>
									<ul>
										<li>Etiam eu vehicula</li>
										<li>Ut sollicitudin justo</li>
										<li>Nunc placerat elit</li>
										<li>Aliquam ac justo</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
