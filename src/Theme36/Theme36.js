import Theme36NavBar from "./Theme36NavBar";
import Theme36Home from "./Theme36Home";
import Theme36Footer from "./Theme36Footer";
import globalStyles from "./style.js";

const Theme36 = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div>
        <Theme36NavBar />
        <Theme36Home />
        <Theme36Footer />
      </div>
    </>
  );
};

export default Theme36;
