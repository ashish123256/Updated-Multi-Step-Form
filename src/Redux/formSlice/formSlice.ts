import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  fullName: string;
  phoneNumber:  string;
  gender: string;
  selectAnything:string;
  selectAnythingD3:string;
  selectAnythingD31:string;
  selectOptionGender: string;
  selectOptionAnything: string;
  selectOptionAnythingD3: string;
  consent: boolean;
  businessActivity: string;
  birthDate:string;
  language:string;
  newEmail:string;
  emails:string[];
  newFile: FileList | null;
  files:File[];
  showRadioInputsDiv:boolean;
}

const initialState: FormState = {
  fullName: "",
  phoneNumber: "",
  gender: "",
  selectAnything:"",
  selectAnythingD3:"",
  selectAnythingD31:"",
  selectOptionGender: "",
  selectOptionAnything:"",
  selectOptionAnythingD3:"",
  consent: false,
  businessActivity: "",
  birthDate:'',
  language:'',
  newEmail:"",
  emails:[],
  newFile:null,
  files:[],
  showRadioInputsDiv:false,
};


const formSlice = createSlice ({
    name:"form",
    initialState,
    reducers:{
        setFullName:(state,action:PayloadAction<string>)=>{
            state.fullName = action.payload;
        },
        setPhoneNumber: (state,action:PayloadAction<string>)=>{
           state.phoneNumber = action.payload;
        },
        setGender:(state, action:PayloadAction<string>)=>{
            state.gender = action.payload;
        },
        setSelectAnything:(state, action:PayloadAction<string>)=>{
            state.selectAnything = action.payload;
        },
        setSelectAnythingD3:(state,action:PayloadAction<string>)=>{
          state.selectAnythingD3 = action.payload;
        },
        setSelectAnythingD31:(state,action:PayloadAction<string>)=>{
          state.selectAnythingD31 = action.payload;
        },
        setSelectOptionGender: (state, action: PayloadAction<string>) => {
            state.selectOptionGender = action.payload;
          },
        setSelectOptionAnything: (state, action: PayloadAction<string>) => {
            state.selectOptionAnything = action.payload;
          },
        setSelectOptionAnythingD3:(state, action:PayloadAction<string>)=>{
          state.selectOptionAnythingD3 = action.payload;
        },
        setConsent: (state, action: PayloadAction<boolean>) => {
            state.consent = action.payload;
          },
        setBusinessActivity: (state, action: PayloadAction<string>) => {
            state.businessActivity = action.payload;
          },
          setBirthDate: (state, action: PayloadAction<string>) => {
            state.birthDate = action.payload;
          },
          setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
          },
          setNewEmail:(state, action:PayloadAction<string>) =>{
            state.newEmail = action.payload;  
          },
          addEmail: (state) => {
            state.emails.push(state.newEmail);
            state.newEmail="";
          },
          setNewFile: (state, action: PayloadAction<FileList>) => {
            state.newFile = action.payload;
          },
      
          addFile: (state) => {
            if (state.newFile) {
              const filesArray = Array.from(state.newFile) as File[];
              state.files.push(...filesArray);
              state.newFile = null;
            }
          },
          setShowRadioInputsDiv: (state, action: PayloadAction<boolean>) => {
            state.showRadioInputsDiv = action.payload;
          },
          resetForm:(state) =>{
            return initialState
          },
          
    }
})

export const {setFullName,setPhoneNumber,setGender,setSelectOptionGender,setSelectOptionAnything,setConsent,setBusinessActivity, setSelectAnything,resetForm,setBirthDate,setLanguage,addEmail,addFile,setNewEmail, setNewFile,setSelectAnythingD3,setSelectOptionAnythingD3, setShowRadioInputsDiv,setSelectAnythingD31} = formSlice.actions;

export default formSlice.reducer;
