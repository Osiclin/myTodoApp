import Input from "./Input";
import Button from './Button'
import FormTitle from "./FormTitle";
import Textarea from "./Textarea";
import styles from '../styles/CreateForm.module.css'


export default function CreateForm() {

    return(
        <form onSubmit={CreateTodo}>
            <FormTitle title="Create Todo" />
            <div className={styles.datentitle}>
                <div>
                <label htmlFor="date">Date</label><br />
                <input htmlFor="date" class="title" type="date" name="date" />
                </div>
                <Input for="title" class="todoDetails" label="Title" type="title" name="title" />
            </div>
            <Textarea />
            <Button value="Save" />
        </form>
    )
}

const CreateTodo = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token")
    const title = document.getElementsByClassName('title').value
    const todoDetails = document.getElementsByClassName('todoDetails').value

    if(title !== "" && todoDetails !== "") {
        fetch("http://api.uatdrive.com:1010/todos", {
        method: "POST",
        body: JSON.stringify({
        "Title": title,
        "todoDetails": todoDetails
        }),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
}