import img from './assets/portfolio.png'
export function Landing() {
    return (
        <div className="landing">
            <div className="intro">
                <img className='img' src={img} ></img>
                 <p className='p1'>Hello, I'm Youssef Eissa</p>
                <p className='p2'>A frontend developer specialised in React</p>
            </div>
            
    </div>
    )
}