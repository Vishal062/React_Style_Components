import "./styles.css";
import { Navbar } from "../src/Components/Navbar";
import { DrawerItem } from "../src/Components/DrawerItem";
import { SiteName } from "../src/Components/SiteName";
function App() {
  return (
    <>
      <Navbar>
        <SiteName>
          <DrawerItem lab="MasaiSchool"></DrawerItem>
        </SiteName>
        <DrawerItem lab="About us"></DrawerItem>
        <DrawerItem lab="Carrer"></DrawerItem>
        <DrawerItem lab="Courses"></DrawerItem>
      </Navbar>
    </>
  );
}

export default App;
