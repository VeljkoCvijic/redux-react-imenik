import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();
   const contacts = useSelector((state) => {
     return state.contacts;
   });

  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Telefon</th>
            <th>Izmene</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;