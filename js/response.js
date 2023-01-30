import { getalldataApi } from "../apiManager/api.js";

const paraResQuestion = document.querySelector(".para-res-question");
const paraResAnswer = document.querySelector(".para-res-answer");
const paraQuesItem = document.querySelector(".para-ques-item");

let allData = null;
let currentData = [];

getalldataApi()
  .then((data) => {
    console.log(data);
    allData = JSON.parse(data.user.data);
    if (allData.length > 0) {
      currentData = allData[0];
      renderQuestionView(currentData);
    }
  })
  .catch((err) => {
    console.log(err);
  });


const renderQuestionView = (currData) => {
    paraQuesItem.innerHTML = "";
    currData.forEach(element => {       
        generateQuestionView(element)
    });
}


const generateQuestionView = (cData) => {
  paraQuesItem.innerHTML += `<div class="para-res-question-box">
    <div class="para-res-question">${cData.question}</div>
    <div class="para-res-answer">${cData.answer}</div>
</div>`;
};

// data
// :
// "[[{\"id\":1,\"question\":\"qewvfbgn\",\"answer\":\"\",\"questiontype\":0},{\"id\":2,\"question\":\"sadvfbgn\",\"answer\":\"\",\"questiontype\":0}],\"[{\\\"id\\\":2,\\\"question\\\":\\\"fdsfgfnh \\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":3,\\\"question\\\":\\\"qsacdvbgn\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":2,\\\"question\\\":\\\"fdsfgfnh \\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":3,\\\"question\\\":\\\"qsacdvbgn\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"rgefrwds\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":2,\\\"question\\\":\\\"gbfvdc\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"wqefgh\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"asxdcfvg\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":2,\\\"question\\\":\\\"axscdvbfg\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"azSX\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":2,\\\"question\\\":\\\"SAdx\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":2,\\\"question\\\":\\\"qsxadvf\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"zAXSCDVF\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":2,\\\"question\\\":\\\"xascdvZB\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":2,\\\"question\\\":\\\"fdsa\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"czc\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"czc\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"azsxdvfsb\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\",\"[{\\\"id\\\":1,\\\"question\\\":\\\"waht?\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0},{\\\"id\\\":2,\\\"question\\\":\\\"Where?\\\",\\\"answer\\\":\\\"\\\",\\\"questiontype\\\":0}]\"]"
// email
// :
// "63d699a75d4f00587d755ae2"
