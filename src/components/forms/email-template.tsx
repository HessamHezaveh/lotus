import * as React from 'react';
import { FormType } from './MultiStepForm';


interface EmailTemplateProps {
  data: FormType 
}

// defaultValues
// name
// phone
// email
// message
// residenceName
// numberOfBuilding
// numberOfApartments
// pool
// landscapeMaintenance
// personnel
// address

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
 data,
}) => (
  <div>
    <h2>from: {data.name}!</h2>
    <span>Email: {data.email}</span>
    <h3>Phone Number: {data.phone}</h3> 

    <p className='font-bold'>building info</p>

    <p>Residence Name: {data.residenceName}</p>
    <p>Number Of Building: {data.numberOfBuilding}</p>
    <p>Number Of Apartments: {data.numberOfApartments}</p>
    <p>Pool: {data.pool}</p>
    <p>Landscape Maintenance: {data.landscapeMaintenance}</p>
    <p>Personnel: {data.personnel}</p>
    <p>Address: {data.address}</p>
    <p>Message: {data.message}</p>
  </div>
);