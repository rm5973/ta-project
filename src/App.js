import Search from "./compo/search";
import Card from "./compo/Card";
function App() {
  return (
    <div class='bg-inherit bg-slate-600 h-[70vw]  ' >  
        <div><Search />
          </div>
          <div class="flex justify-center items-center">
            <Card />
          </div>
        
     
    </div>
  );
}

export default App;
