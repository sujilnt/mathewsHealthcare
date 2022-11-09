import videoBg from '../../assets/img/video_bg_1.jpg';
import imgBlock1 from '../../assets/img/home1/nurse-care.jpg';
import tabImg1 from '../../assets/img/home1/tab-img.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const AboutOne = ({pt}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="EZ9DrY43wtw"
            onClose={() => setOpen(false)}
        />
        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="busico"/>
                            <div className="popup-video-block d-flex justify-content-center align-items-center bg-cover" style={{backgroundImage: `url(${videoBg})`}}>
                                <div className="video-play-btn">
                                    <span className="popup-video" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>                     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>01. About Company</span>
                                <h2>Healthcare/Educational Consultancy</h2>
                            </div>
                            <p>
                                Matthews International is an enterprising business which aspires to contribute 
                                to healthy living within Wales by providing temporary staffing of nurses,
                                nursing assistants and carers to the NHS, nursing homes and residential homes.
                            </p>
                        </div>
                        <div className="tab-content-block">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="true">
                                        Healthcare
                                        </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-materials-tab" data-bs-toggle="pill" data-bs-target="#pills-materials" type="button" role="tab" aria-controls="pills-materials" aria-selected="false">
                                    Education 
                                        </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab">
                                    <div className="tab-inner-contents">
                                        <div className="checked-features-list">
                                            <p>
                                            Matthews Healthcare provide temporary staff throughout South Wales and are headquartered in Cardiff. 
                                            Our tight-knit team are very well-organised and very flexible. They work diligently 
                                            with healthcare providers so they can provide the best care for their patients. Our 
                                            staff are well-versed in clinical decision-making, very empathetic towards their patients
                                            and work very well in teams.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-materials" role="tabpanel" aria-labelledby="pills-materials-tab">
                                    <div className="tab-inner-contents">
                                        <div className="checked-features-list">
                                            <p>
                                            Matthews Education is an international agency helping fulfil the goals of students across the globe to complete their 
                                            education within illustrious UK universities. Our experienced team also supports oversees nurses who want to 
                                            apply for jobs within the British Healthcare system, the NHS. No matter what your background, we will help you 
                                            with every step of the journey.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                        </div>
                        <Link to="/about" className="plus-text-btn mt-lg-5 mt-4">
                            <div className="icon">
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="link-text">
                                <span>Explore</span> More about Us
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutOne;