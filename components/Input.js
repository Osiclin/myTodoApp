export default function Input(props) {
    return(
        <div>
            <label className={props.label} htmlFor={props.for}>{props.label}</label><br />
            <input className={props.class} autoComplete="true" type={props.type} name={props.name} required value={props.value} onChange={props.onChange} /><br/>
        </div>
    )
}