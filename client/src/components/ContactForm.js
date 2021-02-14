import React, { Component } from "react";

export default class contactForm extends Component {
  state = {
    fullName: "",
    email: "",
    comment: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      fullName: "",
      email: "",
      comment: ""
    });
  };

  render() {
    return (
      <>
        <section className="contact-section">
          <h4 className="contact-header">HIT US UP!</h4>
          <p className="contact-text">
            E-mail us with any questions / inquiries or call 604. 936.2080. We'd
            be happy to answer your questions.
          </p>
        </section>

        <div className="form__container">
          <h5 ref={ref => (this.form = ref)} />

          <div className="form__wrapper">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    class="validate"
                    value={this.state.fullName}
                    onChange={e => this.setState({ fullName: e.target.value })}
                  />
                  <label for="icon_prefix">Full Name *</label>
                </div>
              </div>
            </form>

            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i className="material-icons prefix">drafts</i>

                  <input
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    class="validate"
                  />
                  <label for="email">Email *</label>
                  <span
                    className="form__required"
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Please fill in required fields *
                  </span>
                </div>
              </div>
            </form>

            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="icon_prefix2"
                    class="materialize-textarea"
                    value={this.state.comment}
                    onChange={e => this.setState({ comment: e.target.value })}
                  ></textarea>
                  <label for="icon_prefix2">Message *</label>
                </div>
              </div>
            </form>

            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => this.onSubmit(e)}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </>
    );
  }
}
