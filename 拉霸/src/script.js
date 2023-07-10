let block = document.querySelector("section .block");
let block2 = document.querySelector("section .block2");
let block3 = document.querySelector("section .block3");
let block4 = document.querySelector("section .block4");
let bar = document.querySelector("section .bar");
let bar2 = document.querySelector("section .bar2");
let bar3 = document.querySelector("section .bar3");
let push_button = document.querySelector("#push_button");
let empty_button = document.querySelector("#empty_button");

let staple_array = [
  "鮭魚五穀飯飯糰",
  "極上鮭魚卵飯糰",
  "極蝦仁蛋飯糰",
  "石安溏心蛋飯糰",
  "明太子鮭魚飯糰",
  "雞腿時蔬沙拉餐",
  "雞胸肉沙拉餐",
  "一日野菜溫沙拉",
  "香草烤雞沙拉",
  "一日野菜和風海藻",
];

let staple_cpf_array = [
  29.9, 6.1, 2.3, 165, 39, 30.6, 5.6, 3.7, 178, 42, 30.3, 5.5, 4, 179, 35, 27.9,
  5.6, 3.5, 167, 35, 33, 2.6, 5.3, 177, 33, 16.1, 14.3, 7.8, 192, 89, 30.3,
  13.1, 3.8, 208, 89, 14.2, 2.6, 2.4, 89, 69, 6.9, 14.8, 1.5, 100, 69, 6, 1.4,
  0.8, 37, 42,
];

let unstaple_array = [
  "阿桐阿寶四神湯",
  "麻油猴頭菇湯",
  "鳳梨苦瓜雞湯",
  "雙月香菇雞湯",
  "剝皮辣椒雞湯",
  "完熟蕃茄蔬菜湯",
];

let unstaple_cpf_array = [
  13.5, 10.5, 5.4, 144, 59, 6.2, 2.7, 7.3, 101, 65, 1.9, 13.1, 6.2, 116, 65,
  3.5, 2.4, 1.4, 36, 55, 2.8, 15.5, 4.8, 116, 59, 19.9, 7.19, 6.8, 166, 49,
];

let beverage_array = [
  "開喜凍頂烏龍茶",
  "午後無糖紅茶",
  "每朝健康綠茶",
  "每朝雙纖綠茶",
  "黑松茶花綠茶",
  "秋薑黃分解茶",
  "速纖纖維飲料",
  "波蜜紫色蔬果汁",
  "波蜜蔬果汁",
  "100%純蘋果汁 ",
];

let beverage_cpf_array = [
  11, 0, 0, 60, 40, 0, 0, 0, 0, 35, 16, 1, 0, 40, 25, 12, 0, 0, 0, 25, 8.8, 0,
  0, 20, 30, 2.3, 0, 0, 60, 25, 9.5, 0, 0, 36, 30, 10.2, 0, 0, 41, 15, 40, 0.8,
  0, 164, 60, 11.3, 0, 0, 45, 50,
];

//PUSH Button
push_button.addEventListener("click", (e) => {
  let staple_food = document.querySelector(".content");
  let unstaple_food = document.querySelector(".content2");
  let beverage = document.querySelector(".content3");
  let staple_cpf = document.querySelector(".content_second");
  let unstaple_cpf = document.querySelector(".content2_second");
  let beverage_cpf = document.querySelector(".content3_second");
  let result = document.querySelector(".content4");
  if (staple_food !== null) {
    // delete staple food
    block.removeChild(staple_food);
    // delete unstaple food
    block2.removeChild(unstaple_food);
    // delete beverage
    block3.removeChild(beverage);

    // delete staple food cpf
    bar.removeChild(staple_cpf);
    // delete unstaple food cpf
    bar2.removeChild(unstaple_cpf);
    // delete beverage cpf
    bar3.removeChild(beverage_cpf);

    //delete result
    block4.removeChild(result);
  }
  if (block.firstChild === null) {
    //create staple food
    let i;
    for (i = 0; i <= Math.random().toFixed(1) * 10; i++) {}
    let staple_food_text = staple_array[i];
    let staple_order = i * 5;
    let staple_cpf_c_text = staple_cpf_array[staple_order];
    let staple_cpf_p_text = staple_cpf_array[staple_order + 1];
    let staple_cpf__f_text = staple_cpf_array[staple_order + 2];
    let staple_cpf__cal_text = staple_cpf_array[staple_order + 3];
    let staple_cpf__price_text = staple_cpf_array[staple_order + 4];

    let staple_food = document.createElement("div");
    staple_food.classList.add("content");
    staple_food.innerText = staple_food_text;
    block.appendChild(staple_food);

    //create staple cpf and cal
    let staple_cpf = document.createElement("div");
    staple_cpf.classList.add("content_second");
    staple_cpf.innerText =
      "C : " +
      staple_cpf_c_text +
      "g P : " +
      staple_cpf_p_text +
      "g F : " +
      staple_cpf__f_text +
      "g\n" +
      "Cal : " +
      staple_cpf__cal_text +
      "卡  Price : " +
      staple_cpf__price_text +
      "元";
    bar.appendChild(staple_cpf);

    //create unstaple food
    let j;
    for (j = 0; j <= Math.random().toFixed(1) * 10 - 4; j++) {}
    let unstaple_food_text = unstaple_array[j];
    let unstaple_order = j * 5;
    let unstaple_cpf_c_text = unstaple_cpf_array[unstaple_order];
    let unstaple_cpf_p_text = unstaple_cpf_array[unstaple_order + 1];
    let unstaple_cpf__f_text = unstaple_cpf_array[unstaple_order + 2];
    let unstaple_cpf__cal_text = unstaple_cpf_array[unstaple_order + 3];
    let unstaple_cpf__price_text = unstaple_cpf_array[unstaple_order + 4];

    let unstaple_food = document.createElement("div");
    unstaple_food.classList.add("content2");
    unstaple_food.innerText = unstaple_food_text;
    block2.appendChild(unstaple_food);

    //create unstaple cpf and cal
    let unstaple_cpf = document.createElement("div");
    unstaple_cpf.classList.add("content2_second");
    unstaple_cpf.innerText =
      "C : " +
      unstaple_cpf_c_text +
      "g P : " +
      unstaple_cpf_p_text +
      "g F : " +
      unstaple_cpf__f_text +
      "g\n" +
      "Cal : " +
      unstaple_cpf__cal_text +
      "卡  Price : " +
      unstaple_cpf__price_text +
      "元";
    bar2.appendChild(unstaple_cpf);

    //create beverage
    let k;
    for (k = 0; k <= Math.random().toFixed(1) * 10; k++) {}
    let beverage_text = beverage_array[k];
    let beverage_order = k * 5;
    let beverage_cpf_c_text = beverage_cpf_array[beverage_order];
    let beverage_cpf_p_text = beverage_cpf_array[beverage_order + 1];
    let beverage_cpf__f_text = beverage_cpf_array[beverage_order + 2];
    let beverage_cpf__cal_text = beverage_cpf_array[beverage_order + 3];
    let beverage_cpf__price_text = beverage_cpf_array[beverage_order + 4];

    let beverage = document.createElement("div");
    beverage.classList.add("content3");
    beverage.innerText = beverage_text;
    block3.appendChild(beverage);

    //create beverage cpf and cal
    let beverage_cpf = document.createElement("div");
    beverage_cpf.classList.add("content3_second");
    beverage_cpf.innerText =
      "C : " +
      beverage_cpf_c_text +
      "g P : " +
      beverage_cpf_p_text +
      "g F : " +
      beverage_cpf__f_text +
      "g\n" +
      "Cal : " +
      beverage_cpf__cal_text +
      "卡  Price : " +
      beverage_cpf__price_text +
      "元";
    bar3.appendChild(beverage_cpf);

    //create result
    let result = document.createElement("div");
    result.classList.add("content4");
    result.innerText =
      "Total Calories : " +
      (staple_cpf__cal_text + unstaple_cpf__cal_text + beverage_cpf__cal_text) +
      " 卡 / Total Price : " +
      (staple_cpf__price_text +
        unstaple_cpf__price_text +
        beverage_cpf__price_text) +
      " 元 ";
    block4.appendChild(result);
  }
});