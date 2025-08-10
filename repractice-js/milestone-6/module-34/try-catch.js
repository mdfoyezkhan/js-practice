// function addAge(){
//     const getAge = document.getElementById('age');
//     const getAgeValue = getAge.value;
//     const getError = document.getElementById('error');
//     try{
//        if(isNaN(getAgeValue)){
//         throw 'please inter number';
//        }
//        else if(getAgeValue < 18){
//         throw 'your age should be 18 years'
//        }
//        else if(getAgeValue >= 30){
//         throw 'over age'
//        }
//        getError.innerText ="";
       
//     }
//     catch(error){
//         getError.innerText = 'ERROR:' + error;
//     }
//     finally{
//         console.log('All done inside try catch')
//     }
    
// }

function addAge(){
    const age = document.getElementById('age');
    const ageValue = age.value;
    const errors = document.getElementById('error');
    try{
        if(isNaN(ageValue)){
            throw 'Please enter number'
        }
        else if (ageValue <= 18){
            throw 'your age should be 18 years'
        }
        else if(ageValue >= 30){
            throw 'your age is over'
        }
        else{
            errors.innerText='your age is perfect'
        }
    }
    catch(error){
        errors.innerText = 'Error:' + error;
    }
    finally{
        console.log('All done inside try and catch')
    }
}