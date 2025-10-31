import Counter from "./Counter";
import NameEcho from "./NameEcho";
import LimitedCounter from "./LimitedCounter";
import LoginForm from "./LoginForm";

export default function App() {
  return (
    <div className="container">
      <h1>Day 3 – State and Events</h1>
      <div className="grid">
        <Counter step={1} />
        <Counter step={5} />
        <LimitedCounter min={-5} max={5} step={1}/>
        <LimitedCounter min={-20} max={20} step={3}/>
        <NameEcho />
        <LoginForm />

      </div>
    </div>
  );
}
