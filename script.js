window.onload = function(){
const heightInp = document.querySelector(".height");
const weightInp = document.querySelector(".weight");
const message = document.querySelector(".message");
const welcome = document.querySelector(".welcome");
const welcome_more = document.querySelector(".welcome_more");
// const inf_text = document.querySelector(".inf_text");

// heightInp.addEventListener('input', calcBMI);
weightInp.addEventListener('input', calcBMI);
weightInp.addEventListener('input', ()=>{
    welcome.style.display="block";
    welcome_more.style.display="block";
})

function calcBMI(){
    var height = parseFloat(heightInp.value);
    var weight = parseFloat(weightInp.value);
    console.log("Function working bro!")
    if(!isNaN(height)&&!isNaN(weight)){
        var height_metres = height/100;
        const bmi = weight/(height_metres*height_metres);
 
        if(bmi <= 18.5){
            var inf_text ="You are underweight. Consider eating a balanced, nutritious diet and consulting a healthcare provider.";
        }
        else if(bmi>18.5 && bmi<=24.9){
            var inf_text ="Great job! You have a healthy weight. Keep maintaining your lifestyle!";
        }
        else if(bmi>24.9 && bmi<=29.9){
            var inf_text ="You're slightly above the healthy range. A bit more activity and a healthy diet can help!";
        }
        else if(bmi>29.9 && bmi<=34.9){
            var inf_text ="You are in the obese category (Class I). It's a good idea to consult a doctor or a nutritionist to plan a healthy lifestyle change.";
        }
        else if(bmi>34.9 && bmi<=39.9){
            var inf_text ="You are in Obesity Class II. Health risks may increase, so consider professional guidance and support.";
        }
        else{
            var inf_text ="This is considered severe obesity. It's important to speak with a healthcare provider for personalized advice and support.";
        }
        message.innerHTML = "Your BMI is "+bmi.toFixed(1)+"<br>"+inf_text;
        message.style.color="black";
        message.style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        message.style.fontSize="30px";
    }
    // else{
    //     message.style.display="none";
    // }
}

}