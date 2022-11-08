import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../assets/img/home1/slide1.jpg';
import slide2 from '../../assets/img/home1/slide2.jpg';

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const HeroOne = () => {
    return (
        <section className="hero-wrapper hero-1">
        <Swiper navigation={true} modules={[Navigation]} loop>
            <SwiperSlide className=" bg-cover" style={{backgroundImage: `url(${slide1})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">
                                    We're here for you
                                    </h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">
                                    Helping you in recruiting nurses to work for nursing homes and hospitals 
                                    in order to provide short term cover
                                    </p>
                                <a href="contact.html" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-cover" style={{backgroundImage: `url(${slide2})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                            <div className="hero-contents pe-lg-3">
                                <h1 className="fs-lg wow fadeInLeft animated" data-wow-duration="1.3s">Willing to study in UK</h1>
                                <p className="pe-lg-5 wow fadeInLeft animated" data-wow-duration="1.3s" data-wow-delay=".4s">
                                    We can help  you complete your education within illustrious UK universities.
                                    </p>
                                <a href="contact.html" className="theme-btn me-sm-4 wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".8s">contact us</a>
                                <a href="about.html" className="plus-text-btn wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">
                                    <div className="icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                    <div className="link-text">
                                        <span>Explore</span> More about Us
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
    )
}

export default HeroOne;