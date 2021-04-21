let nextId = 3 // Keeps track of task id for next task

const app = new Vue({ // Create new Vue instance
    el: '#app',
    data: vueData,
    methods:{deleteTask, addNew}
});

function vueData(){ // All variables needed for Vue, (task list, currently loaded page and value in input box)
    return {
        tasks: [
            {id:1, text:"Task1", day:"Today"},
            {id:2, text:"Task2", day:"Tomorrow"}
        ],
        currentPage: 'Home',
        addInput: ""
    }
}


function deleteTask(id) // Onclick delete button. Deletes task with same id
{
    this.tasks = this.tasks.filter((task) => task.id !== id);
}


function addNew()  // Adds new object to array with new id and value of input box
{
    this.tasks.push({id:nextId++, text:this.addInput, day:"Tomorrow"});
    this.addInput = "";
}