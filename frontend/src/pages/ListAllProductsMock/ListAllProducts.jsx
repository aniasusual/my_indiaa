import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import "./listAllProducts.scss";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/layout/loading/Loader";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import axios from "axios";
// import Typography from "@material-ui/core/Typography"
// import Slider from "@material-ui/core/Slider";

const ListAllProducts = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const [allProducts, setAllProducts] = useState([]);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [price, setPrice] = useState([0, 2000000]);

    // const { loading, error, products, productsCount, resultPerPage } =
    //     useSelector((state) => state.products);

    const { keyword } = useParams();

    // const setCurrentPageNo = (e) => {
    //     setCurrentPage(e);
    // };

    // const priceHandler = (event, newPrice) => {
    //     setPrice(newPrice);
    // };

    useEffect(async () => {
        try {
            let link = `https://8e3c99b3-b6e6-40eb-a58b-dee19f3c40a3.mock.pstmn.io/api/v1/products`
            const { data } = await axios.get(`https://8e3c99b3-b6e6-40eb-a58b-dee19f3c40a3.mock.pstmn.io/api/v1/products`)

            setAllProducts(data.allProductsList);
            console.log("loda lele list", data.allProductsList);
        } catch (error) {

        }
    }, []);

    return (
        <div>
            {/* {loading ? (
                <Loader />
            ) : ( */}
            <div className="productPage">
                <div className="productHead">
                    <h1>Products</h1>
                </div>

                <div className="productContainer">
                    {allProducts &&
                        allProducts.map((product) => <ProductCard product={product} />)}
                </div>

                {/* {resultPerPage < productsCount && (
                        <div className="paginationBox">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText="Next"
                                prevPageText="Prev"
                                firstPageText="1st"
                                lastPageText="Last"
                                itemClass="page-item"
                                linkClass="page-link"
                                activeClass="pageItemActive"
                                activeLinkClass="pageLinkActive"
                            />
                        </div>
                    )} */}
            </div>
            {/* )} */}
        </div>
    );
};

export default ListAllProducts;
