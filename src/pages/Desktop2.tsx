
import { Link, useNavigate } from "react-router-dom";
import Scs from "../components/Scs";
import {setBirthDate,setLanguage,addEmail,addFile, resetForm,setNewEmail, setNewFile } from "../Redux/formSlice/formSlice"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import React, { memo } from "react";


const Desktop2 = memo(() => {
  const formState = useSelector((state:RootState)=>state.form)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
 
  

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
       dispatch(setBirthDate(e.target.value))
  }
  const handleLanguageChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    dispatch(setLanguage(e.target.value))
  }

  const handleAddEmail = (e:React.ChangeEvent<HTMLInputElement>) =>{
     dispatch(setNewEmail(e.target.value));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    console.log("Selected files:", files);
    if (files) {
      dispatch(setNewFile(files));
    }
  };

  const handleFileUpload = () => {
    console.log("Adding files...");
    console.log("New file:", formState.newFile);
    dispatch(addFile());
  };

  const handleSubmit = () => {
    console.log(formState)
    navigate('/desktop3')
  
  }

  const handleCancel = () => {
    dispatch(resetForm());
  };

  const handleAddEmailButtonClick = () => {
    if (formState.newEmail.trim() !== "") {
      dispatch(addEmail()); 
    }
  };
  
  return (
    <div className="bg-[#F2F0FF] flex p-4 sm:p-[52px_0.9px_52.7px_0] w-full box-sizing-border justify-center items-center">
      <div className="bg-[#FFFFFF] flex flex-col p-4 sm:p-[20.6px_30.9px_41.2px_30.9px] box-sizing-border w-full max-w-[760px]">
        <Scs />
        <div className="shadow-[0px_2.5px_2.5px_0.6px_#F0F2F1] rounded-[12.7px] bg-[#FFFFFF] flex flex-col sm:p-[25.5px_12.7px_25.5px_12.7px] w-full box-sizing-border">
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
                        checked
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
          <div className="m-[0_0_25.5px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_50.9px_0px_0] flex flex-col box-sizing-border">
              <div className="m-[0_0_6.6px_0] flex self-start box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[10.2px] text-[#424242]">
                Enter the birth date*
                </span>
              </div>
              <div className="rounded-[2.5px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_7.6px_0] flex flex-row justify-between p-[7.6px_10.8px_7.6px_9.6px] w-[287.8px] box-sizing-border">
                {formState.birthDate && (
                <div className="m-[0.5px_6.5px_0.5px_0] inline-block w-[246.9px] break-words font-['Poppins'] font-normal text-[8.9px] text-[#424242]">
                  Selected Date of Birth: {formState.birthDate}
                </div>
                )}
                <div className="flex w-[12.7px] h-[14px] box-sizing-border">
                  <input type="date" 
                  value={formState.birthDate}
                  onChange={handleBirthDateChange}
                  className="w-[12.7px] h-[14px]" />
                </div>
              </div>
              <div className="m-[0_0.9px_0_0.9px] flex flex-row self-start w-[fit-content] box-sizing-border">
                <div className="m-[0.8px_3.4px_1.7px_0] flex w-[8.5px] h-[8.5px] box-sizing-border">
                </div>
                <span className="break-words font-['Poppins'] font-normal text-[7.6px] text-[#7D7D7D]">
                Enter the Date of Birth
                </span>
              </div>
            </div>
            <div className="m-[0px_0_0_0] flex flex-col box-sizing-border">
              <div className="m-[0_0_6.6px_0] flex self-start box-sizing-border">
                <span className="break-words font-['Poppins'] font-semibold text-[10.2px] text-[#424242]">
                Language*
                </span>
              </div>
              <div className="m-[0_0_7.6px_0] flex w-[287.8px] box-sizing-border">
                <div className="rounded-[2.5px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] flex flex-row justify-between p-[8.1px_13.8px_8.1px_9.6px] w-[287.8px] h-[fit-content] box-sizing-border">
                  <span className="m-[0_6.5px_0_0] w-[249.5px] break-words font-['Poppins'] font-normal text-[8.9px] text-[#424242]">
                  <select 
                    value={formState.language}
                    onChange={handleLanguageChange}
                    >

                   <option>Select Language</option>
                    <option>English</option> 
                    <option>Hindi</option> 
                   </select>
                  </span>
                  <div className="m-[1.4px_0_1.3px_0] flex w-[7.2px] h-[10.3px] box-sizing-border">
                  
                  </div>
                </div>
              </div>
              <div className="m-[0_0.9px_0_0.9px] flex flex-row self-start w-[fit-content] box-sizing-border">
                <div className="m-[0.8px_3.4px_1.7px_0] flex w-[8.5px] h-[8.5px] box-sizing-border">
                </div>
                <span className="break-words font-['Poppins'] font-normal text-[7.6px] text-[#7D7D7D]">
                Select the language 
                </span>
              </div>
            </div>
          </div>
          <div className="m-[0_0_25.5px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_6.6px_0] flex self-start box-sizing-border">
              <span className="break-words font-['Poppins'] font-semibold text-[10.2px] text-[#424242]">
              Enter the multiple mail*
              </span>
            </div>
            <div className="rounded-[2.5px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_7.6px_0] p-[7px_9.6px_7px_9.6px] w-[fit-content] box-sizing-border">
           
              <input
               value={formState.newEmail}
               onChange={handleAddEmail}
               type="email" placeholder="enter the email" className="break-words font-['Poppins'] font-normal text-[8.9px] text-[#424242]"/>
            
            </div>
            <div className="rounded-[2.5px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_7.6px_0] p-[7px_9.6px_7px_9.6px] w-[fit-content] box-sizing-border">
              <span className="break-words font-['Poppins'] font-normal text-[8.9px] text-[#424242]">
              Enter and add gmail
              </span>
            </div>
            <div className="m-[0_0_7.6px_0] flex self-start box-sizing-border">
              <div className="rounded-[5.1px] bg-[#656565] flex p-[5.1px_13.8px_5.1px_12.7px] box-sizing-border">
                <button onClick={handleAddEmailButtonClick} className="break-words font-['Poppins'] font-medium text-[7.6px] text-[#FFFFFF] cursor-pointer">
                Add
                </button>
              </div>
            </div>
            <div className="m-[0_0.9px_7.6px_0.9px] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="m-[0.8px_3.4px_1.7px_0] flex w-[8.5px] h-[8.5px] box-sizing-border">
              </div>
              <span className="break-words font-['Poppins'] font-normal text-[7.6px] text-[#7D7D7D]">
              Array of fields
              </span>
            </div>
            <div className="m-[0_0_6.6px_0] flex self-start box-sizing-border">
              <button onClick={handleFileUpload} className="break-words font-['Poppins'] font-semibold text-[10.2px] text-[#424242] cursor-pointer">
              Upload Files
              {' '}
              <input type='file' onChange={handleFileChange}
               multiple
               className="break-words font-['Poppins'] font-semibold text-[10.2px] text-[#424242] cursor-pointer" />
              </button>
            </div>
            <div className="rounded-[2.5px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] p-[7px_9.6px_7px_9.6px] w-[fit-content] box-sizing-border">
              <span  className="break-words font-['Poppins'] font-normal text-[8.9px] text-[#424242]">
              Multi File Upload
              </span>
            </div>
          </div>
          <div className="flex flex-row self-end gap-[0_25.5px] w-[fit-content] box-sizing-border">
            <div className="rounded-[5.1px] bg-[#FFFFFF] flex p-[7.6px_15.1px_6.6px_15.3px] box-sizing-border">
              <button onClick={handleCancel} className="break-words font-['Poppins'] font-medium text-[10.2px] text-[#22A785] cursor-pointer">
              Cancel
              </button>
            </div>
            <div className="flex box-sizing-border">
                <Link to={"/"}>
              <div className="rounded-[5.1px] border-[0.6px_solid_#22A785] flex p-[7px_14.2px_6px_14.6px] box-sizing-border">
                
                <span className="break-words font-['Poppins'] font-medium text-[10.2px] text-[#22A785] cursor-pointer">
                Previous Step
                </span>
              </div>
                </Link>
            </div>
            <div className="flex box-sizing-border">
              <div className="rounded-[5.1px] bg-[#22A785] flex p-[7.6px_15.1px_6.6px_15.3px] box-sizing-border">
                <button onClick={handleSubmit} className="break-words font-['Poppins'] font-medium text-[10.2px] text-[#FFFFFF]">
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

export default Desktop2;
