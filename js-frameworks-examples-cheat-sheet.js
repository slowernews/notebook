/*   BASIC COUNTER:   */


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


// vue: declarative code - no build step ////////////
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


// hyperapp: declarative and functional code ////////
// implies Babel build step //////////////////////
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
        this.state = {counter: 0}
    }
    changeCounter(value) {
        this.setState({counter: this.state.counter + value})
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


/*   CAPTURING USER INPUT:   */


// jquery: imperative code - no build step ///////
// <script src="https://..."></script> ///////////
<script> // with continuous user input capture
    $(function() {
        //keypress wouldn't include delete key, keyup does.
        //We also query the div id app and find the other elements so that we can reduce lookups
        $('#app').keyup(function(e) {
            var userInput = $(this).find('#answerBox').val()
            $(this).find('.answer').empty()
            $(this).find('.answer').append(userInput)
        })
    })
</script>

<script> // with single event user input capture
    $(function() {
        $('#app').change(function(e) {
            var userInput = $(this).find('#answerBox').val()
            $(this).find('.answer').append(userInput)
        })
    })
</script>

<div id="app">
    <label for="answerBox">Answer:</label>
    <input id="answerBox" type="text" />  
    <p>Your answer is: <span class="answer"></span></p>
</div>


// vue: declarative code - no build step /////////
// <script src="https://..."></script> ///////////
<script>
    new Vue({
        el: '#app',
        data: {
            answer: ''
        }
    })
</script>

<div id="app">
    <label for="answer">Answer:</label>
    <!-- with countinuous user input capture --><input id="answer" type="text" v-model="answer"/> 
    <!-- with single user input capture --><input id="answer" type="text" v-model.lazy="answer"/>
    <p>Your answer is: <span>{{ answer }}</span></p>
</div>


/*   HIDING AND SHOWING:   */


// jquery: imperative code - no build step ///////
// <script src="https://..."></script> ///////////
<script>
    $(function() {
        $('button').on('click', function() {
            $('#hello').toggle() //$('#hello').toggleClass('red') would style the element
            $(this).attr('aria-expanded', ($(this).attr('aria-expanded') == "false" ? true : false))
        })
    })
</script>

<div id="app">
    <button aria-expanded="false">Toggle Panel</button>
    <p id="hello">hello</p>
</div>


// vue: declarative code - no build step /////////
// <script src="https://..."></script> ///////////
<script>
    new Vue({
        el: '#app',
        data: {
            active: false
        }
    })
</script>script>

<div id="app">
    <button @click="active = !active" :aria-pressed="active ? 'true' : 'false'">Toggle me</button>
    <p v-if="active">hello</p>
<!--<p :class="{ red: active }">Sometimes I need to be styled differently</p> -->
</div>