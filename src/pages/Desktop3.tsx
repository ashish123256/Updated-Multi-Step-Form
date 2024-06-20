
import { Link } from "react-router-dom"
import React, { memo, useState } from "react";
import Scs from "../components/Scs"
import "./desktop3.css"
import { setSelectAnythingD3 ,setSelectOptionAnythingD3,setSelectAnythingD31,setShowRadioInputsDiv, resetForm} from "../Redux/formSlice/formSlice";
import { RootState ,AppDispatch} from "../Redux/store";
import {useDispatch, useSelector} from "react-redux"


 
 const Desktop3=memo(()=> {

  const formState = useSelector((state:RootState)=>state.form)
  const dispatch = useDispatch<AppDispatch>();

  const [errorOccurred] = useState(false);


  const handleSelectOptionAnything = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const setSelectAny = e.target.value;
    dispatch(setSelectOptionAnythingD3(setSelectAny));
    if(setSelectAny === 'Code everything'){
      dispatch(setSelectAnythingD3('Code everything'))
    }else if(setSelectAny === 'step 3'){
      dispatch(setSelectAnythingD3('step 3'))
    }else if(setSelectAny === 'Lorem 45'){
      dispatch(setSelectAnythingD3('Lorem 45'))
    }
    else{
      dispatch(setSelectAnythingD3('Add option'))
    }
  };


  const handleSelectAnything = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectAnythingD3(e.target.value));
  };

  const handleSelectAnythingD1=(e:React.ChangeEvent<HTMLInputElement>) =>{
    dispatch(setSelectAnythingD31(e.target.value));         
  }

  const handleSelectOptionAnythingToogle = (newValue :string) =>{
    dispatch(setSelectOptionAnythingD3(newValue));
  }





  const handleWholediv =() =>{
      dispatch(setShowRadioInputsDiv(!formState.showRadioInputsDiv))
  }

  const handleCancel = () => {
    dispatch(resetForm());
  };
  const handleSubmit=() =>{
    console.log(formState)
  }
  
  return (
    <div className="bg-[#F2F0FF] flex p-4 sm:p-[52px_0.9px_52.7px_0] w-full box-sizing-border justify-center items-center">
      <div className="bg-[#FFFFFF] flex flex-col p-4 sm:p-[20.6px_30.9px_41.2px_30.9px] box-sizing-border w-full max-w-[760px]">
       <Scs/>
       {errorOccurred && (
        <div className="rounded-[2.3px] border-[0.6px_solid_#CDD2D7] bg-[#FFFFFF] m-[0_0_22.7px_0] flex flex-row p-[10.8px_0_10.8px_9.6px] w-[fit-content] box-sizing-border">
          <div className="m-[1.3px_3.4px_1.3px_0] flex w-[10.9px] h-[11.3px] box-sizing-border">
            <input className="w-[10.9px] h-[11.3px]" />
          </div>
          <span className="break-words font-['Poppins'] font-normal text-[9.1px] text-[#FF2F2F]">
            There was a problem with your submission. Please review the fields below.
          </span>
        </div>
      )}
        <div className="shadow-[0px_2.5px_2.5px_0.6px_#F0F2F1] rounded-[12.7px] bg-[#FFFFFF] flex flex-col sm:p-[25.5px_12.7px_25.5px_12.7px] w-full box-sizing-border">
          <div className="m-[0_2.9px_25.5px_0] flex w-full box-sizing-border">
            <div className="border-b-[0.6px_solid_#E4E4E4] bg-[#FFFFFF] relative flex sm:p-[0_33.4px_0_0] w-full max-w-[670px] box-sizing-border">
              <div className="relative w-full max-w-[629.9px] h-[fit-content] box-sizing-border">
                <div className="bg-[#3CC055] absolute left-[25.4px] bottom-[7.2px] w-[401.7px] h-[1.9px]"></div>
                <div className="relative flex flex-col w-[200.2px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_7.6px_0] flex flex-row justify-between self-start w-[280.7px] box-sizing-border">
                    <span className="m-[0_9px_0_0] w-[207.4px] break-words font-['Poppins'] font-medium text-[11.5px] leading-[1.6] text-[#3CC055]">
                      Step 1 Name
                    </span>
                    <div className="flex box-sizing-border">
                      <span className="break-words  font-['Poppins'] font-medium text-[11.5px] leading-[1.6] text-[#3CC055]">
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
              <span className="absolute top-[0px] left-[395px] break-words font-['Poppins'] font-medium text-[11.3px] leading-[1.6] text-[#55bb43]">
                Step 3 Finish
              </span>
              <input
                type="checkbox"
                checked
                className="rounded-[7.5px] bg-[#707070] absolute left-[412.4px] bottom-[0.5px] flex p-[3.1px_3.1px_3.1px_3.1px] w-[14.9px] h-[14.9px] box-sizing-border"
              />
              <div className="rounded-[4.4px] bg-[#FFFFFF] w-[8.7px] h-[8.7px]">
              </div>
            </div>
          </div>
          <div className="m-[0_0_22.7px_0] flex flex-row justify-between self-start w-[271.6px] box-sizing-border">
            <div className="m-[0px_0_0_0] flex flex-row justify-between w-[108.6px] box-sizing-border">
              <span className="m-[0_7px_0_0] w-[109.2px] break-words font-['Poppins'] font-semibold text-[9.1px] text-[#424242]">
              Toggle the option
              </span>
              <label className="switch relative inline-block w-[125px] h-[29px]"> {''}
                <input type="checkbox"
                 checked={formState.selectOptionAnythingD3 === "Code everything"}
                 onChange={() =>
                 handleSelectOptionAnythingToogle(
                   formState.selectOptionAnythingD3 === "Code everything" ? "": "Code everything"
                 )
               }
               className="opacity-0 w-0 h-0"/>
             <span className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all duration-200 ease-in-out rounded-full"></span>
            </label>

            </div>
            <div className="m-[0_0_0px_0] flex flex-row justify-between w-[100px] box-sizing-border">
              <p className="m-[0px_7px_0_0] w-[156.4px]  break-words font-['Poppins'] font-semibold text-[9.1px] text-[#424242]">
              <span className="copy-this-link-222242-jdjsdj-4-sub-0 "></span><span>Copy this Link  <span className="text-[#9be94d]">#222242jdjsdj4</span> </span>
              </p>
            </div>
          </div>
          <div className="m-[0_0_22.7px_0] flex flex-col w-[fit-content] box-sizing-border">
            <div className="m-[0_51.1px_11.3px_0] flex flex-col w-[fit-content] box-sizing-border">
              <div className="m-[0_0_9.1px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                <div className="m-[0_0_2.3px_0] inline-block break-words font-['Poppins'] font-semibold text-[9.1px] text-[#424242]">
                This is div - Select Radio btn and add the radio btn 
                </div>
                <span className="self-start break-words font-['Poppins'] font-normal text-[7.9px] text-[#424242]">
                lorem loe lorem lorem lorem
                </span>
              </div>
              <div className="m-[0_0_9.1px_0] flex flex-row gap-[0_9.1px] w-[675.2px] box-sizing-border">
                <div className="rounded-[2.3px] border-[0.6px_solid_#22A785] bg-[#ECFFFA] flex flex-row justify-between p-[7px_9.6px_7px_8.5px] w-[219px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    Select anything
                    </span>
                  </div>
              <div className="m-[0.4px_0_0.4px_0] flex w-[10.3px] h-[10.3px] box-sizing-border">
                <select value={formState.selectOptionAnythingD3} onChange={handleSelectOptionAnything}  className="w-[9.3px] h-[9.3px]" >
                <option value="Code everything" className="text-[8.2px]"> Code everything</option>
                 <option value="step 3" className="text-[8.2px]">step 3</option>
                 <option value="Lorem 45" className="text-[8.2px]">  Lorem 45</option>
                 <option value="Add option" className="text-[8.2px]"> Add option</option>
                  </select>
                </div>
                </div>
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[119px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    Code everything
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input type="radio"
                  name = "selectAnythingD3"
                  value="Code everything"
                  checked = {formState.selectAnythingD3 === "Code everything"}
                  onChange ={handleSelectAnything}
                  className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[80px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    step 3
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input
                  type="radio"
                  name = "selectAnythingD3"
                  value="step 3"
                  checked = {formState.selectAnythingD3 === "step 3"}
                  onChange ={handleSelectAnything}
                 className=" w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row self-start w-[444.8px] box-sizing-border">
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] m-[0_9.1px_0_0] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[219px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    Lorem 45
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input 
                 type="radio"
                 name = "selectAnythingD3"
                 value="Lorem 45"
                 checked = {formState.selectAnythingD3 === "Lorem 45"}
                 onChange ={handleSelectAnything}
                className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
                <div className="rounded-[2.3px] bg-[#FFFFFF] m-[0_0_1.6px_0] flex flex-row justify-between p-[6.8px_9.1px_6.8px_9.1px] w-[96.7px] h-[fit-content] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#999999]">
                    Add option
                    </span>
                  </div>
                  <input
                 type="radio"
                 name = "selectAnythingD3"
                 value="Add option"
                 checked = {formState.selectAnythingD3 === "Add option"}
                 onChange ={handleSelectAnything}
                 className="w-[9.3px] h-[9.3px]" />
                </div>
              </div>
            </div>
            {formState.showRadioInputsDiv && (
            <div className="opacity-60 m-[0_0_11.3px_0] flex flex-col p-[0_51.1px_0_0] w-[fit-content] box-sizing-border">
              <div className="m-[0_0_9.1px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                <div className="m-[0_0_2.3px_0] inline-block break-words font-['Poppins'] font-semibold text-[9.1px] text-[#424242]">
                ADDED This is container - Select Radio btn and add the radio btn 
                </div>
                <span className="self-start break-words font-['Poppins'] font-normal text-[7.9px] text-[#424242]">
                lorem loe lorem lorem lorem
                </span>
              </div>
             
              <div className="m-[0_0_9.1px_0] flex flex-row gap-[0_9.1px] w-[675.2px] box-sizing-border">
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] m-[0px_0_0_0] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[119px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    Code everything
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                   <input type="radio"
                  name = "selectAnythingD31"
                  value="Code everything"
                  checked = {formState.selectAnythingD31 === "Code everything"}
                  onChange ={handleSelectAnythingD1}
                  className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] m-[0_0_0px_0] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[119px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    step 3
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input type="radio"
                  name = "selectAnythingD31"
                  value="step 3"
                  checked = {formState.selectAnythingD31 === "step 3"}
                  onChange ={handleSelectAnythingD1}
                  className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row self-start w-[447.1px] box-sizing-border">
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] m-[0_9.1px_0px_0] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[119px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    Lorem 45
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input type="radio"
                  name = "selectAnythingD31"
                  value="Lorem 45"
                  checked = {formState.selectAnythingD31 === "Lorem 45"}
                  onChange ={handleSelectAnythingD1}
                  className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
                <div className="rounded-[2.3px] border-[0.6px_solid_#9E9E9E] bg-[#FFFFFF] m-[0px_0_0_0] flex flex-row justify-between p-[7px_10.2px_7px_8.5px] w-[119px] box-sizing-border">
                  <div className="flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[7.9px] text-[#232323]">
                    None
                    </span>
                  </div>
                  <div className="m-[0.9px_0_0.9px_0] flex w-[10.2px] h-[10.2px] box-sizing-border">
                  <input type="radio"
                  name = "selectAnythingD31"
                  value="None"
                  checked = {formState.selectAnythingD31 === "None"}
                  onChange ={handleSelectAnythingD1}
                  className="w-[9.3px] h-[9.3px]" />
                  </div>
                </div>
              </div>
            </div>
              )}
            <div className="rounded-[4.5px] bg-[#656565] flex self-start p-[4.5px_13.4px_4.5px_11.3px] box-sizing-border">
              <button onClick={handleWholediv} className="break-words font-['Poppins'] font-medium text-[6.8px] text-[#FFFFFF] cursor-pointer">
              Add whole div
              </button>
            </div>
          </div>
          <div className="flex flex-row self-end gap-[0_22.7px] w-[fit-content] box-sizing-border">
            <div className="rounded-[4.5px] bg-[#FFFFFF] flex p-[6.8px_13.8px_6.8px_13.6px] box-sizing-border">
              <button onClick={handleCancel} className="break-words font-['Poppins'] font-medium text-[9.1px] text-[#22A785] cursor-pointer">
              Cancel
              </button>
            </div>
            <div className="flex box-sizing-border">
              <Link to={"/desktop2"}>
              <div className="rounded-[4.5px] border-[0.6px_solid_#22A785] flex p-[6.2px_12.9px_6.2px_13px] box-sizing-border">
                <span className="break-words font-['Poppins'] font-medium text-[9.1px] text-[#22A785] cursor-pointer">
                Previous Step
                </span>
              </div>
              </Link>
            </div>
            <div className="flex box-sizing-border">
              <div className="rounded-[4.5px] bg-[#22A785] flex p-[6.8px_14.1px_6.8px_13.6px] box-sizing-border">
                <button onClick={handleSubmit} className="break-words font-['Poppins'] font-medium text-[9.1px] text-[#FFFFFF]">
                Finish Step 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})


export default Desktop3;