import "./App.scss";
import team from "./data/team";
import Employee from "./Components/Employee/Employee";

const App = () => {
  return (
    <div className="app">
      <section className="tracker">
        <h1 className="tracker__heading">Ticket Tracker</h1>
        <Employee name={team.name} role={team.role} />
      </section>
    </div>
  );
};

export default App;
