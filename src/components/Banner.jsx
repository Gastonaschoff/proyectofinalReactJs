import BannerApp1 from "../assets/Banner_app1.jpg"
import BannerApp2 from "../assets/Banner_app2.jpg"
const Banner = () => {
    return (
        <div className="container my-5">
        <div className="row">
            <div className="col">
                <div className="card">
                    <img src={BannerApp1} className="img-fluid" alt="..." />
                    <div className="card-body text-center">
                        <h4>¡¡Squishmallows llegó a Cajita Feliz!!</h4>
                        <p>Abracen la diversión con los juguetes de Squishmallows en Cajita Feliz</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={BannerApp2} className="img-fluid" alt="..." />
                    <div className="card-body text-center">
                        <h4>¡Nueva Grand Tasty Spicy!</h4>
                        <p>#SePicó todo en McDonald’s. La nueva Grand Tasty Spicy tiene una salsita con el picante justo que seguro te va a encantar. Ya podés probarla en todos los locales.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Banner;