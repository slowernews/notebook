//vue////////////////////////////////////////


<div id="app">
  <div>{{ counter }}</div>
  <button v-on:click="increment">+</button>
  <button v-on:click="decrement">-</button>
</div>

<script>
  new Vue({
	el: '#app',
	data: {
	  counter: 0
	},
	methods: {
	  increment() {this.counter++}
	  decrement() {this.counter--}
	}
  });
</script>


//jquery/////////////////////////////////////


<div id="output"></div>
<button id="increment">+</button>
<button id="decrement">-</button>

<script>
  var counter = 0;
  $(document).ready(function() {
	var $output = $('#output');  
	$('#increment').click(function() {
	  counter++;
	  $output.html(counter);
	});
	$output.html(counter);
  });
</script>


//hyperapp///////////////////////////////////


import { h, app } from "hyperapp"

const state = {
  counter: 0
}

const actions = {
  down: value => state => ({ counter: state.counter - value }),
  up: value => state => ({ counter: state.counter + value })
}

const view = (state, actions) => (
  <div>
	<h1>{state.counter}</h1>
	<button onclick={() => actions.down(1)}>-</button>
	<button onclick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body)


//react//////////////////////////////////////


class App extends React.Component {
	constructor(props) {
		this.state = {
			count: 0
		}
	}

	onClick(e) {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.onClick.bind(this)}>Count Up!!</button>
			</div>
		)
	}
}

React.render(
	<App/>,
	document.getElementById('app-container')
);

<div id="app-container"></div>