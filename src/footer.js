import './footer.css';

function Footer() {
    return(
        <div className='footer'>
            <div className='footer__content'>
                <h3>supademo</h3>

                <div className='footer__usecase'>
                    <h4>USE CASES</h4>
                    <ul>
                        <li><a>Customer Success</a></li>
                        <li><a>Product Marketing</a></li>
                        <li><a>Sales Enablement</a></li>
                        <li><a>Training & Onboarding</a></li>
                        <li><a>All Use Cases</a></li>
                    </ul>
                </div>

                <div className='footer__company'>
                    <h4>COMPANY</h4>
                    <ul>
                        <li><a>Testimonials</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Affiliate Program</a></li>
                        <li><a>Support Center</a></li>
                    </ul>
                </div>

                <div className='footer__product'>
                    <h4>PRODUCT</h4>
                    <ul>
                        <li><a>Interactive Tour</a></li>
                        <li><a>Features</a></li>
                        <li><a>Integrations</a></li>
                        <li><a>Showcase Examples</a></li>
                        <li><a>Compare to Alternatives</a></li>
                        <li><a>Product Updates</a></li>
                    </ul>
                </div>

                <div className='footer__legal'>
                    <h4>LEGAL</h4>
                    <ul>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Terms of Service</a></li>
                    </ul>
                </div>

            </div>

            <div className='footer__footer'>
                <p>Supademo, Inc. All Right Reserved.</p>
                <img className='Company__image' />
                <img className='Twitter__image' />
                <img className='Linkedln__image' />
            </div>

        </div>
    )
}

export default Footer;