/* eslint-disable react-refresh/only-export-components */
import Scs from "../components/Scs";
import React, { memo } from "react";
import {useDispatch, useSelector} from "react-redux"
import { setGender,setFullName,setPhoneNumber,setConsent,setBusinessActivity,setSelectOptionGender, setSelectOptionAnything, setSelectAnything, resetForm } from "../Redux/formSlice/formSlice";
import { RootState ,AppDispatch} from "../Redux/store";
import { useNavigate } from "react-router-dom";
import indiaFlag from "../assets/india.webp";



const Desktop1= memo(() => {

  const formState = useSelector((state:RootState)=>state.form)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleFullnameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      dispatch(setFullName(e.target.value))
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

  value = value.trim();
  if (value.length > 10) {
    value = value.slice(0, 10);
  }
  dispatch(setPhoneNumber(value));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setGender(e.target.value));
  };

  const handleSelectOptionGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = e.target.value;
    dispatch(setSelectOptionGender(selectOption));

    if(selectOption === 'Male'){
      dispatch(setGender('Male'));
    }else if (selectOption === 'Female') {
      dispatch(setGender('Female'));
    } else {
      dispatch(setGender('Prefer not to say'));
    }
  };
  const handleSelectOptionAnything = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const setSelectAny = e.target.value;
    dispatch(setSelectOptionAnything(setSelectAny));
    if(setSelectAny === 'Code everything'){
      dispatch(setSelectAnything('Code everything'))
    }else if(setSelectAny === 'step 3'){
      dispatch(setSelectAnything('step 3'))
    }else if(setSelectAny === 'Lorem 45'){
      dispatch(setSelectAnything('Lorem 45'))
    }
    else{
      dispatch(setSelectAnything('None'))
    }
  };
  const handleSelectAnything = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectAnything(e.target.value));
  };


  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setConsent(e.target.checked));
  };

  const handleBusinessActivityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBusinessActivity(e.target.value));
  };

  const handleSubmit = () => {
    console.log(formState)
    navigate('/desktop2')
  
  }

  

  const handleCancel = () => {
    dispatch(resetForm());
  };

  
  return (
    <div className="bg-[#F2F0FF] flex p-4 sm:p-[52px_0.9px_52.7px_0] w-full box-sizing-border justify-center items-center">
      <div className="bg-[#FFFFFF] flex flex-col p-4 sm:p-[20.6px_30.9px_41.2px_30.9px] box-sizing-border w-full max-w-[760px]">
        <Scs />
        <div className="shadow-[0px_2.1px_2.1px_0.5px_#F0F2F1] rounded-[10.3px] bg-[#FFFFFF] m-[0_0_0_0px] flex flex-col sm:p-[20.6px_10.3px_20.6px_10.3px] box-sizing-border w-full">
        <div className="m-[0_2.9px_25.5px_0] flex w-full box-sizing-border">
            <div className="border-b-[0.6px_solid_#E4E4E4] bg-[#FFFFFF] relative flex sm:p-[0_33.4px_0_0] w-full max-w-[670px] box-sizing-border">
              <div className="relative w-full max-w-[629.9px] h-[fit-content] box-sizing-border">
                <div className="bg-[#3CC055] absolute left-[25.4px] bottom-[7.2px] w-[401.7px] h-[1.9px]"></div>
                <div className="relative flex flex-col w-[200.2px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_7.6px_0] flex flex-row justify-between self-start w-[240.7px] box-sizing-border">
                    <span className="m-[0_9px_0_0] w-[307.4px] break-words font-['Poppins'] font-medium text-[11.5px] leading-[1.6] text-[#3CC055]">
                      Step 1 Name
                    </span>
                    <div className="flex box-sizing-border">
                      <span className="break-words font-['Poppins'] font-medium text-[11.5px] leading-[1.6] text-[#3CC055]">
                        Step 2 Details
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_24.9px_0_22.1px] flex flex-row justify-between w-full max-w-[314.3px] box-sizing-border">
                    <div className="flex w-[14.9px] h-[15.4px] box-sizing-border">
                      <input
                        type="checkbox"
                        checked
                        className="w-[14.9px] h-[15.4px] "
                      />
                    </div>
                    <div className="flex w-[14.9px] h-[15.4px] box-sizing-border">
                      <input
                        type="checkbox"
                        className="w-[14.9px] h-[15.4px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <span className="absolute top-[0px] left-[395.8px] break-words font-['Poppins'] font-medium text-[11.3px] leading-[1.6] text-[#55bb43]">
                Step 3 Finish
              </span>
              <input
                type="checkbox"
                className="rounded-[7.5px] bg-[#707070] absolute left-[420.4px] bottom-[0.5px] flex p-[3.1px_3.1px_3.1px_3.1px] w-[14.9px] h-[14.9px] box-sizing-border"
              />
              <div className="rounded-[4.4px] bg-[#FFFFFF] w-[8.7px] h-[8.7px]">
              </div>
            </div>
          </div>
          <div className="m-[0_0_19.6px_0] flex flex-row self-start w-full max-w-[670px] box-sizing-border">
            <div className="m-[0_30.9px_0_0] flex flex-col w-[232.6px] box-sizing-border">
              <div className="m-[0_0_5.2px_0] flex self-start box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                  Enter your Full name
                </span>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_6.2px_0] p-[5.7px_7.7px_5.7px_7.7px] w-[fit-content] box-sizing-border">
                <input
                  type="text"
                  placeholder="Enter here"
                  value={formState.fullName}
                  onChange={handleFullnameChange}
                  className="w-full font-['Poppins'] font-normal text-[7.2px] text-[#424242]"
                />
              </div>
              <div className="m-[0_0.7px_0_0.7px] flex flex-row self-start w-[fit-content] box-sizing-border">
                <div className="m-[0.7px_2.7px_2.5px_0] flex w-[6.9px] h-[6.9px] box-sizing-border">
                 
                </div>
                <span className="break-words font-['Poppins'] font-normal text-[6.2px] text-[#7D7D7D]">
                  Enter the First Name and Last name
                </span>
              </div>
            </div>
            <div className="m-[0_0_16.2px_0] flex flex-col w-[232.6px] box-sizing-border">
              <div className="m-[0_0_5.2px_0] flex self-start box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                  Enter Phone number
                </span>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#CDD2D7] bg-[#FFFFFF] flex items-center p-[5.7px_7.7px_5.7px_7.7px] w-[fit-content] box-sizing-border">
                <div className="border-r-[0.5px_solid_#CDD2D7] flex items-center pr-[1.4px]">
                  
                  <span className="font-['Poppins'] font-normal text-[7.2px] text-[#424242] flex">
                    <img className="w-[10px] " src={indiaFlag} alt="indiaFlag" />  
                    <span className="w-[18px]">+91</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Enter number"
                  value={formState.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="pl-[2.1px] w-full font-['Poppins'] font-normal text-[7.2px] text-[#424242]"
                />
              </div>
            </div>
          </div>
          <div className="m-[0_0_27.4px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_28.6px_0_0] flex flex-col box-sizing-border">
              <div className="m-[0_0_13px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                <div className="m-[0_0_3.1px_0] inline-block self-start break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                  Gender
                </div>
                <span className="break-words font-['Poppins'] font-normal text-[7.2px] text-[#424242]">
                  Select one of them
                </span>
              </div>
              <div className="m-[0_0_0_1.5px] flex flex-row justify-between w-[233.4px] box-sizing-border">
                <div className="m-[0px_0_0_0] flex flex-row box-sizing-border">
                  <div className="m-[0.9px_5.7px_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                    <input type="radio" 
                    name="gender"
                    value="Male"
                    checked = {formState.gender === 'Male'}
                    onChange={handleGenderChange}
                    className="w-[9.3px] h-[9.3px]" />
                  </div>
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Male
                  </span>
                </div>
                <div className="m-[0px_0_0_0] flex flex-row box-sizing-border">
                  <div className="m-[0.9px_5.7px_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                  <input type="radio"
                     name="gender"
                     value="Female"
                     checked={formState.gender === 'Female'}
                     onChange={handleGenderChange}
                   className="w-[9.3px] h-[9.3px]" />
                  </div>
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Female
                  </span>
                </div>
                <div className="m-[0_0_0px_0] flex flex-row box-sizing-border">
                  <div className="m-[0.9px_5.7px_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                  <input type="radio"
                  name="gender"
                   value="Prefer not to say"
                   checked = {formState.gender === "Prefer not to say"}
                   onChange={handleGenderChange}
                   className="w-[9.3px] h-[9.3px]" />
                  </div>
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Prefer not to say
                  </span>
                </div>
              </div>
            </div>
            <div className="m-[0_0_9.6px_0] flex flex-col box-sizing-border">
              <div className="m-[0_0_5.2px_0] flex self-start box-sizing-border">
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#CDD2D7] bg-[#FFFFFF] flex flex-row  p-[5.7px_7.7px_5.7px_7.7px] w-[232.6px]  box-sizing-border">
                <span className="m-[0_5.5px_0_0] w-[100.8px] break-words font-['Poppins'] font-normal text-[7.2px] text-[#424242]">
                  Select from the here
                </span>
                <select 
                value={formState.selectOptionGender}
                onChange={handleSelectOptionGender}
                className="rounded-[2.7px] bg-[#D8D8D8] m-[0.1px_0_0.1px_0] flex sm:p-[4.1px_3.2px_3.7px_2.6px] w-[10.8px] h-[10.8px] box-sizing-border   ">
                 <option value="Male" className="text-[8.2px]">Male</option>
                 <option value="Female" className="text-[8.2px]">Female</option>
                 <option value="Prefer not to say" className="text-[8.2px]"> Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
          <div className="m-[0_46.3px_20.6px_0] flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_0_8.2px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
              <div className="m-[0_0_1.1px_0] inline-block self-start break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                Select anything
              </div>
              <span className="break-words font-['Poppins'] font-normal text-[7.2px] text-[#424242]">
                lorem loe lorem lorem lorem
              </span>
            </div>
            <div className="m-[0_0_8.2px_0] flex flex-row gap-[0_8.2px] w-[612.4px] box-sizing-border">
              <div className="rounded-[2.1px] border-[0.5px_solid_#22A785] bg-[#ECFFFA] flex flex-row justify-between p-[6.3px_8.7px_6.3px_7.7px] w-[198.7px] box-sizing-border">
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Select anything
                  </span>
                </div>
                <div className="m-[0.4px_0_0.4px_0] flex w-[10.3px] h-[10.3px] box-sizing-border">
                <select value={formState.selectOptionAnything} onChange={handleSelectOptionAnything} className="w-[9.3px] h-[9.3px]" >
                <option value="Code everything" className="text-[8.2px]"> Code everything</option>
                 <option value="step 3" className="text-[8.2px]">step 3</option>
                 <option value="Lorem 45" className="text-[8.2px]">  Lorem 45</option>
                 <option value="None" className="text-[8.2px]"> None</option>
                  </select>
                </div>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#9E9E9E] bg-[#FFFFFF] flex flex-row justify-between p-[6.3px_9.3px_6.3px_7.7px] w-[100.7px] box-sizing-border">
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Code everything
                  </span>
                </div>
                <div className="m-[0.9px_0_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                <input type="radio"
                  name = "selectAnything"
                  value="Code everything"
                  checked = {formState.selectAnything === "Code everything"}
                  onChange ={handleSelectAnything}
                  className="w-[9.3px] h-[9.3px]" />
                </div>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#9E9E9E] bg-[#FFFFFF] flex flex-row justify-between sm:p-[6.3px_9.3px_6.3px_7.7px] w-[100.7px] box-sizing-border">
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323] ">
                    step 3
                  </span>
                </div>
                <div className="m-[0.9px_0_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                <input
                  type="radio"
                  name = "selectAnything"
                  value="step 3"
                  checked = {formState.selectAnything === "step 3"}
                  onChange ={handleSelectAnything}
                 className=" w-[9.3px] h-[9.3px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-row self-start w-[405.5px] box-sizing-border">
              <div className="rounded-[2.1px] border-[0.5px_solid_#9E9E9E] bg-[#FFFFFF] m-[0_8.2px_0_0] flex flex-row justify-between p-[6.3px_9.3px_6.3px_7.7px] w-[198.7px] box-sizing-border">
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    Lorem 45
                  </span>
                </div>
                <div className="m-[0.9px_0_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                <input 
                 type="radio"
                 name = "selectAnything"
                 value="Lorem 45"
                 checked = {formState.selectAnything === "Lorem 45"}
                 onChange ={handleSelectAnything}
                className="w-[9.3px] h-[9.3px]" />
                </div>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#9E9E9E] bg-[#FFFFFF] flex flex-row justify-between p-[6.3px_9.3px_6.3px_7.7px] w-[198.7px] box-sizing-border">
                <div className="flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#232323]">
                    None
                  </span>
                </div>
                <div className="m-[0.9px_0_0.9px_0] flex w-[9.3px] h-[9.3px] box-sizing-border">
                <input
                 type="radio"
                 name = "selectAnything"
                 value="None"
                 checked = {formState.selectAnything === "None"}
                 onChange ={handleSelectAnything}
                 className="w-[9.3px] h-[9.3px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="m-[0_0_27.4px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_12px_0] flex self-start box-sizing-border">
              <span className="break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                Consent
              </span>
            </div>
            <div className="m-[0_0_0_0.8px] flex flex-row w-[fit-content] box-sizing-border">
              <div className="m-[0.6px_4.9px_0.6px_0] flex w-[9.8px] h-[9.8px] box-sizing-border">
              <input type="checkbox" 
               checked={formState.consent}
               onChange={handleConsentChange}
              className="w-[9.3px] h-[9.3px]" />
              </div>
              <span className="break-words font-['Poppins'] font-medium text-[7.2px] text-[#757575]">
                The Information provided above is correct &amp; would like to
                get call from a sales advisor.
              </span>
            </div>
          </div>
          <div className="m-[0_0_19.6px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_19.6px_0_0] flex flex-col w-[375.7px] box-sizing-border">
              <div className="m-[0_0_5.2px_0] flex self-start box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[8.2px] text-[#424242]">
                  Please select your business activity group
                </span>
              </div>
              <div className="rounded-[2.1px] border-[0.5px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_6.2px_0] p-[5.7px_7.7px_5.7px_7.7px] w-[fit-content] box-sizing-border">
                <span className="break-words font-['Poppins'] font-normal text-[7.2px] text-[#424242]">
                  Enter here
                </span>
                <select
                 value={formState.businessActivity}
                 onChange={handleBusinessActivityChange} 
                 className="w-4">
                <option value="Code everything" className="text-[8.2px]"> Code everything</option>
                 <option value="React" className="text-[8.2px]">React</option>
                 <option value="Redux" className="text-[8.2px]">Redux </option>
                 <option value="TypeScript" className="text-[8.2px]">TypeScript</option>
                </select>
              </div>
              <div className="m-[0_0.7px_0_0.7px] flex flex-row self-start w-[fit-content] box-sizing-border">
                
                <span className="break-words font-['Poppins'] font-normal text-[6.2px] text-[#7D7D7D]">
                  Array of text
                </span>
              </div>
            </div>
        
          </div>
          <div className="flex flex-row self-end w-[fit-content] box-sizing-border">
            <div className="rounded-[4.1px] border-[0.5px_solid_#22A785] bg-[#FFFFFF] m-[0_20.6px_0_0] flex p-[5.7px_11.5px_4.7px_11.8px] box-sizing-border">
              <button onClick={handleCancel} className="break-words font-['Poppins'] font-medium text-[8.2px] text-[#22A785] cursor-pointer">
                Cancel
              </button>
            </div>
            <div className="flex box-sizing-border">
              <div className="rounded-[4.1px] bg-[#22A785] flex p-[6.2px_12.2px_5.2px_12.4px] box-sizing-border">
                <button onClick={handleSubmit} className="break-words font-['Poppins'] font-medium text-[8.2px] text-[#FFFFFF]">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});




export default Desktop1;
