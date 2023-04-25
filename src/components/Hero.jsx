import React from 'react'
import "./styles/Hero.css"

const Hero = ({title}) => {
    return (
        <section className="hero hero-slide-1">
            <div className="hero-container">
                <article className="hero-container__text-box">
                    <h1>{title}</h1>
                    <p>
                        <strong>CoolCase</strong>  es la tienda online más cool de accesorios para tu celu
                    </p>
                    <p>Aquí encontrarás todo lo que necesitas para que tu celular se vea más facherito</p>
                </article>
            </div>
        </section>
    )
}


export default Hero