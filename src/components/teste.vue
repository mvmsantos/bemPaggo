<template>
  <div>
    <h1>dsads</h1>
    {{nome}}
    <button v-on:click="printar">dsadsa</button>
    <input :placeholder="idade">
    <ul>
      <li v-for="elemento in lista" :key="elemento">{{elemento}}</li>
    </ul>

    <h1 v-if="mostrar">fdaf</h1>
    <h2 v-else>dsad </h2>
    <button @click="trocar">TROCAR</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    mostrar: false,
    lista: ['dos', 'moreira', 'santos', 'marcos'],
    nome: "Marcos",
    idade: 20
    }
  },

  methods: {
    printar (){
      console.log('dadsa')   
    },
    trocar () {
      this.mostrar=!this.mostrar
    }
  },

  name: 'App',
}

</script>
.header-bg {
  background: #313879;
  border-radius: 5px 5px 0 0;
  width: 100%;       
  height: 300px;            
  shape-outside: ellipse();       
  clip-path: ellipse(80% 50% at 60% 20%);       
}