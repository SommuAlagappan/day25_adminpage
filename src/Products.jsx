import React from 'react'
import { Link } from "react-router-dom";

function Products() {
    return ( <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 mx-5">List of Products - Smartphones</h1>
        <Link to="/portal/createProduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mx-5"><i
                className="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
                </div>

       
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>RAM Storage</th>
                                <th>Processor</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>M32</td>
                                <td>Samsung</td>
                                <td>4GB+32GB</td>
                                <td>Exonys Processor</td>
                                <td>Rs.14000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>F22</td>
                                <td>Samsung</td>
                                <td>2GB+32GB</td>
                                <td>MediaTek Processor</td>
                                <td>Rs.10000</td>
                            </tr> <tr>
                                <td>3</td>
                                <td>x3</td>
                                <td>POCO</td>
                                <td>6GB+64GB</td>
                                <td>Snapdragon Processor</td>
                                <td>Rs.16000</td>
                            </tr> <tr>
                                <td>4</td>
                                <td>iPhone 11</td>
                                <td>Apple</td>
                                <td>4GB+64GB</td>
                                <td>i5 processor</td>
                                <td>Rs.45000</td>
                            </tr> <tr>
                                <td>5</td>
                                <td>iPhone 13</td>
                                <td>Apple</td>
                                <td>6GB+128GB</td>
                                <td>i7 Processor</td>
                                <td>Rs.70000</td>
                            </tr> <tr>
                                <td>6</td>
                                <td>K720</td>
                                <td>Redmi</td>
                                <td>6+32GB</td>
                                <td>Exonys Processor</td>
                                <td>Rs.14000</td>
                            </tr> <tr>
                                <td>7</td>
                                <td>F41</td>
                                <td>Samsung</td>
                                <td>6GB+64GB</td>
                                <td>Exonys Processor</td>
                                <td>Rs.16000</td>
                            </tr> <tr>
                                <td>8</td>
                                <td>S21</td>
                                <td>Samsung</td>
                                <td>8GB+128GB</td>
                                <td>Exonys Processor</td>
                                <td>Rs.25000</td>
                            </tr> <tr>
                                <td>9</td>
                                <td>N32</td>
                                <td>Nokia</td>
                                <td>6GB+128GB</td>
                                <td>Snapdragon Processor</td>
                                <td>Rs.19000</td>
                            </tr> <tr>
                                <td>10</td>
                                <td>L95</td>
                                <td>OPPO</td>
                                <td>4GB+32GB</td>
                                <td>MediaTek Processor</td>
                                <td>Rs.12000</td>
                            </tr>
                        </tbody></table></div></div>
                        </>
                        
    )
}

export default Products