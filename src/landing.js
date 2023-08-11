import './landing.css';

function Landing() {
    return(
        <section className='landing'>
            <div className='landing__content'>
                <h1 className='landing__title'>Demonstrate products and workflow at scale.</h1>
                <p className='landing__description'>Create interactive product demos and click-through guides in seconds. For free with no code</p>
                <button className='landing__button'>Get Supademo for free&#8594;</button>
                <img className='landing__image'/>
                <div className='landing__footer'>
                    <h2 className='landing__footertitle'>Trusted by 3000+ users at companies like</h2>
                    <div className='landing__footer-img'>
                        <img />
                        <img />
                        <img />
                        <img />
                        <img />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;