import React from 'react';

const Achievements = () => {
    return (
        <div style={{ padding: '5% 10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ maxWidth: '120rem', margin: '0 auto', padding: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ maxWidth: '100%' }}>
                        <div style={{ fontSize: '3rem', color: 'aliceblue', fontWeight: 'bold', paddingBottom: '4rem' }} id="about">
                            Achievements
                        </div>

                        <div style={{ lineHeight: '1.6', fontSize: '1.8rem', color: 'rgb(136, 146, 176)', marginBottom: '2rem' }}>
                            Earned Gold Google Badge for Excellence in NLP, LLMs.
                        </div>
                        <div style={{ lineHeight: '1.6', fontSize: '1.8rem', color: 'rgb(136, 146, 176)', marginBottom: '2rem' }}>
                            Earned Cisco CCNA Security under lecturer Matt Constable (2023)
                        </div>
                        <div style={{ lineHeight: '1.6', fontSize: '1.8rem', color: 'rgb(136, 146, 176)', marginBottom: '2rem' }}>
                            Received Excellence Certificate in Cognitive Applications (ML) Workshop, surpassing 500 participants.
                        </div>
                        <div style={{ lineHeight: '1.6', fontSize: '1.8rem', color: 'rgb(136, 146, 176)', marginBottom: '2rem' }}>
                            Winner of IEEE Project Symposium Prakalp 2024, Credentials: STB99412
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
