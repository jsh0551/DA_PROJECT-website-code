const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result');
const endpoint = 15;
const select = new Array(15);
select.fill(0);
select[1] = 1;
select[2] = 1;
const answer_types = ['transportation','laundry','electro','coffee','food'];
const select_check = new Array(15);
select_check.fill(null);
const score_list = [0,0,0,0,0,0];

function createRadioElement(name, value, text) {
  // input 태그 생성
  var radioHtml = '<input type="radio" id="'+name+'" name="' + name + '" value="' + value + '">';
  // 라디오 옆에 텍스트 생성
  var labelHtml = '<label>' + "&nbsp"+text + '</label>';

  // 라디오와 텍스트를 감싸는 div 생성
  var div = document.createElement('div');
  div.className = 'radio';
  div.innerHTML = radioHtml + labelHtml;
  
  div.classList.add('answerList');
  div.classList.add('my-2');
  div.classList.add('py-3');
  div.classList.add('mx-auto');
  div.style.width = '80%';
  div.style.fontSize = '18px';
  return div;
}

function addAnswer(answerText, q_idx, idx){
  var a = document.querySelector('.abox');
  a.classList.add('answerList');
  a.style.borderRadius = '20px';
  a.style.height = '60%';

  radio_text = qnaList[q_idx].a[idx].answer;
  radio_value = idx;
  var radio1 = createRadioElement(radio_text, String(idx), answerText);
  var container = document.createElement('div');
  container.id = 'radio-container';

  // 라디오를 div에 추가
  container.appendChild(radio1);
  a.appendChild(container);
  var r = document.querySelector('[name="' + radio_text + '"]');

  r.addEventListener("click",function(event){
    if (select_check[q_idx] !== null) {
      select_check[q_idx].checked = false;
    }
    event.target.checked = true;
    select_check[q_idx] = event.target;

    select[q_idx] = qnaList[q_idx].a[idx]['score'];
  },false);
}


function goNext(q_idx){
  console.log(select)
  console.log(q_idx)
  // console.log(qnaList[q_idx].a[select[q_idx]]['score'])
  if (q_idx==0){
    document.querySelector('.container').classList.add('type_1');
  }
  else if (q_idx<=2){
    document.querySelector('.container').classList.add('type_2');
  }
  else if (q_idx<=5){
    document.querySelector('.container').classList.add('type_3');
  }
  else if (q_idx<=9){
    document.querySelector('.container').classList.add('type_4');
  }
  else if (q_idx<=12){
    document.querySelector('.container').classList.add('type_5');
  }
  else if (q_idx<=14){
    document.querySelector('.container').classList.add('type_6');
  }
  else if (q_idx>=endpoint){
    console.log(select[0])
    score_list[0] = select.toString();
    score_list[1] = select[0] * select[1] * select[2];
    score_list[2] = select[10] + select[11] + select[12];
    score_list[3] = select[3] + select[8] + select[13] + select[14];
    score_list[4] = select[4] + select[5];
    score_list[5] = select[6] + select[7] + select[9];

    sessionStorage.setItem("copyed_all", score_list.slice(0,1));
    sessionStorage.setItem("copyed", score_list.slice(1,6));

    goResult();
    return;
  }
  var q = document.querySelector('.qbox');
  q.innerHTML = qnaList[q_idx].q;
  for(let i=0; i<qnaList[q_idx].a.length; i++){
    addAnswer(qnaList[q_idx].a[i].answer, q_idx, i);
  }
  var a = document.querySelector('#qna');
  var sub_btn = document.createElement('input');
  sub_btn.classList.add('w-btn');
  sub_btn.classList.add('w-btn-indigo');
  sub_btn.type = 'button';
  sub_btn.value = 'next';
  a.appendChild(sub_btn);

  sub_btn.addEventListener("click",function(){
    if (select_check[q_idx]!==null){
      var children = document.querySelectorAll('#radio-container');
      for(let i=0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.display = 'none';
      }
      sub_btn.disabled = true;
      sub_btn.style.display = 'none';
      setTimeout(() => {
        idx = select[q_idx]-1;

        if (q_idx==0){
          if (idx==1){goNext(1);}
          else {goNext(2)};
        }
        else if (q_idx==1){
          goNext(3);
        }
        else if (q_idx==4){
          if (idx==0){goNext(6);}
          else {goNext(5)};
        }
        else if (q_idx==6){
          if (idx==0){goNext(7);}
          else if (idx==2){goNext(8);}
          else {goNext(9)};
        }
        else if (q_idx==7){
          goNext(9);
        }
        else {goNext(++q_idx);}
      },450)
    }
  },false);
}

function calResult_max(){
  var result = score_list.slice(1,6).indexOf(Math.max(...score_list.slice(1,6)));
  return result;
}

function calResult_min(){
  var result = score_list.slice(1,6).indexOf(Math.min(...score_list.slice(1,6)));
  return result;
}

function setResult(max_value,min_value){
  
  const imgDiv1 = document.querySelector('#best_img');
  const imgCap1 = document.querySelector('#best_cap');
  var Img1 = document.createElement('img');
  var imgURL1 = "./static/" + resultList[max_value]['best'] + ".png";
  Img1.src = imgURL1;
  Img1.alt = resultList[max_value]['best'];
  Img1.style.maxHeight = "100%";
  Img1.style.width = "auto";
  Img1.classList.add('img-fluid');
  imgDiv1.appendChild(Img1);
  imgCap1.innerHTML = resultList[max_value]['best_text'];
  
  const imgDiv2 = document.querySelector('#worst_img');
  const imgCap2 = document.querySelector('#worst_cap');
  var Img2 = document.createElement('img');
  var imgURL2 = "./static/" + resultList[min_value]['worst'] + ".png";
  Img2.src = imgURL2;
  Img2.alt = resultList[min_value]['worst'];
  Img2.style.maxHeight = "100%";
  Img2.style.width = "auto";
  Img2.classList.add('img-fluid');
  imgDiv2.appendChild(Img2);
  imgCap2.innerHTML = resultList[min_value]['worst_text'];

}

function post_data(d_type,name,id,value){
  var type_input = document.createElement('input');
  type_input.type = d_type;
  type_input.name = name;
  type_input.id = id;
  type_input.value = value;
  return type_input
}

function result_post(){
  const postform = document.querySelector('.createform');
  var sever_ip = window.location.hostname;
  postform.action = "http://"+sever_ip+":8000/result"
  postform.method = 'POST'

  var list_data_copyed = sessionStorage.getItem("copyed_all");
  var data_copyed = sessionStorage.getItem("copyed");
  const answer_count_copyed = data_copyed.split(',')

  var type_input = post_data("text",'data_list','data_list',list_data_copyed);
  postform.appendChild(type_input);
  for(let i=0; i<answer_types.length; i++){
    var type_name = answer_types[i]
    var type_count = parseInt(answer_count_copyed[i]);
    var type_input = document.createElement('input');
    type_input.type = "number";
    type_input.name = type_name;
    type_input.id = type_name;
    type_input.value = type_count;
    postform.appendChild(type_input);
  }
  var max_value = post_data("number",'max_value','max_value',calResult_max());
  var min_value = post_data("number",'min_value','min_value',calResult_min());
  postform.appendChild(max_value);
  postform.appendChild(min_value);

  document.getElementById("formId").submit();
}

function goResult(){
  result_post();
}

function redirectResult(max_value,min_value){
  console.log(max_value,min_value)
  setResult(max_value,min_value);
}

function begin(){
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    qna.style.WebkitAnimation = 'fadeIn 1s';
    qna.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'block';
    })
    let q_idx = 0;
    goNext(q_idx);
  })

}
