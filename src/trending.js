import './trending.css';

function Trending() {
    return(
        <div className='trending'>
            <div className='trending__title'>
                <h1>Explore trending Supademos</h1>
                <p>Get inspiration from popular demos embedded on websites, onboarding, support, docs, and more.</p>
            </div>

            <button className='btn trending__button'>Explore Use Cases &#8594;</button>

            <div className='trending__card'>
                <div className="card trending__cards">
                            <div className="card-body">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className='trending__card__content'>
                                        <h5>Porter Metrics</h5>
                                        <p>Product Marketing</p>
                                </div>
                            </div>
                </div>
                <div className="card trending__cards">
                            <div className="card-body">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className='trending__card__content'>
                                        <h5>Porter Metrics</h5>
                                        <p>Product Marketing</p>
                                </div>
                            </div>
                </div>
                <div className="card trending__cards">
                            <div className="card-body">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className='trending__card__content'>
                                        <h5>Porter Metrics</h5>
                                        <p>Product Marketing</p>
                                </div>
                            </div>
                </div>
                <div className="card trending__cards">
                            <div className="card-body">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className='trending__card__content'>
                                        <h5>Porter Metrics</h5>
                                        <p>Product Marketing</p>
                                </div>
                            </div>
                </div>
            </div>

        </div>
    )
}

export default Trending;