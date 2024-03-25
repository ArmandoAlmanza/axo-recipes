import RecipesList from "./components/RecipesList/RecipesList";
import SideBar from "./components/Sidebar/SideBar";

function App() {
    return (
        <>
            <h1>Aqui ira el hero</h1>
            <main className="main__content">
                <SideBar />
                <RecipesList />
            </main>
        </>
    );
}

export default App;
