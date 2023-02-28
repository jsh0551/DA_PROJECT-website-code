const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector('#result');
const endpoint = 4;

function addAnswer(answerText,q_idx){
  var a = document.querySelector('.abox');
  var answer = document.createElement('Button');
  answer.classList.add('answerList');
  answer.classList.add('my-5');
  answer.classList.add('py-5');
  answer.classList.add('mx-auto');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click",function(){
    var children = document.querySelectorAll('.answerList');
    for(let i=0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }  
    goNext(++q_idx);
  },false);
}

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
  if (q_idx+1==endpoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qbox');
  q.innerHTML = qnaList[q_idx].q;
  for(let i in qnaList[q_idx].a){
    addAnswer(qnaList[q_idx].a[i].answer,q_idx);
  }
}

function goResult(){
  qna.style.WebkitAnimation = 'fadeOut 1s';
  qna.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    result.style.WebkitAnimation = 'fadeIn 1s';
    result.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      qna.style.display = 'none';
      result.style.display = 'block';
    },450)
  })
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
