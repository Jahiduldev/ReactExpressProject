import Layout from "../Layout";
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Home = () => {
    return (
       <Layout title="Home Page" className="container">
        <h1>Hi jahidul</h1>
        <Link

            to="/userDetails/5"
          >
            userDetails
          </Link>

        
       </Layout>
    )
}
export default Home;