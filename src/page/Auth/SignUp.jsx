import { useState } from "react";
import { Card, CardBody, Select, ThemeButton } from "../../components/common";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { resetUserData } from "../../reducer/auth/redux";
import RegisterInfo from "./RegisterInfo";
import { fetchSignUp } from "../../reducer/auth/thunk";
import Cookies from "js-cookie";

const ValidationSchema = () =>
  Yup.object().shape({
    person_name: Yup.string().required("Full Name is required"),
    Property_belongsto: Yup.string().required("Please select one option"),
    city: Yup.string().required("Please select a city"),
    email: Yup.string().email("Invalid email").required("email is required"),
    user_name: Yup.string()
      .matches(/^[a-zA-Z0-9@_-]+$/, "Only letters, numbers, @, _ and - are allowed. No spaces or special characters.")
      .required("User Name is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .matches(/^(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter and one number")
      .required("Password is required"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .test(
        "valid-phone",
        "Enter a valid Indian phone number (starts with 6/7/8/9)",
        (value) => {
          let digits = value?.replace(/\D/g, "");
          if (digits.startsWith("91")) {
            digits = digits.slice(2);
          }
          return /^[6-9]\d{9}$/.test(digits);
        }
      ),
  });

  const options = [
  { id: "MUMBAI", value: "MUMBAI" },
  { id: "PUNE", value: "PUNE" },
  { id: "THANE", value: "THANE" },
  { id: "NAGPUR", value: "NAGPUR" },
];

const SignUp = () => {
  const dispatch = useDispatch();
  const propertyType = useSelector((state) => state.propertyType.type);
  const navigate = useNavigate();
  const [select, setSelected] = useState(null);

  const formik = useFormik({
    initialValues: {
      person_name: "",
      user_name: "",
      email:"",
      phone_number: "",
      password : "",
      Property_belongsto: "",
      city: "",
      user_type : propertyType ,
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      try {
        dispatch(fetchSignUp(values)).then(async (res) => {
          if (res.payload.data?.status === 200) {
            try {
              localStorage.setItem("username", res.payload.data?.data?.user_name || "");
              toast.success(res.payload.data?.message);
              dispatch(resetUserData({}));
              navigate("/property-list");
              const expires = new Date();
              expires.setTime(expires.getTime() + 7 * 60 * 60 * 1000);
              Cookies.set("accessToken", res.payload.data?.token, { expires });
            } catch (error) {
              toast.error(error.message || "Created User Failed");
            }
          } else {
            toast.error(res.payload.data?.message);
          }
        });
      } catch (error) {
        console.error("Created User Failed", error);
        toast.error("Created User Failed");
      }
    },
  });

  return (
    <div className="w-full h-screen p-4 lg:pl-[40px] lg:pr-[72px] bg-[url(/home_bg.png)] bg-center bg-cover flex justify-center items-center">
      <div className="flex lg:gap-20 gap-4 justify-center w-full">
        <RegisterInfo />
          <Card cardClassName="shadow-[0px_4px_4px_0px_#0F142266] bg-white/80 rounded-xl p-8 sm:p-14 max-w-2xl w-full h-[calc(100vh - 200px)]">
            <CardBody bodyClassName="flex flex-col justify-between gap-y-8 xsm:gap-y-13 h-[calc(100vh-310px)] overflow-auto">
              <div className="flex flex-col gap-y-4 xsm:gap-y-9">
                <p className="font-normal lg:text-xl text-md capitalize text-center">
                  New to 
                  <span className="text-orange font-semibold ml-2">
                    Housing
                  </span>
                  ? Let’s get you started
                </p>
                <div className="flex flex-col gap-y-3">
                  <p className="font-normal lg:text-xl text-md capitalize">
                    Looking to
                  </p>

                  <div>
                    <button className="lg:py-4 py-3 lg:px-9 px-6 font-medium text-base rounded-md bg-[#E56C0633] text-orange border border-transparent">
                      {propertyType === "sell" ? "Sell" : "Rent"}
                    </button>
                  </div>

                  <form className="grid grid-cols-2 gap-3 mt-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                      <label htmlFor="fullName" className="font-medium text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="person_name"
                        name="person_name"
                        placeholder="Enter Your full Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.person_name}
                        className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.person_name && formik.errors.person_name
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="font-medium">
                        Email Id
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.email}
                        className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                      <label htmlFor="user_name" className="font-medium text-base">
                        User Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        placeholder="Enter Your user name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.user_name}
                        className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.user_name && formik.errors.user_name
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      />

                         {formik.touched.user_name && formik.errors.user_name && (
                        <p className="text-red-500 text-xs xsm:text-sm">
                          {formik.errors.user_name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                      <label className="font-medium">Select City</label>
                      <Select
                        onChange={(val) => {
                          setSelected(val);
                          formik.setFieldValue("city", val?.value || "");
                        }}
                        value={select}
                        defaultText="Select City"
                        options={options}
                        listBoxClass="w-full"
                        listButtonClass="md:!text-xl text-sm"
                        className={`border rounded-lg p-[2px] ${formik.touched.city && formik.errors.city
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                        textClass="text-[14px]"
                        onBlur={() => formik.setFieldTouched("city", true)}
                      />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                      <label htmlFor="password" className="font-medium">
                        Password
                      </label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values?.password}
                        className={`w-full px-3 py-[9.5px] border text-sm rounded-md ${formik.touched.password && formik.errors.password
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                      />

                         {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-xs xsm:text-sm">
                          {formik.errors.password}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                        <label htmlFor="phone_number" className="font-medium text-base">
                        Phone No.
                      </label>
                      <PhoneInput
                        defaultCountry="in"
                        value={formik.values.phone_number}
                        onChange={(phone) => {
                          formik.setFieldValue("phone_number", phone);
                        }}
                        onBlur={() => formik.setFieldTouched("phone_number", true)}
                        className="w-full border border-gray-300 text-sm rounded-md"
                        inputClassName="!border-b-0"
                      />
                      {formik.touched.phone_number && formik.errors.phone_number && (
                        <p className="text-red-500 text-xs xsm:text-sm">
                          {formik.errors.phone_number}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-y-2 col-span-2">
                      <label className="font-medium">Property Belongs To</label>
                      <div className="flex flex-wrap items-center gap-4">
                        {["My Self", "I Am Agent", "Family", "Friends"].map(
                          (label) => (
                            <label
                              key={label}
                              className="inline-flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="Property_belongsto"
                                value={label}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.Property_belongsto === label}
                                className="w-5 h-5 hue-rotate-[163deg]"
                              />
                              <span className="text-sm">{label}</span>
                            </label>
                          )
                        )}
                      </div>
                      {formik.touched.Property_belongsto &&
                        formik.errors.Property_belongsto && (
                          <p className="text-sm text-red-500">
                            {formik.errors.Property_belongsto}
                          </p>
                        )}
                    </div>

                    <ThemeButton
                      type="submit"
                      title={"Generate Code"}
                      className="!justify-center !max-w-full col-span-2"
                    />
                  </form>
                </div>
              </div>
              <p className="text-[14px] xsm:text-base font-semibold uppercase text-center">
                Existing User? 
                <span
                  className="text-orange ml-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login Here
                </span>
              </p>
            </CardBody>
          </Card>      
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignUp;
