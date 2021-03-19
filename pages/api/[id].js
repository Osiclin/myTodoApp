// export default function Todo() {
//     return(
//         <div>{todo.Title}</div>
//     )
// }

// export async function getStaticPaths() {
//     const res = await fetch("http://api.uatdrive.com:1010/todos")
//     const todos = await res.json();

//     const paths = todos.map((todo) => ({
//         params: { id: todo.id },
//     }))

//     return{
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps({ params }) {
//     const { id } = params;

//     const res = await fetch(`http://api.uatdrive.com:1010/todo?id=${id}`)
//     const data = await res.join();

//     const todo = data[0];

//     return{
//         props: { todo },
//     };
// }