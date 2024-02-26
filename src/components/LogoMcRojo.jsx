import LogoRojo from "../assets/mcdonalds-logo-bg-red.png"
const LogoMcRojo = ({logoGrande}) => {
    let tamano = logoGrande ? 100 : 40;

    return (
        <img src={LogoRojo} alt="McDonalds Logo" width={tamano} />
    )
}
export default LogoMcRojo;