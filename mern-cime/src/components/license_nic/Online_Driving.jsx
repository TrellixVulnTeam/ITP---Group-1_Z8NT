import React, { Component } from "react";

import axios from 'axios';

export default class OnlineDriving extends Component {

  constructor(props) {
    super(props);

    this.onchangeRefno = this.onchangeRefno.bind(this);
    this.onchangeName = this.onchangeName.bind(this);
    this.onchangeNic = this.onchangeNic.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this);
    this.onchangeGramaNiladhari = this.onchangeGramaNiladhari.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      refNo: "",
      name: "",
      nic: "",
      address: "",
      phone: "",
      description: "",
      date: "",
      officer_incharge: "",
      grama_niladhari: "",
    };
  }

  onchangeRefno(e) {
    this.setState({
      refNo: e.target.value,
    });
  }

  onchangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onchangeNic(e) {
    this.setState({
      nic: e.target.value,
    });
  }

  onchangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onchangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onchangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onchangeOfficerIncharge(e) {
    this.setState({
      officer_incharge: e.target.value,
    });
  }

  onchangeGramaNiladhari(e){
    this.setState({
      grama_niladhari: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const complain = {
      refNo: this.state.refNo,
      name: this.state.name,
      nic: this.state.nic,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      date: this.state.date,
      officer_incharge: this.state.officer_incharge,
      grama_niladhari: this.state.grama_niladhari,
    };

    axios.post('http://localhost:5000/license/add', complain)
    .then(res => console.log(res.data));

    this.setState({
      refNo: "",
      name: "",
      nic: "",
      address: "",
      phone: "",
      description: "",
      date: "",
      officer_incharge: "",
      grama_niladhari: "",
    })

    console.log(complain);
  }

  render() {
    return (

        <div>

          <div class="container">
            <div class="card text-danger  bg-dark">
              <div class="card-header">
                <h3>Driving License Lost</h3>
              </div>
              <div class="card-body"></div>

              <div class="container">

              <form
                  onSubmit={this.onSubmit}
                >
                  <div className="form-group">
                    <label>
                      <b>RefNo:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onchangeName}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>NIC Number :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.onchangeNic}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Address:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onchangeAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Phone: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onchangePhone}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Description: </b>
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onchangeDescription}
                    />
                  </div>

                  {/* <div className="form-group">
                    <label>
                      <b>Date: </b>
                    </label>
                    <div></div>
                    <DatePicker
                      className="form-control"
                      selected={this.state.date}
                      className="form-control is-invalid"
                      onChange={this.onchangeDate}
                    />
                  </div> */}

                  <div className="form-group">
                    <label>
                      <b>Officer Incharge:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.officer_incharge}
                      onChange={this.onchangeOfficerIncharge}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <b>Grama Niladhari Division:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.grama_niladhari}
                      onChange={this.onchangeGramaNiladhari}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      onSubmit={this.onsubmit}
                      value="Submit"
                      className="btn btn-outline-danger btn btn-dark"
                    />
                  </div>
             
                </form> 

              </div>
            </div>
          </div>

        </div>

    );
  }
}
