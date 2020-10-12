import React from 'react'
import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8000/api/v1/patient";
const PATIENT_CONF_API_BASE_URL = "http://localhost:8000/api/v1/patientOtp";
class PatientService extends React.Component{

 getPatients(){
        return axios.get(PATIENT_API_BASE_URL);
    }

    createPatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }

       validatePatient(patientOtp){
        return axios.post(PATIENT_CONF_API_BASE_URL, +'/TokenValidation' ,patientOtp);
    }

    getPatientById(patientId){
        return axios.get(PATIENT_API_BASE_URL + '/' + patientId);
    }

    updatePatient(patient, patientId){
        return axios.put(PATIENT_API_BASE_URL + '/' + patientId, patient);
    }

 mft
 
}

export default new PatientService();