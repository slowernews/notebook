/*   BASIC COUNTER IN DIFFERENT JS FRAMEWORKS   */


// jquery: imperative code - no build step ///////
// <script src="https://..."></script> ///////////
<script>
    $(document).ready(function() {
        var counter = 0
        $('#app').html(counter)                 //show initial value of counter
        $('#increment').click(function() {
            counter++
            $('#app').html(counter)
        });
        $('#decrement').click(function() {
            counter--
            $('#app').html(counter)
        })
    })
</script>

<h1 id="app"></h1>
<button id="increment">+</button>
<button id="decrement">-</button>


// vue: reactive code - no build step ////////////
// <script src="https://..."></script> ///////////
<script>
    new Vue({
        el: '#app',
        data: {
            counter: 0
        },
        methods: {
            increment() {this.counter++},
            decrement() {this.counter--}
        }
    })
</script>

<div id="app">
    <h1>{{ counter }}</h1>
    <button @click="increment">+</button>       //instead of calling a method we could simply say: 
    <button @click="decrement">-</button>       //counter++ or counter--     
</div>


// hyperapp: reactive and functional code ////////
// implies Babel build step pragma // @jsx h  ////
const state = {
    counter: 0
}

const actions = {
    changeCounter: value => state => ({ counter: state.counter + value })
}

const view = (state, actions) => (
    <div>
        <h1>{state.counter}</h1>
        <button onclick={() => actions.changeCounter(1)}>+</button>
        <button onclick={() => actions.changeCounter(-1)}>-</button>
    </div>
)

app(state, actions, view, document.getElementById('app'))

<div id="app"></div>


// react /////////////////////////////////////////
// implies Babel build step //////////////////////
class App extends React.Component {
    constructor(props) {
        super(props);                   //required
        this.state = {
            counter: 0
        }
    }
    changeCounter(value) {
        this.setState({
            counter: this.state.counter + value
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.state.counter }</h1>
                <button onClick={ this.changeCounter.bind(this, 1) }>+</button>
                <button onClick={ this.changeCounter.bind(this, -1) }>−</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

<div id="app"></div>


/*    BASIC CLOCK IN DIFFERENT JS FRAMEWORKS    */