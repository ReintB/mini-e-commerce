import Input from "../../components/Input";
import "./Category.css";

function Category({handleChange}) {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value={""} name="test"></input>
                    <span className="checkmark"></span>All
                </label>

                <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
                <Input handleChange={handleChange} value="flats" title="Flats" name="test" />
                <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" />
                <Input handleChange={handleChange} value="heels" title="Heels" name="test" />
                <Input handleChange={handleChange} value="character" title="Characters" name="test" />
                <Input handleChange={handleChange} value="animal" title="Animal" name="test" />
                <Input handleChange={handleChange} value="vehicle" title="Vehicle" name="test" />
                <Input handleChange={handleChange} value="house" title="House" name="test" />
            </div>
        </div>
    );
};

export default Category;