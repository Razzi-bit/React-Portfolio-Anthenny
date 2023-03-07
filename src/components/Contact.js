import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useForm from "../utils/useForm";
import validation from "../utils/validation";

import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [values, handelChange, handelSubmit, errors, clearError] = useForm(validation, form);

  return (
    <section id="contact" className="bg-main h-full py-[100px]">
      <div className="flex flex-col justify-center items-center LayoutContainer">
        <div className="text-center py-12">
          <h1 className="text-3xl font-Poppins">
            <span className="font-Mono text-detailsColor">04. </span>Contact
          </h1>
        </div>
        <div className="flex flex-col tablet:flex-row w-full justify-center gap-8">
          <div className="flex flex-col h-auto shadow-xl shadow-gray-300 rounded-xl gap-2 p-6 mx-auto tablet:mx-0 max-w-[700px] tablet:max-w-[400px] w-full">
            <div className="mx-auto my-0 hidden tablet:flex">
              <img src="contact.jpg" alt="foto van een laptop" className="rounded-xl" />
            </div>
            <h1 className="text-2xl pt-3">Anthenny de Hoon</h1>
            <p className="text-xl pb-3">Full Stack Developer</p>
            <p className="text-base">Je kan mijn ook berichten op mijn soical media</p>
            <ul className="flex justify-between mx-auto w-full max-w-[200px] my-4">
              <Link to="/">
                <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                  <FaLinkedinIn
                    size={20}
                    className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                  />
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                  <FiGithub
                    size={20}
                    className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                  />
                </li>
              </Link>
              <Link to="/">
                <li className="flex items-center gap-4 bg-detailsColor2 hover:bg-mainText rounded-full p-3 ease-in duration-300 hover:scale-105 group/item1">
                  <FiInstagram
                    size={20}
                    className="group-hover/item1:text-detailsColor2 ease-in duration-300"
                  />
                </li>
              </Link>
            </ul>
          </div>
          <form
            ref={form}
            onSubmit={handelSubmit}
            className="flex flex-col h-auto shadow-xl shadow-gray-300 rounded-xl gap-2 p-4 mx-auto tablet:mx-0 max-w-[700px] w-full text-base"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col p-2 flex-1">
                <label htmlFor="name" className="p-1 text-[#fff]">
                  Naam
                </label>

                <input
                  type="text"
                  placeholder="Naam"
                  name="name"
                  id="name"
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-detailsColor2"
                  value={values.name}
                  onChange={handelChange}
                  onFocus={clearError}
                />
                {errors.name && (
                  <span className="text-base p-1 text-[#dc2626] font-light">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col p-2 flex-1">
                <label htmlFor="phoneNumber" className="p-1 text-[#fff]">
                  Telefoon Nummer
                </label>
                <input
                  type="text"
                  placeholder="Telefoon"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-detailsColor2"
                  value={values.phoneNumber}
                  onChange={handelChange}
                  onFocus={clearError}
                />
                {errors.phoneNumber && (
                  <span className="text-base p-1 text-[#dc2626] font-light">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col p-2 flex-1">
              <label htmlFor="email" className="p-1 text-[#fff]">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-detailsColor2"
                value={values.email}
                onChange={handelChange}
                onFocus={clearError}
              />
              {errors.email && (
                <span className="text-base p-1 text-[#dc2626] font-light">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col p-2 flex-1">
              <label htmlFor="subject" className="p-1 text-[#fff]">
                Onderwerp
              </label>
              <input
                type="text"
                placeholder="Onderwerp"
                name="subject"
                id="subject"
                className="p-2 rounded-xl w-full focus:outline-none focus:ring focus:ring-detailsColor2"
                value={values.subject}
                onChange={handelChange}
                onFocus={clearError}
              />
              {errors.subject && (
                <span className="text-base p-1 text-[#dc2626] font-light">{errors.subject}</span>
              )}
            </div>

            <div className="flex flex-col p-2 flex-1">
              <label htmlFor="message" className="p-1 text-[#fff]">
                Bericht
              </label>
              <textarea
                rows={4}
                placeholder="Bericht ..."
                name="message"
                id="message"
                className="p-2 rounded-xl focus:outline-none focus:ring focus:ring-detailsColor2 min-h-[40px]"
                value={values.message}
                onChange={handelChange}
                onFocus={clearError}
              ></textarea>
              {errors.message && (
                <span className="text-base p-1 text-[#dc2626] font-light">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="text-base p-2 text-mainText mt-4 mx-2 rounded-xl text-center border border-detailsColor2 bg-detailsColor2 cursor-pointer hover:bg-mainText hover:text-detailsColor2 duration-500 "
            >
              Stuur bericht
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
