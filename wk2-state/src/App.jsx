// import { useState } from "react";
// import Button from "./components/Button";

// export default function App(){
//   const [todos, setTodos] = useState([]);
//   const [text, setText] =useState ("");
//   const saveTods =() => {
//     setTodos([...todos, text]);
//   setText("");
//   };
//   return (
//     <div>
//       <input onChange={(e) => setText(e.target.value)} value={text}/>
//       <Button text="บันทึก" handle={saveTods}/>
//       <ol>
//         {todos.map((i, k) => (
      

//           <li key={k}>
//             {i}
//             <Button
//             text="ลบ"
//             handle={() => setTodos(todos.filter((e, i) => i != k))}
//             />
//             </li>
//       ))}
//       </ol>
//     </div>
//   )
// }

















// // import { useState } from "react";
// // import Button from "./components/Button";

// // export default function App() {
// //   const [counter,setCounter]= useState(0);  const [text,setText] =useState("");
// //   return (
// //     <>
// //       {counter}
// //       <Button
// //         text="ปุ่ม +"handle={() => setCounter(counter + 1)}
// //       />
// //       <Button text="ปุ่ม -" /> <br/>
// //       <input onChange={(e) => setText(e.target.value)} /> <br/>
// //       {text}
// //     </>
// //   );
// // }
