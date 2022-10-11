

export default function Counter(props) {

    console.log("className = " + props.color)

    

    return (
       <>
        <p className={props.color}>{props.count}</p>

        <button onClick={() => props.setCount(props.count + 1)}>+</button>
       </>
    )
}