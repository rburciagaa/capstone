import "../styles/hero.css"

const Hero=()=>{
    return(
        <>
            <section className="heroSection">
                <div className="divTitle">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="btn">Reserve a table</button>
                </div>
                <img className="hero-image" src="/images/gourmet.jpg" alt="gourment dish"/>
            </section>
        </>
    )
}

export default Hero