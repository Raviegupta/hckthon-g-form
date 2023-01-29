// import { shareApi } from "./apiManager/api.js";

// ********** SELECT ITEMS & VARIABLES **********
const quesAnsBox = document.querySelector(".question-input");
const ulQuestionMainPage = document.querySelector(".ul-of-question-main-page");
const plusQuestionBox = document.querySelector(".add");
const deleteQuesAnsBox = document.querySelector(".delete-btn");
// const questionInputs = document.querySelector('.question-input');

// const responsesPage = document.querySelector('.responses');

const linkGenSendBtn = document.querySelector(".link-generator-send-button");

let data = [];

function getItemWithId(id) {
  data.forEach((item) => {
    if (item.id === id) return item;
  });
}

let count = 1;

// id="question_${count++}"

// ************* EVENT-LISTENERS ****************
plusQuestionBox.addEventListener("click", () => {
  quesAnsBox.innerHTML += `  <div class="ques-ans-box" id="question_${count}">
    <div class="question-n-type">
        <div class="ques">
            <input type="text" placeholder="Question" onchange="questionInputChange(event)">
        </div>
        <div class="ques-type">
            <select name="" id="">
                <option value= "shortAnswer">Short answer</option>
                <option value="paragraph">Paragraph</option>
                <option value="mcq">Multiple Choices</option>
            </select>
        </div>
    </div>

    <div class="long-answer">
        <input type="text" placeholder="long-answer-text">
    </div>

    <div>
        <div class="delete"></div>
        <div class="required">
            
        </div>
    </div>

    <div class="btn-container">
        <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" onClick="deleteItem(event)">
            <i class="fas fa-trash"></i>
        </button>
    </div>

</div>`;

  let newItem = {
    id: count,
    question: "",
    answer: "",
    questiontype: 0,
  };
  data.push(newItem);
  console.log("data", data);
  count++;
});

// let list = document.createElement('li');
// list.appendChild(quesAnsBox)

// ulQuestionMainPage.appendChild(list)

// deleteQuesAnsBox.addEventListener('click', deleteItem)

// questionMainPage.appendChild(quesAnsBox);


// responsesPage.addEventListener(click, () => {
  
// })

// ************* Functions ****************

const deleteItem = (e) => {
  console.log("ravi");
  const element = e.currentTarget.parentElement.parentElement;
  console.log(element);
  console.log(element.parent);
  quesAnsBox.removeChild(element);
  let parentId = element.id;
  let numberId = Number(parentId.replace(/\D/g, ""));
  let index = getIndex(numberId);
  data.splice(index, 1);
  console.log("parent id", parentId, numberId, data);
};

const questionInputChange = (e) => {
  const element = e.currentTarget.parentElement.parentElement.parentElement;
  let parentId = element.id;
  let numberId = Number(parentId.replace(/\D/g, ""));
  let index = getIndex(numberId);
  let value = e.currentTarget.value;
  data[index].question = value;
};

// ************* LOCAL STORAGE **************
function addToLocalStorage(id, value) {
  console.log("added to local storage");
  const grocery = { id, value };
  // ES6 => {id : id, value: value} = {id, value}
  // console.log(grocery);
  let items = getLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

const getIndex = (id) => {
  let ind = -1;
  data.forEach((item, index) => {
    if (item.id === id) {
      ind = index;
      return;
    }
  });
  return ind;
};

const getItemById = (id) => {
  let index = getIndex(id);
  return data[index];
};

// ****************************************************************************************

linkGenSendBtn.addEventListener("click", () => {
  if (data.length > 0) {
    shareApi(data).then((res) => {
      console.log(res);
    });
  }
});

const shareApi = (questionsData) => {
  const baseUrl = "https://aircampushack.onrender.com/forms/";

  let url = baseUrl + "senddata";
  let localFormId = localStorage.getItem("formId");

  let options = {
    body: JSON.stringify({
      data: JSON.stringify(questionsData),
      formId: localFormId,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  };

  let promise = new Promise((resolve, error) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => error(err));
  });
  return promise;
};
