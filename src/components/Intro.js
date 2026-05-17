import React from 'react';
import Image from '../components/Image';
//import VisitorCounter from '../components/VisitorCounter';

function Intro() {
    return (
        <section className="IntroWrapper">

            {/* LEFT : TEXT */}
            <div className="IntroText">

                {/* TOP AREA */}


                <h1 className="IntroTitle">
                    Making Legal Knowledge
                    <br />
                    More Understandable
                </h1>

                <p className="IntroDescription">
                    Welcome. I am a professor at Dong-A University Law School,
                    where I teach Korean Civil Law and conduct research on
                    legal data, legal AI, and computational law.
                </p>

                <p className="IntroDescription">
                    My work focuses on transforming legal knowledge into
                    structured and computable forms — because the law should
                    first be understandable before it can truly guide people.
                </p>

                {/* CONTACT */}
                <div className="ContactCard">

                    <div className="ContactItem">
                        <span className="ContactIcon">📞</span>
                        <span>+82-51-200-8513</span>
                    </div>

                    <div className="ContactItem">
                        <span className="ContactIcon">✉️</span>
                        <span>drparklaw [at] gmail.com</span>
                    </div>

                    <div className="ContactItem">
                        <span className="ContactIcon">📍</span>
                        <span>
                            Dong-A Law School #604,
                            225 Gudeok-ro, Seo-gu,
                            Busan, Republic of Korea
                        </span>
                    </div>

                </div>

            </div>

            {/* RIGHT : IMAGE */}
            <div className="IntroImageArea">

                <Image
                    url="drpark_latest.png"
                    caption="What truly is logic? ..."
                />

                <div className="IntroImageQuote">
                    “Law, too, can be engineered.”
                </div>

            </div>

        </section>
    );
}

export default Intro;