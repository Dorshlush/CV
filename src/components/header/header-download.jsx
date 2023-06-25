import React from 'react'
import CV from '../../assets/CV-Dor Shlush.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn' style={{ color: '#fff' }}>Download CV</a>
            <a href="#projects" className='btn btn-primary'>My Projects</a>
        </div>
    )
}

export default CTA;