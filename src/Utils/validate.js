export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z-' ]+$/.test(name);

    if (name== false && name.trim() === '') {
        return 'Name cannot be empty';
    }
    if (email==false && email.trim() === '') {
        return 'Email cannot be empty';
    }
    if (password==false && password.trim() === '') {
        return 'Password cannot be empty';
    }
    if (!isNameValid) {
        return 'Name is not valid';
    }
    if (!isEmailValid) {
        return 'Email is not valid';
    }
    if (!isPasswordValid) {
        return 'Password is not valid';
    }
    return null;
};




// export const checkValidData=(email,password,name)=>{
//     console.log(email,password);
//     const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
//     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     const isNameValid=/^[a-zA-Z-' ]+$/.test(name);
//     //if email ,password,name length is equal to zero then 

//     if(!isNameValid){
//         return 'Name is not Valid'
//     }
//     if(!isEmailValid){
//         return 'Email Id is not  valid '
//     }if(!isPasswordValid){
//         return 'Password is not  valid'
//     }
//      return null;
// }