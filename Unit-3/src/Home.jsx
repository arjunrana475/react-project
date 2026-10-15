import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    function handle() {
        navigate("/dashboard");
    }

  return (
    <div>
          <h1>home</h1>
          <button onClick={handle}> Go to dashboard</button>
    </div>
  )
}
