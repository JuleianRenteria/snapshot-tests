import GitHubCard from "./GitHubCard";
import renderer from 'react-test-renderer'
import { render } from "@testing-library/react";


test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})