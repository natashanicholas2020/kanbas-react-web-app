import Lab1 from "./Lab1";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <Lab1 />
    </div>
);}
// Components can import other components to aggregate the code snippets
// of the components into larger, more complex HTML content. Here the
// Labs component imports the Lab1 component as the first of a
// set of exercises that will be implemented in later chapters.
// The Lab1 function is invoked with the HTML syntax <Lab1/>
// which is replaced by HTML the function returns implemented in the
// Lab1 function

