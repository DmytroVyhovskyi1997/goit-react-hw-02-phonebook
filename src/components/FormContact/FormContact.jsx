import propTypes from "prop-types";
import React, { Component } from "react";
import css from "./ContactForm.module.css";

export class FormContact extends Component {
  state = {
    name: "",
    number: "",
  };

  render() {
    return (
      <form>
        <input
        className={css}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    );
  }
}
