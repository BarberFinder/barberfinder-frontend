import React, { Component } from "react";
import { Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import { TimeInput } from "semantic-ui-calendar-react";
import { createBarber, editBarber } from "../../actions/barberActions";
import { connect } from "react-redux";
import BarberService from "./BarberService";
import axios from "axios";
import days from "../../helper/days";
import Loading from "../Common/Loading";
import { Redirect } from "react-router-dom";

class BarberShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: this.props.services,
      name: this.props.name,
      city: this.props.city,
      tagline: this.props.tagline,
      phone: this.props.phone,
      address: this.props.address,
      operation_hours: this.props.operation_hours,
      image: this.props.image,
      profile_image: null,
      id: this.props.id,
      isLoading: this.props.isLoading,
      isBarberLoaded: this.props.isBarberLoaded,
      redirect: false
    };
  }

  componentDidMount = async () => {
    const path = this.props.path;
    if (path === "/barber/edit") {
      let token = "";
      if (localStorage.token) {
        token = localStorage.token;
      }
      await axios
        .get(`${process.env.REACT_APP_API_URL}/barber`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.data.data !== null) {
            let barbershop = res.data.data;
            let operation_hours = barbershop.operation_hours;
            operation_hours.map((operation_hour, index) => {
              let day = days.find(
                day => day.number.toString() === operation_hour.day.toString()
              );
              operation_hour.name = day.name;
              (operation_hour.open_hour = operation_hour.open_hour.substring(
                0,
                5
              )),
                (operation_hour.close_hour = operation_hour.close_hour.substring(
                  0,
                  5
                ));
            });
            this.setState({
              name: barbershop.name,
              address:
                barbershop.address === null
                  ? this.props.address
                  : barbershop.address,
              tagline: barbershop.tagline,
              phone: barbershop.phone === null ? "" : barbershop.phone,
              city: barbershop.city,
              services: barbershop.services,
              operation_hours: operation_hours,
              id: barbershop.id,
              image:
                barbershop.image !== null || barbershop.image
                  ? `${process.env.REACT_APP_API_URL}/${barbershop.image}`
                  : this.props.image
            });
          }
        })
        .catch(err => {});
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleServicerNameChange = index => e => {
    const newServices = this.state.services.map((service, sindex) => {
      if (index !== sindex) return service;
      return { ...service, service_name: e.target.value };
    });

    this.setState({ services: newServices });
  };

  handleServicePriceChange = index => e => {
    const newServices = this.state.services.map((service, sindex) => {
      if (index !== sindex) return service;
      return { ...service, price: e.target.value };
    });

    this.setState({ services: newServices });
  };

  handleTimeInput = (e, { name, value }) => {
    let newOperationHours = [];
    const day = name.substring(0, 1);
    const time = name.substring(2);
    this.state.operation_hours.map(operation_hour => {
      if (operation_hour["day"].toString() === day) {
        operation_hour[time] = value;
      }
      return (newOperationHours = [...newOperationHours, operation_hour]);
    });
    this.setState({
      operation_hours: newOperationHours
    });
  };

  handleAddService = e => {
    e.preventDefault();
    this.setState({
      services: this.state.services.concat([{ service_name: "", price: "" }])
    });
  };

  handleRemoveService = idx => () => {
    this.setState({
      services: this.state.services.filter((s, sidx) => idx !== sidx)
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSelectedImage = e => {
    if (this.props.path === "/barber/edit") {
      this.setState({ image: e.target.files[0] }, () => {
        const fd = new FormData();
        fd.append("profile_image", this.state.image);
        let token = "";
        if (localStorage.token) {
          token = localStorage.token;
        }
        axios
          .put(`${process.env.REACT_APP_API_URL}/barber/changeImage`, fd, {
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "multipart/form-data"
            }
          })
          .then(res => {
            this.setState({
              image: `${process.env.REACT_APP_API_URL}/${res.data.barber.image}`
            });
          })
          .catch(err => {});
      });
    } else {
      this.setState({
        image: URL.createObjectURL(e.target.files[0]),
        profile_image: e.target.files[0]
      });
    }
  };

  initializeFormData = () => {
    const formData = new FormData();
    formData.append("profile_image", this.state.profile_image);
    formData.append(
      "data",
      JSON.stringify({
        name: this.state.name,
        tagline: this.state.tagline,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        services: this.state.services,
        operation_hours: this.state.operation_hours
      })
    );
    return formData;
  };

  // componentWillReceiveProps(nextProps) {
  // 	if (!nextProps.isLoading) {
  // 		this.setState({
  // 			isLoading: nextProps.isLoading
  // 		});
  // 	}
  // }

  handleSubmit = e => {
    e.preventDefault();
    let formData = "";

    if (this.props.path === "/barber/edit") {
      formData = this.initializeFormData();
      this.props.editBarber(formData, this.state.id);
    } else {
      if (this.state.image !== null) {
        this.setState({
          image: this.state.profile_image
        });
      }
      this.setState({
        isLoading: true
      });
      formData = this.initializeFormData();
      this.props.createBarber(formData);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.form_status === "done") {
      return { redirect: true }; // <- this is setState equivalent
    }
  }

  renderRedirect = () => {
    if (this.state.isLoading === false) {
      return <Redirect to="/barber" />;
    }
  };

  render() {
    if (this.props.form_status === "done") {
      return <Redirect to="/barber" />;
    }
    return (
      <React.Fragment>
        <form
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
          className="form-horizontal">
          <div className="col-sm-4">
            <div className="barbershop_profile_image">
              <img src={this.state.image} className="img-responsive" />
            </div>

            <input
              onChange={this.handleSelectedImage}
              type="file"
              name="profile_image"
              id="file"
              className="inputfile"
            />
            <label htmlFor="file">Choose a file</label>
          </div>

          <div className="col-sm-8">
            <h2>Profile</h2>
            <div className="form-group row">
              <div className="col-xs-12">
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
                <input
                  onChange={this.handleInput}
                  type="text"
                  value={this.state.tagline}
                  name="tagline"
                  className="form-control"
                  placeholder="Tagline"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
                <textarea
                  onChange={this.handleInput}
                  rows="3"
                  value={this.state.address}
                  name="address"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-xs-12">
                <input
                  onChange={this.handleInput}
                  type="text"
                  name="city"
                  value={this.state.city}
                  className="form-control"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <h2>Services</h2>
            {this.state.services.map((service, index) => (
              <BarberService
                onServicePriceChangeHandler={this.handleServicePriceChange}
                onServiceNameChangeHandler={this.handleServicerNameChange}
                onRemoveServiceHandler={this.handleRemoveService}
                index={index}
                service={service}
                key={index}
                {...this.props}
              />
            ))}
            <Button
              color="black"
              onClick={this.handleAddService}
              content="Add Service"
              icon="plus circle"
              labelPosition="left"
            />
            <h2>Operation Hours</h2>
            {this.state.operation_hours.map((operation_hour, index) => (
              <div key={index} className="form-group">
                <div className="col-sm-2">
                  <label>{operation_hour.name}</label>
                </div>
                <div className="col-sm-4">
                  <TimeInput
                    name={`${operation_hour.day}_open_hour`}
                    placeholder="Open"
                    value={operation_hour.open_hour}
                    iconPosition="left"
                    onChange={this.handleTimeInput}
                  />
                </div>
                <div className="col-sm-4">
                  <TimeInput
                    name={`${operation_hour.day}_close_hour`}
                    placeholder="Close"
                    value={operation_hour.close_hour}
                    iconPosition="left"
                    onChange={this.handleTimeInput}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={this.handleSubmit}
              className="default_btn col-xs-4">
              {this.props.path === "/barber/edit" ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    services: state.barber.services,
    name: state.barber.name,
    tagline: state.barber.tagline,
    phone: state.barber.phone,
    address: state.barber.address,
    city: state.barber.city,
    operation_hours: state.barber.operation_hours,
    barbershop: state.barber.barbershop,
    file: state.barber.file,
    image: state.barber.image,
    id: state.barber.id,
    isLoading: state.barber.isLoading,
    isBarberLoaded: state.barber.isBarberLoaded,
    form_status: state.barber.form_status
  };
};

export default connect(
  mapStateToProps,
  { createBarber, editBarber }
)(BarberShopForm);
