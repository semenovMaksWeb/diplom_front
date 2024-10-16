<template>
    <form class="formLogin" @submit.prevent>
        <h2 class="h2"> Форма авторизации</h2>
        <div class="wrapper">
            <label class="label" for="telephone">Номер телефона</label>
            <input v-model="telephone" id="telephone" placeholder="Номер телефона">
        </div>
        <div class="wrapper">
            <label class="label" for="password">Номер телефона</label>
            <input v-model="password" id="password" type="password" placeholder="Пароль">
        </div>
        <div class="wrapper">
            <label class="label" for="developer">Разработчик</label>
            <input v-model="isDeveloper" id="developer" type="checkbox">
        </div>
        <button @click="clickButton" class="buttonLogin button_success button">Вход</button>
    </form>
</template>

<script lang="ts">
import { FormLogin } from './FormLogin';

export default {
    name: "FormLogin",
    setup() {
        return {
            ...FormLogin(),
        }
    },
}
</script>

<style lang="less">
.buttonLogin {
    margin-top: 10px;
}
</style>