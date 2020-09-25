import React from 'react';
import './styles.css';

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            filterValue: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let { name, value, type } = e.target;
        value = type === "checkbox" ? e.target.checked : value;
        this.setState({
            [name]: value,
        });
    }
    render() {
        return(
            <div className="filterable-product-table">
                <SearchBar onChange={this.handleChange} searchValue={this.state.searchValue} checkboxValue={this.state.filterValue} />
                <ProductTable products={products} searchValue={this.state.searchValue} checkboxValue={this.state.filterValue} />
            </div>
        );
    }

}
function SearchBar(props) {
    return(
        <div className="search-bar">
            <input name="searchValue" type="text" placeholder="Search..." onChange={props.onChange}/>
            <div className="checkbox-elem">
                <input name="filterValue" type="checkbox" checked={props.checkboxValue} onChange={props.onChange} />
                <span>Only show products in stock</span>
            </div>
        </div>
    );
}
function ProductTable(props) {
    // Do something here
    const searchValue = props.searchValue;
    const filterValue = props.checkboxValue;
    const products = props.products;
    const searchAndFilterProducts = products.filter(product => {
        if (filterValue) {
            return product.name.toLowerCase().search(searchValue.toLowerCase()) !== -1 && product.stocked;
        }
        return product.name.toLowerCase().search(searchValue.toLowerCase()) !== -1;
    });
    // get distinct categories array
    const categories = [...new Set(searchAndFilterProducts.map(product => {
        return product.category;
    }))];
    const rows = [];
    categories.forEach(category => {
        rows.push(<ProductCategoryRow categoryName={category} key={category} />);
        searchAndFilterProducts.filter(product => product.category === category);
        searchAndFilterProducts.forEach(product => {
            rows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} key={product.name + product.price + product.stocked + category} />);
        });
    });
    return(
        <div className="product-table">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
function ProductCategoryRow(props) {
    return(
        <tr>
            <th colSpan="2">{props.categoryName}</th>
        </tr>
    );
}
function ProductRow(props) {
    return(
            <tr className={"stocked-" + props.stocked.toString()}>
                <td>{props.name}</td>
                <td>{props.price}</td>
            </tr>
    );
}
class App extends React.Component {
    render() {
        return(
            <div>
                <h1 className="learning-topic">Thinking In React</h1>
                <FilterableProductTable />
            </div>
        );
    }
}
export default App;