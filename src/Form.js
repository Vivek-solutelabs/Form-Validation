import React, { useState, useEffect } from "react";
import "./Form.css";
//import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
//import * as yup from "yup";

function Form(props) {
  // destructure from props
  const { userdetails, setUserdetails, id, edit, setEdit, setId } = props;

  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = (data) => console.log(data);
  // local state
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [birthDate, setBirthdate] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pob, setPob] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [validate, setValidate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorfield, seterrorfield] = useState([false]);

  // useEffect will run when edit || id || userdetails will change
  useEffect(() => {
    // if edit mode then display value in form fields
    if (edit === true) {
      // find row clicked
      let updatedEdit = [];
      updatedEdit = userdetails.filter((useritem) => {
        if (useritem.id === id) {
          return useritem;
        }
      });

      // set form fields data
      setFirstname(updatedEdit[0].firstName);
      setLastname(updatedEdit[0].lastName);
      setAddress1(updatedEdit[0].address1);
      setAddress2(updatedEdit[0].address2);
      setPob(updatedEdit[0].pob);
      setPhoneno(updatedEdit[0].phoneno);
    }
  }, [edit, id, userdetails]);

  //main function
  const handleClick = (event) => {
    event.preventDefault();
    setErrorMessage("");
    setValidate(false);

    //Validating First Name

    if (firstName === "") {
      console.log("in");
      setErrorMessage("First name is required");
      setValidate(true);
      errorfield[0] = true;
      console.log(errorfield);

      return false;
    } else {
      if (typeof firstName != "string") {
        setErrorMessage("First name Must be String");
        setValidate(true);
        errorfield[0] = true;

        return false;
      } else {
        if (firstName.length < 2) {
          setErrorMessage("First name Must be Greater than 2");
          setValidate(true);
          errorfield[0] = true;

          return false;
        } else {
          errorfield[0] = false;
          setErrorMessage("");
        }
      }
    }
    console.log(errorfield);
    /// Validating Lastname
    if (lastName === "") {
      setErrorMessage("");
      setErrorMessage("Last name is required");
      setValidate(true);
      errorfield[1] = true;

      return false;
    } else {
      if (typeof lastName != "string") {
        setErrorMessage("Last name Must be String");
        setValidate(true);
        errorfield[1] = true;

        return false;
      } else {
        if (lastName.length < 2) {
          setErrorMessage("Last name Must be Greater than 2");
          setValidate(true);
          errorfield[1] = true;

          return false;
        } else {
          errorfield[1] = false;
          setErrorMessage("");
        }
      }
    }

    //Validating Birth Date
    if (birthDate === "") {
      setErrorMessage("");
      setErrorMessage("Birthdate is Required");
      setValidate(true);
      errorfield[2] = true;

      return false;
    } else {
      var res = parseInt(birthDate.substring(0, 4));

      var d = new Date();
      var year = d.getFullYear();
      if (year - res > 18) {
        errorfield[2] = false;
        setErrorMessage("");
      } else {
        setErrorMessage("Must be 18 years Old");
        setValidate(true);
        errorfield[2] = true;

        return false;
      }
    }

    //Validating Address 1
    if (address1 === "") {
      setErrorMessage("");
      setErrorMessage("Address 1 is required");
      setValidate(true);
      errorfield[3] = true;

      return false;
    } else {
      if (address1.length < 5) {
        setErrorMessage("Address 1 Must be Greater than 5");
        setValidate(true);
        errorfield[3] = true;

        return false;
      } else {
        errorfield[3] = false;
        setErrorMessage("");
      }
    }

    //Validating Address 2
    if (address2 === "") {
      setErrorMessage("");
      setErrorMessage("Address 2 is required");
      setValidate(true);
      errorfield[4] = true;

      return false;
    } else {
      if (address2.length < 5) {
        setErrorMessage("Address 2 Must be Greater than 5");
        setValidate(true);
        errorfield[4] = true;

        return false;
      } else {
        errorfield[4] = false;
        setErrorMessage("");
      }
    }

    //Validating pob
    if (pob === "") {
      setErrorMessage("");
      setErrorMessage("Place of Birth is required");
      setValidate(true);
      errorfield[5] = true;

      return false;
    } else {
      if (pob.length < 2) {
        setErrorMessage("Place of Birth Must be Greater than 2");
        setValidate(true);
        errorfield[5] = true;

        return false;
      } else {
        errorfield[5] = false;
        setErrorMessage("");
      }
    }

    //Validating Phone No
    if (phoneno === "") {
      setErrorMessage("");
      setErrorMessage("Phone No is required");
      setValidate(true);
      errorfield[6] = true;

      return false;
    } else {
      var num = parseInt(phoneno);

      if (typeof num != "number") {
        setErrorMessage("Phone No Must be Number");
        setValidate(true);
        errorfield[5] = true;

        return false;
      } else {
        if (num.toString().length !== 10) {
          setErrorMessage("Invalid Phone No");
          setValidate(true);
          errorfield[5] = true;

          return false;
        } else {
          errorfield[6] = false;
          setErrorMessage("");
        }
      }

      //Editing and setting Value

      if (validate !== true) {
        if (edit !== true) {
          // ====below code will run when not in edit mode====
          console.log("inmmm");
          // append new object to array at end
          setUserdetails([
            ...userdetails,
            {
              firstName: firstName,
              id: Math.random() * 1000,
              lastName: lastName,
              birthDate: birthDate,
              address1: address1,
              address2: address2,
              pob: pob,
              phoneno: phoneno,
            },
          ]);
        } else {
          // ====below code will run when in edit mode====

          // run loop and find row with id
          //     then update that row with current state values
          //          to update Object.assign is used, you can also use spread operator as mentioned below
          // {...formRow,
          //       id,
          //       firstName,
          //       lastName,
          //       birthDate,
          //       address1,
          //       address2,
          //       pob,
          //       phoneno
          // }
          console.log("in");
          setUserdetails((prevState) =>
            prevState.map((formRow) =>
              formRow.id === id
                ? Object.assign({}, formRow, {
                    id,
                    firstName,
                    lastName,
                    birthDate,
                    address1,
                    address2,
                    pob,
                    phoneno,
                  })
                : formRow
            )
          );

          // set Edit mode to false
          setEdit(false);
          // set active id ""
          setId("");
        }

        //clear form fields
        setFirstname("");
        setLastname("");
        setBirthdate("");
        setAddress1("");
        setAddress2("");
        setPob("");
        setPhoneno("");
      }
    }
    //Validation of form
  };
  return (
    <div>
      <div class="form">
        <h1 align="center">Register</h1>
        <form>
          <div>
            First Name
            <input
              placeholder="Enter a First Name"
              value={firstName}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
            {validate && errorfield[0] ? <p>{errorMessage}</p> : null}
          </div>
          <div>
            Last Name
            <input
              placeholder="Enter a Last Name"
              value={lastName}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
            {validate && errorfield[1] ? <p>{errorMessage}</p> : null}
          </div>
          <div>
            Birth birthDate
            <input
              type="date"
              value={birthDate}
              onChange={(event) => setBirthdate(event.target.value)}
            />
            {validate && errorfield[2] ? <p>{errorMessage}</p> : null}
          </div>

          <div>
            Address 1
            <input
              placeholder="Enter The Address"
              value={address1}
              onChange={(event) => setAddress1(event.target.value)}
            />
            {validate && errorfield[3] ? <p>{errorMessage}</p> : null}
          </div>

          <div>
            Address 2
            <input
              placeholder="Enter The Address 2"
              value={address2}
              onChange={(event) => setAddress2(event.target.value)}
            />
            {validate && errorfield[4] ? <p>{errorMessage}</p> : null}
          </div>

          <div>
            Place Of Birth
            <input
              placeholder="Enter Birth Place"
              value={pob}
              onChange={(event) => setPob(event.target.value)}
            />
            {validate && errorfield[5] ? <p>{errorMessage}</p> : null}
          </div>

          <div>
            Phone No
            <input
              type="tel"
              placeholder="Enter Phone Number "
              value={phoneno}
              onChange={(event) => setPhoneno(event.target.value)}
            />
            {validate && errorfield[6] ? <p>{errorMessage}</p> : null}
          </div>

          <button type="submit" onClick={handleClick}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
