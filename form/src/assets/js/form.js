export default {
	data() {
		return {
			items: [],
			quantity: 0,
			observation: '',
		};
	},
	methods: {
		handleSubmit() {
			console.log(this.items, this.quantity, this.observation);
		},
	},
};