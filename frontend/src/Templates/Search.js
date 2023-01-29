import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="bg-success my-md-2 mx-md-2 text-light ">
                    <div className="container flex-d flex-justify-content-center">
                        <div className="row ">
                            <div className="col-sm-3 "></div>
                            <div className="col-sm-6  ">
                                <div className="form-group mb-3  ">
                                    <div className="d-flex justify-content-center">
                                        <label for="" className="display-5 text-light ">Search</label>
                                    </div>
                                    {/* Search input field */}
                                    <input type="text" className="form-control mt-3 fs-5 " id="floatingInput" />
                                    <div className="d-flex justify-content-center">
                                        {/* Search submit button */}
                                        <button type="submit" className="btn-primary mt-2 fs-2">Search</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Search;