import Input from "../../components/Input";
import "./Colors.css";

function Colors({handleChange}) {
    return <div>
        <h2 className="sidebar-title color-title">Colors</h2>

        <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value={""} name="test2"></input>
            <span className="checkmark all"></span>All
        </label>

        <Input handleChange={handleChange} value="black" title="Black" name="test1" color="black" />
        <Input handleChange={handleChange} value="blue" title="Blue" name="test1" color="blue" />
        <Input handleChange={handleChange} value="red" title="Red" name="test1" color="red" />
        <Input handleChange={handleChange} value="yellow" title="Yellow" name="test1" color="yellow" />
        <Input handleChange={handleChange} value="pink" title="Pink" name="test1" color="pink" />
        <Input handleChange={handleChange} value="green" title="Green" name="test1" color="green" />

        <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="white" name="test1"></input>
            <span className="checkmark" style={{background: "white", border: "2px solid black"}}></span> White
        </label>
    </div>
};

export default Colors;