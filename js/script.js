let error_sign0 = document.getElementsByClassName("error_sign")[0];
let error_sign1 = document.getElementsByClassName("error_sign")[1];
let error_sign2 = document.getElementsByClassName("error_sign")[2];
let error_sign3 = document.getElementsByClassName("error_sign")[3];
let error_sign4 = document.getElementsByClassName("error_sign")[4];

let error_text = document.querySelector(".error_text");
let form_top = document.querySelector(".top");
let form_middle = document.querySelector(".middle");
let form_bottom = document.querySelector(".bottom");
let result_middle = document.querySelector(".result_portion");
let result_bottom = document.querySelector(".result_bottom");

result_middle.style.display = "none";
result_bottom.style.display = "none";

const calculate = () => {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value/100;
  const weight = document.getElementById("weight").value;

  if (name == "") {
    error_sign0.innerHTML = "!";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing name";
  } else if (name > 0 || name < 0) {
    error_sign0.innerHTML = "!";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "your name , please !";
  } else if (gender == "") {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "!";
    error_sign2.innerHTM = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing gender";
  } else if (gender > 0 || gender < 0) {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "!";
    error_sign2.innerHTM = "";
    error_sign3.innerHTM = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "your gender , please !";
  } else if (isNaN(age) || age == "") {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "!";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing age";
  } else if (isNaN(height) || height == "") {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "!";
    error_sign4.innerHTML = "";
    error_text.textContent = "missing height";
  } else if (isNaN(weight) || weight == "") {
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "!";
    error_text.textContent = "missing weight";
  } else {
    form_top.style.display = "none";
    form_middle.style.display = "none";
    form_bottom.style.display = "none";

    result_middle.style.display = "block";
    result_bottom.style.display = "block";
    error_sign0.innerHTML = "";
    error_sign1.innerHTML = "";
    error_sign2.innerHTML = "";
    error_sign3.innerHTML = "";
    error_sign4.innerHTML = "";
    error_text.textContent = "";
  }
  bmi_result = weight / (height * height);
  console.log(bmi_result);
  
  
  // bmi_result.toFixed(0)
  const bmi_result_text = document.getElementById("bmi_result_text");
  const result_advice_info = document.getElementsByClassName("result_advice_info")[0];
  const under_weight = document.querySelector(".under_weight");
  under_weight.style.display = "none";

  const normal = document.querySelector(".normal");
  normal.style.display = "none";

  const over_weight = document.querySelector(".over_weight");
  over_weight.style.display = "none";

  const ovesity = document.querySelector(".ovesity");
  ovesity.style.display = "none";

  const bad_luck = document.querySelector(".bad_luck");
  bad_luck.style.display = "none";


  if (bmi_result < 18.5) {
    under_weight.style.display = "block";
    bmi_result_text.style.fontSize = "40px";
    bmi_result_text.innerHTML = "under weight";
    result_advice_info.innerHTML =
      "Eat a balanced, calorie-rich diet with protein, healthy fats, and carbs; do strength training regularly.";
  } else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
    normal.style.display = "block";
    bmi_result_text.innerHTML = "normal";
    result_advice_info.innerHTML =
      "Maintain a healthy lifestyle with a balanced diet, regular exercise, enjoying movement, and making smart choices.";
  } else if (bmi_result >= 25 && bmi_result <= 29.9) {
    over_weight.style.display = "block";
    bmi_result_text.style.fontSize = "22px";
    bmi_result_text.innerHTML = "over weight (pre-ovesity)";
    result_advice_info.innerHTML =
      "Maintain a healthy lifestyle through balanced nutrition, regular exercise, good sleep, and a supportive environment.";
  } else if (bmi_result >= 30 && bmi_result <= 40.9) {
    ovesity.style.display = "block";
    bmi_result_text.innerHTML = "ovesity";
    result_advice_info.innerHTML =
      "Focus on a balanced diet, regular activity, limit sugar and processed foods, ensure sleep, address emotions.";
  } else {
    bad_luck.style.display = "block";
    bmi_result_text.innerHTML = "bad luck :-(";
    result_advice_info.innerHTML =
      "Don't worry, eat more.";
      result_advice_info.style.fontSize="26px"
  }
  const user_name_text = document.getElementsByClassName("user_info_text")[0];
  const user_gender_text = document.getElementsByClassName("user_info_text")[2];
  const user_age_text = document.getElementsByClassName("user_info_text")[4];
  const user_height_text = document.getElementsByClassName("user_info_text")[1];
  const user_weight_text = document.getElementsByClassName("user_info_text")[3];
  const user_result_text = document.getElementsByClassName("user_info_text")[5];

  user_name_text.innerHTML = `name : ${name}`;
  user_height_text.innerHTML = `height : ${height * 100} (CM)`;
  user_gender_text.innerHTML = `gender : ${gender}`;
  user_weight_text.innerHTML = `weight : ${weight} (KG)`;
  user_age_text.innerHTML = `age : ${age} years `;
  user_result_text.innerHTML = ` BM score : ${bmi_result.toFixed(1)} `;
};

const pageLoad = () => {
  location.reload();
};
