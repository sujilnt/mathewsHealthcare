import {v4 as uuidv4} from 'uuid';
import img1 from '../../assets/img/team/jossy.jpg';
import img2 from '../../assets/img/team/2.png';
import img3 from '../../assets/img/team/3.png';

const teamOneData = [
    {
        id: uuidv4(),
        img: img1,
        name: 'Dr Jossy Mathew',
        designation: 'Professor',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img2,
        name: 'Dolly Jossy',
        designation: ' Senior Nurse',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    {
        id: uuidv4(),
        img: img3,
        name: 'Dr Alan Jossy',
        designation: 'Doctor',
        fb: '#',
        twitter: '#',
        insta: '#',
        linkedIn: '#'
    },

    
]

export default teamOneData;