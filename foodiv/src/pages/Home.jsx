import React  from 'react';
import { Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/download.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import '../styles/home.css';
const Home = () => {
    return (
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                Indulge your inner foodie with our quick and convenient food delivery service.
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> just wait <br /> food at
                  <span> your door!</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, minima.
                </p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                    Order now <i className='ri-arrow-right-s-line'></i>
                  </button>

                  <button className='all__foods-btn'>
                    <Link to='/foods'>See all foods</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Free Delivery
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Home;
