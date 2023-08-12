import './reason.css'

function Reason() {
    return (
        <div className='reason'>
            <div className='reason__heading'>
                <h2 className='reason__title'>
                    Drive productivity across your team
                </h2>
                <p className='reason__description'>No more screenshot markups or (re)recording and editing videos. Drive revenue, engangement and customer success with Supademo.</p>
            </div>

            <div className='reason__percentage'>
                <div className="reason__each">
                    <h2>25<span>%</span></h2>
                    <p>Increase in team productivity</p>
                </div>
                <div className="reason__each">
                    <h2>250<span>%</span></h2>
                    <p>Increase in user engagement</p>
                </div>
                <div className="reason__each">
                    <h2>10<span>x</span></h2>
                    <p>Close support tickets faster</p>
                </div>
            </div>
            <div className='reason__card'>
                <div className='reason__each__card'>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Drive customer success</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn card__each__button">For Customer Success &#8594;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Resolve support tickets faster</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn card__each__button">For Support &#8594;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Conduct sales demos at scale</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn card__each__button">For Pre-Sales &#8594;</a>
                        </div>
                    </div>

                </div>


                {/* <div className="card__button">
                    <div className="card__arrow">
                        <p>&#8592;</p>
                    </div>
                    <div className="card__arrow">
                        <p>&#8594;</p>
                    </div>


                </div> */}
            </div>



        </div>

    )
}

export default Reason;