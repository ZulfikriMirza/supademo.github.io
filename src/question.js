import './question.css';

function Question() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        })
    })

    return(
        
        <div className='question'>
            <h1 className='question__title'>
                Frequently asked questions
            </h1>

            <div className='faq'>

                <div className='question__list'>
                    <h3>What is an interactive product demo or guide?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>

                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>

            <div className='faq'>
                <div className='question__list'>
                    <h3>What are the most popular ways companies use Supademo?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>

            <div className='faq'>
                <div className='question__list'>
                    <h3>How is Supademo different?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            <div className='faq'>
                <div className='question__list'>
                    <h3>What are workspaces and who can i add to my workspace?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            <div className='faq'>
                <div className='question__list'>
                    <h3>How does Supademo help product marketing?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            <div className='faq'>
                <div className='question__list'>
                    <h3>How does Supademo help customers success or support?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            <div className='faq'>
                <div className='question__list'>
                    <h3>How does Supademo help internal training or onboarding</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            <div className='faq'>
                <div className='question__list'>
                    <h3>How do i get started?</h3>

                    <svg width={15} height={10} viewBox='0 0 42 25'>
                        <path
                            d='M3 3L21 21L39 3'
                            stroke='white'
                            stroke-width={7}
                            stroke-linecap="round"
                            />
                    </svg>
                </div>
                
                <div className='answer'>
                    <p>
                        javascript is javascript is javascript isjavascript isjavascript isjavascript isjavascript isjavascript is
                    </p>
                </div>
            </div>
            

            <div className='question__footer'>
                <h2>
                    Get the fastest, easiest interactive demo platform for teams
                </h2>
                <button className='landing__button'>Get Supademo for free&#8594;</button>
            </div>
        </div>
    )
}

export default Question;