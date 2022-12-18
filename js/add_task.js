async function initAddTask() {
    await includeHTML();
    selectedMenuButton(3);
    renderAddTask();
}


async function renderAddTask() {
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML += /*html*/ `
    <div class='addTaskHeadlineDiv'>
        <h2 class='addTHeadline'>Add Task</h2>
    </div>
    <div class='addTaskBtnOuterContainer'>
        <div class='addTaskBtnInnerContainer'>
            <button class='addTaskClear'>
                <span>Clear</span> 
                <img src="./assets/img/clearb.png">
            </button>
            <button class='addTaskCreate'>
                <span>Create Task</span>
                <img src="./assets/img/createb.png">  
            </button>
        </div>
    </div>

    <div class='addTaskAddTitleContainer'>
        <div class='addTaskAddTitleBox'>
            <h3>Title</h3>
            <input type="text" placeholder='Enter a title'>
            <span>This field is required</span>
        </div>

        <div class='addTaskAddDescriptenBox'>
            <h3>Descripten</h3>
            <input type="text" placeholder=''>
        </div>

        <div class='addTaskAddCategoryBox'>
            <h3>Category</h3>
            <button onclick=enableDisableCatList()><span id='selectedCat'>Select task category</span><img src="../assets/img/Vector 2.png" alt=""></button>
            <ul class="addTaskCatList listD-none" id="dropdown">
                <li onclick='selectCategory(0)'>New category</li>
                <li onclick='selectCategory(1)'>Category 2</li>
                <li onclick='selectCategory(2)'>Category 3</li>
            </ul>
            <div class='addTaskAddCategoryColor listD-none' id='colorSelection'>
                <div class='color1'></div>
                <div class='color2'></div>
                <div class='color3'></div>
                <div class='color4'></div>
                <div class='color5'></div>
                <div class='color6'></div>
            </div>
        </div>

    </div>

    
    `;
}

let catListStatus = false;

function enableDisableCatList(){
    if (!catListStatus){
        document.getElementById('dropdown').classList.remove('listD-none');
    }else{
        document.getElementById('dropdown').classList.add('listD-none');
    }
    catListStatus = !catListStatus;
}


let categoryList = ['New Category', 'Category 2', 'Category 3']

function selectCategory(catId){
    document.getElementById('selectedCat').innerHTML = '';
    let newCat = categoryList[catId];
    if (catId == 0){
        document.getElementById('selectedCat').innerHTML = /*html*/`
        <input type='text' placeholder='New Category Name'>`;
        enableDisableCatList();
        document.getElementById('colorSelection').classList.remove('listD-none')
    }else{
        document.getElementById('selectedCat').innerHTML = newCat;
        enableDisableCatList();
        document.getElementById('colorSelection').classList.add('listD-none');
    }
}