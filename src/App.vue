<style scoped lang="css">
@import './assets/styles/style.css';
</style>

<script src="./assets/js/form.js"></script>

<template>
	<div>
		<form @submit.prevent="handleSubmit" class="form-bg">
			<div class="form">
				<div class="header">
					<h1 class="letters">
						Formulário <br />
						para compra de
						<p>Pacote de adesivos</p>
					</h1>
					<img src="@/assets/images/box.svg" alt="box" />
				</div>

				<div class="header-bg"></div>
				<div class="form-about">
					<h2>Quais adesivos:</h2>
					<div class="languages">
						<div class="languages-input">
							<input
								v-model="items"
								value="react"
								type="checkbox"
								name="languages"
								id="react"
							/>
							<label for="react">React</label>
						</div>

						<div class="languages-input">
							<input
								v-model="items"
								value="vue"
								type="checkbox"
								name="languages"
								id="vue"
							/>
							<label for="vue">Vue</label>
						</div>

						<div class="languages-input">
							<input
								v-model="items"
								value="angular"
								type="checkbox"
								name="languages"
								id="angular"
							/>
							<label for="angular">Angular</label>
						</div>
					</div>

					<h2>Quantos adesivos de cada?</h2>
					<div class="stickers">
						<button type="button" @click="quantity = Math.max(0, quantity - 1)">
							-
						</button>
						<input v-model="quantity" placeholder="0" disabled />
						<button type="button" @click="quantity++">+</button>
					</div>

					<h2>Observações:</h2>
					<div>
						<input
							type="text"
							v-model="observation"
							class="observations"
							id="observations"
							name="observations"
							placeholder="Alguma dúvida? Recado?"
						/>
					</div>
				</div>
				<div class="btn-submit-bg">
					<button type="submit" class="btn-submit">ENVIAR</button>
				</div>
			</div>
		</form>
	</div>
</template>
