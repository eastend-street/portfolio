import About from "./About";
import renderer from "react-test-renderer";

test("AppTitle", () => {
  const component = renderer.create(<About />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
