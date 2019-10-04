const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
    }
};

const log = (type) => console.log.bind(console, type);
const e = React.createElement;

class DynamicForm extends React.Component{
    render() {
        return ('<p>Hello word</p>');
    }
}

ReactDOM.render(
    '<DynamicForm />',
    document.getElementById('app')
);