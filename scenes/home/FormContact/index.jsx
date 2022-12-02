import { Box, Grid, Grid2 } from '@mui/material'
import React, { useState, useEffect, useCallback } from 'react'
import InputText from '../../../components/InputText'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import styles from './style.module.css'
import { useDebounce } from "../../../hooks/helper";
import { regexName, regexEmail, regexPhone, regexAddress } from "../../../utils/regex";
import colors from '../../../theme/color'

const FormContact = () => {

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  const [errorMessage, setErrorMessage] = useState({});
  const debouncedName = useDebounce(inputName, 400);
  const debouncedPhone = useDebounce(inputPhone, 400);
  const debouncedEmail = useDebounce(inputEmail, 400);
  const debouncedAddress = useDebounce(inputAddress, 400);

  //Validate InputNameChange
  useEffect(() => {
    const patternName = regexName;
    validateChange(patternName, "name", debouncedName, "Họ tên");
  }, [debouncedName]);
  //Validate InputPhoneChange
  useEffect(() => {
    const patternPhone = regexPhone;
    validateChange(patternPhone, "phone", debouncedPhone, "Số điện thoại");
  }, [debouncedPhone]);
  //Validate InputEmailChange
  useEffect(() => {
    const patternEmail = regexEmail;
    validateChange(patternEmail, "email", debouncedEmail, "Email");
  }, [debouncedEmail]);
  //Validate Address
  useEffect(() => {
    const patternAddress = regexAddress;
    validateChange(patternAddress, "address", debouncedAddress, "Address");
  }, [debouncedAddress]);



  //Begin Validate action OnChane Input Field
  const validateChange = useCallback(
    (pattern, key, inputName, label) => {
      let newErrorMessage = { ...errorMessage };
      if (!inputName) {
        newErrorMessage = { ...newErrorMessage, [key]: `` };
      } else if (pattern.test(inputName) === false) {
        newErrorMessage = {
          ...newErrorMessage,
          [key]: `${label} không hợp lệ`,
        };
      } else if (newErrorMessage.hasOwnProperty(key)) {
        delete newErrorMessage[key];
      }
      setErrorMessage(newErrorMessage);
    },
    [errorMessage]
  );

  const handleOnChangeName = useCallback((e) => {
    setInputName(e.target.value);
  }, []);
  const handleOnChangePhone = useCallback((e) => {
    setInputPhone(e.target.value);
  }, []);
  const handleOnChangeEmail = useCallback((e) => {
    setInputEmail(e.target.value);
  }, []);
  const handleOnChangeAddress = useCallback((e) => {
    setInputAddress(e.target.value);
  }, []);
  const handleOnChangeDetail = useCallback((e) => {
    setInputDetail(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e) => {
      console.log("háhdashdsahdsa")
      let newErrorMessage = { ...errorMessage };
      //Validate inputName
      const patternName = regexName;
      if (!inputName) {
        newErrorMessage = {
          ...newErrorMessage,
          name: "Họ tên không được bỏ trống",
        };
      } else if (!patternName.test(inputName)) {
        newErrorMessage = {
          ...newErrorMessage,
          name: "Họ tên phải bắt đầu bằng chữ cái",
        };
      }

      //Validate inputPhoneNumber
      const patternPhone = regexPhone;
      if (!inputPhone) {
        newErrorMessage = {
          ...newErrorMessage,
          phone: "Số điện thoại không được bỏ trống",
        };
      } else if (!patternPhone.test(inputPhone)) {
        newErrorMessage = {
          ...newErrorMessage,
          phone: "Số điện thoại không hợp lệ",
        };
      }

      //Validate inputEmail
      const patternEmail = regexEmail;
      if (!inputEmail) {
        newErrorMessage = {
          ...newErrorMessage,
          email: "Email không được bỏ trống",
        };
      } else if (patternEmail.test(inputEmail)) {
        newErrorMessage = {
          ...newErrorMessage,
          email: "Email này không hợp lệ",
        };
      }

      //validate address
      const patternAddress = regexAddress;
      if (!inputAddress) {
        newErrorMessage = {
          ...newErrorMessage,
          address: "Address không được bỏ trống",
        };
      } else if (patternAddress.test(inputAddress)) {
        newErrorMessage = {
          ...newErrorMessage,
          address: "Address này không hợp lệ",
        };
      }

      //Set message ERROR
      setErrorMessage(newErrorMessage);

      //Error
      if (!Object.keys(newErrorMessage).length > 0) {
        const formData = {
          name: inputName,
          phone: inputPhone,
          email: inputEmail,
          address: inputAddress,
          detail: inputDetail
        };

        //Call API order Products
        fetch("https://dax.vn/api/order", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.status < 400) {
              handleShowOrderStatus(true);
            } else {
              handleShowOrderStatus(false);
            }
          })
          .catch((error) => {
            handleShowOrderStatus(false);
          });
        closeDiaLog();
      }
      e.preventDefault();
    },
    [inputName, inputPhone, inputEmail, errorMessage, inputAddress, inputDetail]
  );


  return (
    <div className={styles.FormContact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Text
            content={'Contact'}
            fontSize={'40px'}
          />
        </div >
        <form className={styles.form} onSubmit={handleOnSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} >
              <InputText
                id='name'
                lableName={'Họ tên'}
                labelFor={'name'}
                placeHolder={'Nhập họ và tên'}
                value={inputName}
                onInputChange={handleOnChangeName}
                errorMessage={errorMessage}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <InputText
                id='email'
                lableName={'Email'}
                labelFor={'email'}
                placeHolder={'Nhập email'}
                value={inputEmail}
                onInputChange={handleOnChangeEmail}
                errorMessage={errorMessage}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <InputText
                id='phone'
                lableName={'Số điện thoại'}
                labelFor={'phone'}
                placeHolder={'Nhập số điện thoại'}
                value={inputPhone}
                onInputChange={handleOnChangePhone}
                errorMessage={errorMessage}
              />
            </Grid>
            <Grid item xs={12} md={6} >
              <InputText
                id='address'
                lableName={'Địa chỉ'}
                labelFor={'address'}
                placeHolder={'Nhập địa chỉ'}
                value={inputAddress}
                onInputChange={handleOnChangeAddress}
                errorMessage={errorMessage}
              />
            </Grid>
            <Grid item xs={12} >
              <InputText
                id='detail'
                lableName={'Thêm thông tin'}
                labelFor={'detail'}
                placeHolder={'Mô tả thêm thông tin'}
                height='100px'
                smallHeight='50px'
                value={inputDetail}
                onInputChange={handleOnChangeDetail}
                errorMessage={errorMessage}
              />
            </Grid>
          </Grid>
          <div className={styles.button}>
            <Button
              type="submit"
              fontSize={'20px'}
              bold
              title="Xác nhận"
              borderRadius="20px"
              border={`1px solid ${colors.borderButton}`}
              hoverBackground={colors.secondaryBackground}
              hover
              hoverTextColor={colors.secondaryText}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormContact