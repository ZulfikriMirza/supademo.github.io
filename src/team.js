import './team.css';

function Team() {
    return (
        <div className='team'>
            <div className='team__header'>
                <h1 className='team__title'>"Hands down the <span>best demo product we've used</span> so far. It's like Loom but 10x more intuitive, embeddable and slick."</h1>

                <div className='team__founder'>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className='team__founder__name'>
                        <h5>James</h5>
                        <p>Founder & CEO</p>
                    </div>

                </div>
            </div>
            <div className='team__content'>
                <div className='team__member'>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='headline'>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className='team__founder__name'>
                                        <h5>James</h5>
                                        <p>Founder & CEO</p>
                                    </div>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                </div>
                <button className='btn testimonial' href='/testimonial'>View Testimonials &#8594;</button>
            </div>
        </div>
    )
}

export default Team;