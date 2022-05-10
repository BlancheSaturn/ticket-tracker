import "./App.scss";
import team from "./data/team";
import Employee from "./Components/Employee/Employee";

const App = () => {
  const employeeJSX = team.map((member) => {
    return <Employee name={member.name} role={member.role} />;
  });

  return (
    <div className="app">
      <section className="tracker">
        <h1 className="tracker__heading">Ticket Tracker</h1>
        <div className="tracker__employee">
          <p>{employeeJSX}</p>
        </div>
      </section>
    </div>
  );
};
export default App;
