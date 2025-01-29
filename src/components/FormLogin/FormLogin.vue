<template>
    <form class="formLogin" @submit.prevent>
        <h2 class="h2"> Форма авторизации</h2>
        <div class="wrapper">
            <label class="label" for="telephone">Номер телефона</label>
            <input v-model="telephone" id="telephone" placeholder="Номер телефона">
        </div>
        <div class="wrapper">
            <label class="label label-password" for="password">Пароль</label>
            <input v-model="password" id="password" type="password" placeholder="Пароль">
        </div>
        <div class="wrapper">
            <label class="label" for="executor">Исполнитель</label>
            <input v-model="isExecutor" id="executor" type="checkbox">
        </div>
        <div class="wrapper-button">
            <button @click="clickButton" class="buttonLogin button_success button">Войти</button>
        </div>

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
.wrapper-button {
    display: flex;
    width: 100%;
    justify-content: center;
}

.buttonLogin {
    padding: 5px 55px;
}

.formLogin {
    border: 1px solid #aaa;
    background-color: #cacaca;
    padding: 10px;

    .h2 {
        font-size: 34px;
        margin-bottom: 20px;
    }

    .wrapper {
        font-size: 20px;
    }

    input {
        height: 25px;
        padding-left: 3px;
        font-size: 16px;
    }

    .label-password {
        margin-right: 82px;
    }
}
</style>