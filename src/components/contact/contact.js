import React from 'react'
import './contact.component.scss'
import { SiGithub, SiIndeed, SiLinkedin } from 'react-icons/si'

export default function Contact() {
    return(
            <div className="contact-page">
                <h1>Contact</h1>
                <div className="social-icons">
                    <a href="https://www.github.com/KevinStolk"><SiGithub></SiGithub></a>
                    <a href="https://www.linkedin.com/in/kevin-stolk-a86920219/"><SiLinkedin></SiLinkedin></a>
                    <a href="https://my.indeed.com/p/kevins-s8mkxv6"><SiIndeed></SiIndeed></a>
                </div>
            </div>
    )
}