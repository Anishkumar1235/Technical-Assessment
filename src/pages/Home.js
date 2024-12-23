import supabase from "../config/supabaseClient";
const Home = () => {
  console.log(supabase);
  return (
    <div classname="page home">
      <h2>home</h2>
    </div>
  );
};

export default Home;
