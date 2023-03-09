const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result');
const endpoint = 3;
const select = [0,0,0,0];
const answer_count = [0,0,0,0];
const answer_types = ['a','b','c','d'];


function addAnswer(answerText, q_idx, idx){
  var a = document.querySelector('.abox');
  var answer = document.createElement('Button');
  answer.classList.add('answerList');
  answer.classList.add('my-5');
  answer.classList.add('py-5');
  answer.classList.add('mx-auto');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click",function(){
    select[q_idx] = idx;
    var children = document.querySelectorAll('.answerList');
    for(let i=0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    setTimeout(() => {
      var target = qnaList[q_idx].a[idx].type;
      for(let i = 0; i<target.length; i++){
        answer_count[target[i]] += 1;
      }

      for(let i=0; i<children.length; i++){
        children[i].style.display = 'none';
      }
      goNext(++q_idx);
    },450)
  },false);
}

// function proceed() {
//   var form = document.createElement('form');
//   form.setAttribute('method', 'post');
//   form.setAttribute('action', '');
//   form.style.display = 'hidden';
//   document.body.appendChild(form)
//   form.submit();
// }

function goNext(q_idx){

  if (q_idx==0){
    document.querySelector('.container').classList.add('time0');
  }
  if (q_idx==1){
    document.querySelector('.container').classList.add('time1');
  }
  if (q_idx==2){
    document.querySelector('.container').classList.add('time2');
  }
  if (q_idx==endpoint){
    sessionStorage.setItem("copyed", answer_count);
    
    // window.location.href = 'http://127.0.0.1:8000/createform';
    goResult();
    return;
  }
  var q = document.querySelector('.qbox');
  q.innerHTML = qnaList[q_idx].q;
  for(let i in qnaList[q_idx].a){
    addAnswer(qnaList[q_idx].a[i].answer, q_idx, i);
  }
  
}

function calResult(){
  var result = answer_count.indexOf(Math.max(...answer_count));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  const resultList = document.querySelector('.resultlist');
  let list_text = ""
  for(let i=0; i<answer_count.length; i++){
    list_text += String(answer_count[i]) + "/"
  }
  resultList.innerHTML = list_text
  resultList.style = 'color:white'

  const AnswerGroup = document.querySelector('.AnswerGroup');
  for(let i=0; i<endpoint; i++){
    let tempLI = document.createElement('li');
    let tempText = qnaList[i].q + " " + qnaList[i].a[select[i]].answer;
    tempLI.innerText = tempText;
    tempLI.style = 'color:white';
    AnswerGroup.appendChild(tempLI);
  }

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = "./static/dog.png"
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function result_post(){
  const postform = document.querySelector('.createform');
  postform.action = "http://127.0.0.1:8000/createform"
  postform.method = 'POST'

  var data_copyed = sessionStorage.getItem("copyed");
  const answer_count_copyed = data_copyed.split(',')
  console.log(answer_count_copyed)
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
  document.getElementById("formId").submit();
}

function goResult(){

  setResult();
  calResult();
  result_post();
}

function redirectResult(){
  setResult();
  calResult();
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
    },450)
    let q_idx = 0;
    goNext(q_idx);
  },450)

}
