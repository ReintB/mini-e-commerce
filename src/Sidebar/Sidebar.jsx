import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

function Sidebar({ handleChange }) {
    return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <a href=""><h1>🛒</h1></a>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
    </section>
    </>
    );
}

export default Sidebar;