
<template>
  <section class="container">
    <h1>Register/ Login form</h1>
    <form action="" @submit.prevent="onFormSubmit">
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="text"
           v-model="email"
          :class="[{invalid:!isValid},valid]"
          class="form-control-plaintext"
          id="staticEmail"
          placeholder="email@example.com"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password"
        :class="[{invalid:!isValid},valid]"
         placeholder="password" v-model="password" class="form-control" id="inputPassword" />
      </div>
    </div>
    <div class="mb-3 row">
        <input type="submit" value="Submit">
    </div>
    <p>{{!isValid?"Email and Password cannot be empty": `email = ${email}`}}</p>
    </form>
    </section>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent, ref } from "vue";
import router from '../router/index';

export default defineComponent({
  setup() {
      let email = ref<string>("")
      let password = ref<string>("")
      let isValid= ref<boolean>(false)

       const onFormSubmit = ()=>{
         if(email.value!=="" && password.value!=="")
         {
            isValid.value=true;
         }
          if(isValid.value)
          {
              store.commit('registerUser',{
              email: email.value,
              password: password.value
          })
          console.log("form submitted");
          router.push('/home')
          }else{
              isValid.value=false

          }
      }
     
    return {
        email,
        password,
        isValid,
        onFormSubmit
    };
  },
});
</script>

<style scoped>
.invalid{
    border: solid 2px red;

}
.valid{
    border: solid 2px white;
}
</style>