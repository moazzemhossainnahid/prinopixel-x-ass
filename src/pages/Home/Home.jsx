import PublicXProject from "../../components/pages/Home/PublicXProject";
import ExtText from "../../components/pages/Home/ExtText";
import StoriesNews from "../../components/pages/Home/StoriesNews";

const Home = () => {
    return (
        <div className="w-full">
            <ExtText/>
            <PublicXProject/>
            <StoriesNews/>
        </div>
    );
};

export default Home;